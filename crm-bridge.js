/* Registro de solicitudes mediante POST a Google Apps Script en iframe aislado.
   No afirma éxito si no recibe respuesta verificable del servidor.
   La Google Sheet sigue privada; no hay claves en el navegador. */
(function(){
  'use strict';
  const endpoint=String(window.MIRVOX_CRM?.WEB_APP_URL||'').trim();
  function configured(){return /^https:\/\/script\.google\.com\/macros\/s\/[-\w]+\/exec(?:\?.*)?$/.test(endpoint)}
  function nonce(){
    const b=new Uint8Array(18);
    if(window.crypto?.getRandomValues)window.crypto.getRandomValues(b);
    else throw Error('Navegador sin soporte para generación segura de identificadores');
    return Array.from(b,x=>x.toString(16).padStart(2,'0')).join('');
  }
  function makeId(){return 'MVX-'+Date.now().toString(36).toUpperCase()+'-'+nonce().slice(0,8).toUpperCase()}
  function save(data){return new Promise((resolve,reject)=>{
    if(!configured()){reject(new Error('CONFIG_NOT_READY'));return}
    let token;
    try{token=nonce()}catch(e){reject(e);return}
    const iframe=document.createElement('iframe');iframe.name='mirvox-save-'+token;iframe.setAttribute('aria-hidden','true');iframe.tabIndex=-1;
    iframe.style.cssText='position:absolute;width:1px;height:1px;left:-9999px;opacity:0;border:0;';
    const form=document.createElement('form');form.method='POST';form.action=endpoint;form.target=iframe.name;form.acceptCharset='UTF-8';form.style.display='none';
    const add=(name,value)=>{const inp=document.createElement('input');inp.type='hidden';inp.name=name;inp.value=value;form.appendChild(inp)};
    add('payload',JSON.stringify(data));add('nonce',token);
    let done=false;
    let timer;
    function finish(err,out){if(done)return;done=true;clearTimeout(timer);window.removeEventListener('message',onMessage);form.remove();iframe.remove();err?reject(err):resolve(out)}
    function onMessage(event){
      const x=event.data;
      if(!x||x.source!=='mirvox-sheets-v1'||x.nonce!==token)return;
      // Apps Script HTML service can run in an opaque (null) iframe origin.
      if(event.origin!=='null' && !/^https:\/\/([a-z0-9-]+\.)?(googleusercontent\.com|script\.google\.com)$/.test(event.origin))return;
      if(x.ok===true && typeof x.orderId==='string')finish(null,x);
      else finish(new Error(String(x.error||'SERVER_ERROR')));
    }
    window.addEventListener('message',onMessage);
    timer=setTimeout(()=>finish(new Error('TIMEOUT')),25000);
    document.body.append(iframe,form);
    form.submit();
  })}
  window.MIRVOX_SHEETS={save,configured,makeId};
})();
