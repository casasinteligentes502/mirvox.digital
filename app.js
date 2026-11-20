/* MIRVOX AUTO PARTS — independent, no third-party UI libraries or hosted imagery. */
'use strict';
const lang=document.documentElement.lang==='en'?'en':'es';
const phone='50254609989';
const $=id=>document.getElementById(id);
const t={
 es:{
  productType:{halogenas:'ILUMINACIÓN HALÓGENA',led:'ILUMINACIÓN LED',tapones:'TAPONES DE BLOCK'},
  names:['Bombilla halógena H4','Bombilla halógena H7','Bombilla HS1 para moto','Bombilla BA20D para moto','Bombilla LED H4','Bombilla LED H7','Bombilla T10','Tapón de block tipo copa','Tapón de block tipo disco'],
  desc:['Referencia H4 para faros compatibles de automóviles. Confirmar voltaje, base y potencia.','Referencia H7 para faros compatibles. Verificar voltaje, potencia y aplicación.','Referencia HS1 utilizada en algunas motocicletas. Confirmar base y especificaciones.','Bombilla de motocicleta con base BA20D. Verificar voltaje y compatibilidad.','Alternativa LED H4: revisar base, espacio, patrón de luz y normativa de uso vial.','Alternativa LED H7: confirmar tipo de faro, base y requisitos de circulación.','Bombilla tipo T10 para aplicaciones compatibles de posición e interior.','Tapón metálico tipo copa para block de motor. Elige la medida o consulta otra.','Tapón metálico tipo disco para block de motor. Elige la medida o consulta otra.'],
  imgLabel:'Vista ilustrativa', price:'Precio por cotizar', add:'Agregar al pedido',addS:'Agregar',ask:'Consultar',added:'Agregado al pedido',
  count:n=>`${n} ${n===1?'referencia encontrada':'referencias encontradas'}`,
  noResults:'No encontramos productos con esa búsqueda.',empty:'Tu pedido está vacío.',emptyLink:'Explorar catálogo',
  qtyMinus:'Quitar unidad de',qtyPlus:'Agregar unidad de',
  checkEmpty:'Agrega al menos un repuesto antes de enviar tu solicitud.',checkRequired:'Completa los campos obligatorios.',checkPhone:'Introduce un teléfono válido de 8 a 25 caracteres.',checkPrivacy:'Necesitamos tu consentimiento para atender la solicitud.',
  orderTitle:'Hola, MIRVOX Auto Parts. Solicito cotización:',reference:'Referencia MIRVOX',name:'Nombre',tel:'Teléfono',department:'Departamento',municipality:'Municipio',address:'Dirección',notes:'Observaciones',none:'Ninguna',marketing:'Acepto recibir promociones',units:'unidades',closing:'Favor confirmar compatibilidad, precios, existencias, entrega y total antes de cualquier pago.',
  sentNoEndpoint:'Se abrió WhatsApp con tu solicitud. La copia en Google Sheets no está configurada.',sentAttempt:'WhatsApp preparado. Se intentó registrar el pedido en Google Sheets; el navegador no puede confirmar la recepción. Verifica el registro antes de considerarlo guardado.',sentError:'WhatsApp está preparado. No se pudo contactar el registro de Google Sheets: conserva el mensaje para evitar perder la solicitud.',
  quick:'Hola MIRVOX, necesito ayuda con un repuesto.',car:'Vehículo',year:'Año',part:'Pieza',unspecified:'Sin especificar'
 },
 en:{
  productType:{halogenas:'HALOGEN LIGHTING',led:'LED LIGHTING',tapones:'BLOCK PLUGS'},
  names:['H4 halogen bulb','H7 halogen bulb','HS1 motorcycle bulb','BA20D motorcycle bulb','H4 LED bulb','H7 LED bulb','T10 wedge bulb','Cup-type engine block plug','Disc-type engine block plug'],
  desc:['H4 reference for compatible car headlights. Confirm voltage, base and wattage.','H7 reference for compatible headlights. Check voltage, wattage and application.','HS1 bulb used in some motorcycles. Confirm base and specifications.','Motorcycle bulb with BA20D base. Check voltage and compatibility.','H4 LED option: check base, fitment, beam pattern and local road regulations.','H7 LED option: verify headlight housing, base and road-use requirements.','T10 wedge bulb for compatible marker and interior light applications.','Cup-style metal block plug. Choose a size or ask for another.','Disc-style metal block plug. Choose a size or ask for another.'],
  imgLabel:'Illustrative image',price:'Price on request',add:'Add to request',addS:'Add',ask:'Ask',added:'Added to request',
  count:n=>`${n} ${n===1?'item found':'items found'}`,
  noResults:'No products match your search.',empty:'Your request is empty.',emptyLink:'Browse catalog',
  qtyMinus:'Remove one',qtyPlus:'Add one',
  checkEmpty:'Add at least one product to your request.',checkRequired:'Please complete the required fields.',checkPhone:'Enter a valid phone number (8–25 characters).',checkPrivacy:'We need your consent to respond to this request.',
  orderTitle:'Hello, MIRVOX Auto Parts. I would like a quote:',reference:'MIRVOX reference',name:'Name',tel:'Phone',department:'Department',municipality:'Municipality',address:'Address',notes:'Notes',none:'None',marketing:'I agree to marketing messages',units:'units',closing:'Please confirm fitment, prices, inventory, delivery charges and total before payment.',
  sentNoEndpoint:'Your WhatsApp message is ready. Google Sheets logging is not configured.',sentAttempt:'WhatsApp message prepared. Google Sheets recording was attempted but the browser cannot verify receipt; check the sheet before relying on the record.',sentError:'WhatsApp message prepared. Could not reach the Google Sheets logging endpoint; save the message so the request is not lost.',
  quick:'Hello MIRVOX, I need help finding a part.',car:'Vehicle',year:'Year',part:'Part',unspecified:'Not provided'
 }
}[lang];
const SPECS={
 es:{'H4-HAL':['Base P43t','Luz alta y baja'],'H7-HAL':['Base PX26d','Un filamento'],'HS1-MOTO':['Base PX43t','Motocicleta'],'BA20D-MOTO':['Base BA20d','Motocicleta'],'H4-LED':['Base H4','Tecnología LED'],'H7-LED':['Base H7','Tecnología LED'],'T10':['Base W2.1x9.5d','Posición / interior'],'PLUG-CUP':['Tipo copa','Block de motor'],'PLUG-DISC':['Tipo disco','Block de motor']},
 en:{'H4-HAL':['P43t base','High & low beam'],'H7-HAL':['PX26d base','Single filament'],'HS1-MOTO':['PX43t base','Motorcycle'],'BA20D-MOTO':['BA20d base','Motorcycle'],'H4-LED':['H4 base','LED technology'],'H7-LED':['H7 base','LED technology'],'T10':['W2.1x9.5d base','Marker / interior'],'PLUG-CUP':['Cup type','Engine block'],'PLUG-DISC':['Disc type','Engine block']}
}[lang];
const CATLABEL={es:{halogenas:'Halógena',led:'LED',tapones:'Block'},en:{halogenas:'Halogen',led:'LED',tapones:'Plug'}}[lang];
const SKUS=[
 ['H4-HAL','halogenas','h4-halogena.webp'],['H7-HAL','halogenas','h7-halogena.webp'],
 ['HS1-MOTO','halogenas','hs1-moto.webp'],['BA20D-MOTO','halogenas','ba20d-moto.webp'],
 ['H4-LED','led','h4-led.webp'],['H7-LED','led','h7-led.webp'],['T10','halogenas','t10.webp']
];
const baseProducts=SKUS.map(([id,category,image],i)=>({id,category,image,name:t.names[i],desc:t.desc[i]}));
const PLUGS=[
  {
    "id": "JAN-65-02",
    "category": "tapones",
    "image": "tap-copa-media-pulgada.webp",
    "plugMm": 12.7,
    "sizeEs": "½ pulgada",
    "sizeEn": "1/2 inch",
    "noteEs": "",
    "noteEn": ""
  },
  {
    "id": "JAN-65-09",
    "category": "tapones",
    "image": "tap-copa-18mm.webp",
    "plugMm": 18,
    "sizeEs": "18 mm",
    "sizeEn": "18 mm",
    "noteEs": "",
    "noteEn": ""
  },
  {
    "id": "JAN-65-12",
    "category": "tapones",
    "image": "tap-copa-20mm-suzuki.webp",
    "plugMm": 20,
    "sizeEs": "20 mm",
    "sizeEn": "20 mm",
    "noteEs": "Suzuki",
    "noteEn": "Suzuki"
  },
  {
    "id": "JAN-65-16",
    "category": "tapones",
    "image": "tap-copa-22mm.webp",
    "plugMm": 22,
    "sizeEs": "22 mm",
    "sizeEn": "22 mm",
    "noteEs": "",
    "noteEn": ""
  },
  {
    "id": "JAN-65-20",
    "category": "tapones",
    "image": "tap-copa-25mm.webp",
    "plugMm": 25,
    "sizeEs": "25 mm",
    "sizeEn": "25 mm",
    "noteEs": "",
    "noteEn": ""
  },
  {
    "id": "JAN-65-25",
    "category": "tapones",
    "image": "tap-copa-28mm.webp",
    "plugMm": 28,
    "sizeEs": "28 mm",
    "sizeEn": "28 mm",
    "noteEs": "",
    "noteEn": ""
  },
  {
    "id": "JAN-65-27",
    "category": "tapones",
    "image": "tap-copa-29mm.webp",
    "plugMm": 29,
    "sizeEs": "29 mm",
    "sizeEn": "29 mm",
    "noteEs": "",
    "noteEn": ""
  },
  {
    "id": "JAN-65-28",
    "category": "tapones",
    "image": "tap-disco-30mm.webp",
    "plugMm": 30,
    "sizeEs": "30 mm",
    "sizeEn": "30 mm",
    "noteEs": "Block de motor",
    "noteEn": "Engine block"
  },
  {
    "id": "JAN-65-33",
    "category": "tapones",
    "image": "tap-disco-34mm.webp",
    "plugMm": 34,
    "sizeEs": "34 mm",
    "sizeEn": "34 mm",
    "noteEs": "Chevette / Monza / Celebrity",
    "noteEn": "Chevette / Monza / Celebrity"
  },
  {
    "id": "JAN-65-35",
    "category": "tapones",
    "image": "tap-copa-35mm.webp",
    "plugMm": 35,
    "sizeEs": "35 mm",
    "sizeEn": "35 mm",
    "noteEs": "Block de motor",
    "noteEn": "Engine block"
  },
  {
    "id": "JAN-65-42",
    "category": "tapones",
    "image": "tap-disco-40mm.webp",
    "plugMm": 40,
    "sizeEs": "40 mm",
    "sizeEn": "40 mm",
    "noteEs": "Block de motor",
    "noteEn": "Engine block"
  }
];
const plugProducts=PLUGS.map(p=>({
 id:p.id,category:p.category,image:p.image,plugMm:p.plugMm,
 name:(lang==='es'?'Tapón de block ':'Engine block plug ')+(lang==='es'?p.sizeEs:p.sizeEn),
 desc:(lang==='es'?'Tapón metálico de expansión para motor. Confirma forma, diámetro y compatibilidad antes de cotizar.':'Metal engine core plug. Confirm type, diameter and fitment before requesting a quote.'),
 note:lang==='es'?p.noteEs:p.noteEn,
 size:lang==='es'?p.sizeEs:p.sizeEn,
 legacyId:'PLUG-'+(p.plugMm===12.7?'12':p.plugMm)
}));
const products=[...baseProducts,...plugProducts];
const storageKey='mirvox-cart-v1';
let cart={};try{const v=JSON.parse(localStorage.getItem(storageKey)||'{}');if(v&&typeof v==='object'&&!Array.isArray(v))for(const p of products){const n=Number(v[p.id]??(p.legacyId?v[p.legacyId]:undefined));if(Number.isInteger(n)&&n>0&&n<=999)cart[p.id]=n}}catch{}
let filter='todos',query='';let lastFocus=null;
function whatsapp(message){return 'https://wa.me/'+phone+'?text='+encodeURIComponent(message)}
function getValue(id){return ($(id)?.value||'').trim()}
function count(){return Object.values(cart).reduce((s,n)=>s+n,0)}
function saveCart(){try{localStorage.setItem(storageKey,JSON.stringify(cart))}catch{};$('cartCount').textContent=count();renderCart()}
function changeQty(id,diff){if(!products.some(p=>p.id===id))return;const val=Math.min(999,Math.max(0,(cart[id]||0)+diff));if(val)cart[id]=val;else delete cart[id];saveCart()}
function renderProducts(){
 const term=query.toLocaleLowerCase(lang).trim();
 const all=products.filter(p=>(filter==='todos'||p.category===filter)&&(`${p.name} ${p.desc} ${p.id} ${p.legacyId||''} ${p.note||''}`).toLocaleLowerCase(lang).includes(term));
 const collapse=filter==='todos'&&!term;const matches=collapse?all.filter(p=>p.category!=='tapones'):all;
 $('productCount').textContent=t.count(all.length);
 const pb=$('plugBanner');if(pb)pb.hidden=filter!=='tapones';
 const coll=collapse?`<article class="product-card plug-collection"><div class="product-image"><img src="assets/tapones-varios.webp" loading="lazy" width="550" height="240" alt=""><span class="chip">${CATLABEL.tapones}</span></div><div class="product-body"><h3 class="product-name">${lang==='es'?'Tapones de block de motor':'Engine block plugs'}</h3><ul class="product-specs"><li>${PLUGS.length} ${lang==='es'?'medidas':'sizes'}</li><li>${lang==='es'?'De ½ pulg. a 40 mm':'From 1/2" to 40 mm'}</li></ul><p class="product-desc">${lang==='es'?'Elige tu medida y agrégala al pedido.':'Choose your size and add it to your request.'}</p><div class="product-foot"><div class="product-actions"><button type="button" class="product-add" data-show-plugs>${lang==='es'?'Ver medidas':'See sizes'}<svg class="icon" aria-hidden="true"><use href="#i-arrow"/></svg></button></div></div></div></article>`:'';
 $('productGrid').innerHTML=matches.length?matches.map(p=>{
   const alt=(lang==='es'?'Foto de referencia de ':'Reference photo of ')+p.name;
   const specList=p.plugMm?['Ø '+(p.plugMm===12.7?'½ pulg.':p.plugMm+' mm'),(lang==='es'?'Block de motor':'Engine block')].concat(p.note?[p.note]:[]):(SPECS[p.id]||[]);const specs=specList.map(s=>`<li>${s}</li>`).join('');
   return `<article class="product-card${p.category==='tapones'?' is-plug':''}"><div class="product-image"><img src="assets/${p.image}" loading="lazy" decoding="async" width="600" height="600" alt="${alt}"><span class="chip ${p.category==='led'?'led':''}">${CATLABEL[p.category]}</span><span class="product-sku">${p.id}</span></div><div class="product-body"><h3 class="product-name">${p.name}</h3><ul class="product-specs">${specs}</ul><p class="product-desc">${p.desc}</p><div class="product-foot"><span class="product-availability">${t.price}</span><div class="product-actions"><button type="button" class="product-add" data-add="${p.id}"><span class="lbl-l">${t.add}</span><span class="lbl-s">${t.addS}</span><svg class="icon" aria-hidden="true"><use href="#i-plus"/></svg></button><a class="product-ask" target="_blank" rel="noopener noreferrer" aria-label="${t.ask}: ${p.name}" href="${whatsapp(t.quick+' '+p.name+' ('+p.id+').')}"><svg class="icon" aria-hidden="true"><use href="#i-wa"/></svg></a></div></div></div></article>`
 }).join('')+coll:`<div class="no-products">${t.noResults}</div>`
}
function renderCart(){
 const rows=products.filter(p=>cart[p.id]);
 $('cartItems').innerHTML=rows.length?rows.map(p=>`<div class="cart-row"><img src="assets/${p.image}" alt="" width="66" height="66" loading="lazy"><div class="cart-row-copy"><strong>${p.name}</strong><small>${p.id}</small></div><div class="quantity"><button type="button" data-minus="${p.id}" aria-label="${t.qtyMinus}: ${p.name}">−</button><span>${cart[p.id]}</span><button type="button" data-plus="${p.id}" aria-label="${t.qtyPlus}: ${p.name}">+</button></div></div>`).join(''):`<div class="empty-cart"><span>▤</span>${t.empty} <a href="#productos" id="emptyLink">${t.emptyLink}</a></div>`;
 $('checkout').disabled=!rows.length;
 $('checkout').style.opacity=rows.length?'1':'.55';
}
function openCart(open){
 const panel=$('cartPanel');lastFocus=open?document.activeElement:lastFocus;
 panel.classList.toggle('open',open);panel.setAttribute('aria-hidden',String(!open));panel.inert=!open;
 $('overlay').hidden=!open;document.body.classList.toggle('no-scroll',open);
 if(open)$('cartClose').focus();else if(lastFocus&&typeof lastFocus.focus==='function')lastFocus.focus();
}
$('productGrid').addEventListener('click',event=>{if(event.target.closest('[data-show-plugs]')){const f=$('filters').querySelector('[data-filter="tapones"]');if(f)f.click();$('productos').scrollIntoView({behavior:'smooth'});return}const btn=event.target.closest('[data-add]');if(btn){changeQty(btn.dataset.add,1);openCart(true)}});
$('cartItems').addEventListener('click',event=>{
 const plus=event.target.closest('[data-plus]'),minus=event.target.closest('[data-minus]');
 if(plus)changeQty(plus.dataset.plus,1);
 if(minus)changeQty(minus.dataset.minus,-1);
 if(event.target.closest('#emptyLink'))openCart(false);
});
$('cartOpen').addEventListener('click',()=>openCart(true));
for(const b of document.querySelectorAll('[data-open-cart]'))b.addEventListener('click',()=>openCart(true));
$('cartClose').addEventListener('click',()=>openCart(false));
$('overlay').addEventListener('click',()=>openCart(false));
$('clearCart').addEventListener('click',()=>{cart={};saveCart();$('checkoutStatus').textContent=''});
$('filters').addEventListener('click',event=>{
 const btn=event.target.closest('[data-filter]');if(!btn)return;
 filter=btn.dataset.filter;for(const b of $('filters').querySelectorAll('[data-filter]')){const yes=b===btn;b.classList.toggle('active',yes);b.setAttribute('aria-pressed',String(yes))}
 renderProducts();
});
$('search').addEventListener('input',event=>{query=event.target.value;renderProducts()});

// Product photographs supplied by MIRVOX owner, bundled locally. Each size is a visual reference.
const plugByCode=Object.fromEntries(plugProducts.map(p=>[p.id,p]));
const measureImage=$('measureImage'), measureTitle=$('measureTitle'),measureCode=$('measureCode');
let activeMeasure='JAN-65-16';
function setMeasure(code){
 const p=plugByCode[code];if(!p||!measureImage)return;
 activeMeasure=code;
 measureImage.src='assets/'+p.image;
 measureImage.alt=(lang==='es'?'Foto de referencia: ':'Reference photo: ')+p.name;
 measureTitle.textContent=p.name;
 measureCode.textContent=p.id+(p.note?' · '+p.note:'');
 document.querySelectorAll('[data-plug-code]').forEach(btn=>{
  const yes=btn.dataset.plugCode===code;
  btn.classList.toggle('selected',yes);btn.setAttribute('aria-pressed',String(yes));
 });
}
document.querySelectorAll('[data-plug-code]').forEach(btn=>btn.addEventListener('click',()=>setMeasure(btn.dataset.plugCode)));
$('measureGoto')?.addEventListener('click',()=>{
 const btn=$('filters').querySelector('[data-filter="tapones"]');if(btn)btn.click();
 query=activeMeasure;$('search').value=activeMeasure;renderProducts();
 $('productos').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
});
setMeasure(activeMeasure);
for(const btn of document.querySelectorAll('[data-jump]'))btn.addEventListener('click',()=>{
 const category=btn.dataset.jump;const target=$('filters').querySelector(`[data-filter="${category}"]`);if(target)target.click();$('productos').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
});
function applyTheme(theme){
 const valid=theme==='light'?'light':'dark';document.documentElement.dataset.theme=valid;
 $('themeBtn').setAttribute('aria-pressed',String(valid==='light'));
 try{localStorage.setItem('mirvox-theme',valid)}catch{}
 const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=valid==='light'?'#f5f7f9':'#0b111a';
}
let savedTheme=null;try{savedTheme=localStorage.getItem('mirvox-theme')}catch{}
applyTheme(savedTheme==='light'||savedTheme==='dark'?savedTheme:'dark');
$('themeBtn').addEventListener('click',()=>applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
$('menuBtn').addEventListener('click',()=>{
 const open=!$('mainNav').classList.contains('open');$('mainNav').classList.toggle('open',open);$('menuBtn').setAttribute('aria-expanded',String(open));
});
for(const a of document.querySelectorAll('#mainNav a'))a.addEventListener('click',()=>{$('mainNav').classList.remove('open');$('menuBtn').setAttribute('aria-expanded','false')});
// Keep the same fragment (catalog/FAQ) when changing languages.
const langLink=document.querySelector('.language-btn');if(langLink)langLink.addEventListener('click',()=>{if(location.hash)langLink.href=(lang==='es'?'en.html':'index.html')+location.hash});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'){
  if($('cartPanel').classList.contains('open'))openCart(false);
  if($('mainNav').classList.contains('open')){$('mainNav').classList.remove('open');$('menuBtn').setAttribute('aria-expanded','false')}
 }
 if(event.key==='Tab'&&$('cartPanel').classList.contains('open')){
  const els=[...$('cartPanel').querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),textarea:not(:disabled)')].filter(e=>e.getClientRects().length);if(!els.length)return;
  const first=els[0],last=els[els.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
 }
});

const heroSlides=[...document.querySelectorAll('.hero-slide')];
const heroDots=[...document.querySelectorAll('.slider-dot')];
let heroIndex=0;
let heroTimer=null;
function setHeroSlide(index){
 if(!heroSlides.length)return;
 heroIndex=(index+heroSlides.length)%heroSlides.length;
 heroSlides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===heroIndex);slide.tabIndex=i===heroIndex?0:-1;slide.setAttribute('aria-hidden',String(i!==heroIndex));});
 heroDots.forEach((dot,i)=>dot.classList.toggle('is-active',i===heroIndex));
}
function stopHeroSlider(){if(heroTimer){clearInterval(heroTimer);heroTimer=null}}
function startHeroSlider(){
 if(heroSlides.length<2||document.hidden||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 stopHeroSlider();
 heroTimer=setInterval(()=>setHeroSlide(heroIndex+1),3000);
}
heroDots.forEach(dot=>dot.addEventListener('click',()=>{setHeroSlide(Number(dot.dataset.slideTo)||0);startHeroSlider()}));
heroSlides.forEach((slide,index)=>{
 slide.addEventListener('click',()=>{
  setHeroSlide(index);
  const filterTarget=slide.dataset.filterTarget;
  if(filterTarget){
   const targetBtn=$('filters')?.querySelector(`[data-filter="${filterTarget}"]`);
   if(targetBtn)targetBtn.click();
  }
 });
});
const heroSlider=document.querySelector('.hero-slider');
if(heroSlider){heroSlider.addEventListener('mouseenter',stopHeroSlider);heroSlider.addEventListener('mouseleave',startHeroSlider);heroSlider.addEventListener('focusin',stopHeroSlider);heroSlider.addEventListener('focusout',startHeroSlider);}
document.addEventListener('visibilitychange',()=>document.hidden?stopHeroSlider():startHeroSlider());
setHeroSlide(0);
startHeroSlider();

// Multi-item request: customers can add, edit, remove, copy and quote all items together.
const quoteItems=$('quoteItems'),quoteStatus=$('quoteStatus');
const quoteWords=lang==='es'?{
 part:'Artículo / referencia',quantity:'Cantidad',partPlaceholder:'Ej. Bombilla H7, tapón 22 mm, JAN-65-16',remove:'Eliminar artículo',
 one:'artículo',many:'artículos',unit:'unidad',units:'unidades',
 missing:'Escribe la pieza o referencia de cada artículo antes de enviar.',badQty:'La cantidad debe ser un número entero entre 1 y 9999.',
 header:'Hola MIRVOX Auto Parts, deseo cotizar los siguientes artículos:', vehicle:'Marca y modelo',year:'Año',items:'ARTÍCULOS A COTIZAR',
 notes:'Observaciones',total:'Total solicitado',end:'Favor confirmar precios, existencias, compatibilidad, envío y total antes de cualquier pago.',
 ready:'Se abrió WhatsApp con tu lista completa. Revisa el mensaje y presiona Enviar.',
 copied:'Lista copiada. Puedes pegarla en WhatsApp.',copyFailed:'No se pudo copiar automáticamente. Selecciona y copia la lista del recuadro.',
 long:'Tu lista es extensa. La copié al portapapeles; abre WhatsApp y pega el mensaje completo.',
 longFail:'Tu lista es extensa: cópiala del recuadro y pégala en WhatsApp.'
}:{
 part:'Part / reference',quantity:'Quantity',partPlaceholder:'e.g. H7 bulb, 22 mm plug, JAN-65-16',remove:'Remove item',
 one:'item',many:'items',unit:'unit',units:'units',
 missing:'Enter a part name or reference for every item.',badQty:'Quantity must be a whole number between 1 and 9999.',
 header:'Hello MIRVOX Auto Parts, please quote these items:',vehicle:'Make and model',year:'Year',items:'ITEMS TO QUOTE',
 notes:'Notes',total:'Total requested',end:'Please confirm prices, stock, fitment, shipping and total before any payment.',
 ready:'WhatsApp opened with your full list. Review the message and press Send.',
 copied:'List copied. You can paste it into WhatsApp.',copyFailed:'Automatic copy failed. Select and copy your request from the text box.',
 long:'Your list is long. I copied it to clipboard; open WhatsApp and paste the full message.',
 longFail:'Your list is long: copy the text in the box and paste it into WhatsApp.'
};
let quoteId=0;
function addQuoteLine(value='',qty=1){
 const id=++quoteId;
 const row=document.createElement('div');row.className='quote-line';row.dataset.line=String(id);
 const part=document.createElement('div');part.className='field quote-part';
 const partLabel=document.createElement('label');partLabel.htmlFor='quotePart'+id;
 const partInput=document.createElement('input');partInput.type='text';partInput.id='quotePart'+id;partInput.setAttribute('data-quote-part','');partInput.maxLength=140;partInput.required=true;partInput.autocomplete='off';partInput.placeholder=quoteWords.partPlaceholder;partInput.value=value;
 part.append(partLabel,partInput);
 const quantity=document.createElement('div');quantity.className='field quote-qty';
 const qtyLabel=document.createElement('label');qtyLabel.htmlFor='quoteQty'+id;qtyLabel.textContent=quoteWords.quantity;
 const qtyInput=document.createElement('input');qtyInput.id='quoteQty'+id;qtyInput.type='number';qtyInput.min='1';qtyInput.max='9999';qtyInput.step='1';qtyInput.required=true;qtyInput.inputMode='numeric';qtyInput.setAttribute('data-quote-qty','');qtyInput.value=String(qty);
 quantity.append(qtyLabel,qtyInput);
 const remove=document.createElement('button');remove.type='button';remove.className='quote-remove';remove.setAttribute('data-remove-quote','');remove.setAttribute('aria-label',quoteWords.remove);remove.title=quoteWords.remove;remove.textContent='×';
 row.append(part,quantity,remove);quoteItems.append(row);updateQuoteSummary();return row;
}
function quoteRows(){return [...quoteItems.querySelectorAll('.quote-line')]}
function updateQuoteSummary(){
 const rows=quoteRows();let units=0;
 rows.forEach((row,i)=>{const label=row.querySelector('.quote-part label');if(label)label.textContent=quoteWords.part+' '+(i+1);const n=Number(row.querySelector('[data-quote-qty]').value);if(Number.isInteger(n)&&n>0)units+=n});
 $('quoteLineCount').textContent=String(rows.length);
 $('quoteSummary').textContent=rows.length+' '+(rows.length===1?quoteWords.one:quoteWords.many)+' · '+units+' '+(units===1?quoteWords.unit:quoteWords.units);
}
function quoteSetStatus(message,error=false){quoteStatus.textContent=message;quoteStatus.classList.toggle('is-error',error)}
function quoteValidate(){
 const items=[];
 for(const row of quoteRows()){
  const input=row.querySelector('[data-quote-part]'),qtyInput=row.querySelector('[data-quote-qty]');
  const part=input.value.trim(),count=Number(qtyInput.value);
  if(!part){quoteSetStatus(quoteWords.missing,true);input.focus();return null}
  if(!Number.isInteger(count)||count<1||count>9999){quoteSetStatus(quoteWords.badQty,true);qtyInput.focus();return null}
  items.push({part,count});
 }
 return items;
}
function quoteText(items){
 const lines=[quoteWords.header];
 const vehicle=getValue('vehicle'),year=getValue('vehicleYear'),notes=getValue('quoteNotes');
 if(vehicle)lines.push(quoteWords.vehicle+': '+vehicle);
 if(year)lines.push(quoteWords.year+': '+year);
 lines.push('',quoteWords.items+':');
 items.forEach((item,i)=>lines.push((i+1)+'. '+item.part+' — '+item.count+' '+(item.count===1?quoteWords.unit:quoteWords.units)));
 const total=items.reduce((sum,item)=>sum+item.count,0);
 lines.push('',quoteWords.total+': '+items.length+' '+(items.length===1?quoteWords.one:quoteWords.many)+' / '+total+' '+(total===1?quoteWords.unit:quoteWords.units));
 if(notes)lines.push(quoteWords.notes+': '+notes);
 lines.push('',quoteWords.end);return lines.join('\n');
}
async function copyQuoteText(message){
 try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(message);return true}}catch(e){}
 const textArea=$('quoteFallbackText');textArea.value=message;const wrapper=$('quoteFallback');wrapper.hidden=false;
 textArea.focus();textArea.select();
 try{return document.execCommand('copy')}catch(e){return false}
}
$('addQuoteItem').addEventListener('click',()=>{const row=addQuoteLine();row.querySelector('[data-quote-part]').focus();quoteSetStatus('')});
quoteItems.addEventListener('click',event=>{const remove=event.target.closest('[data-remove-quote]');if(!remove)return;const row=remove.closest('.quote-line');row.remove();if(!quoteRows().length)addQuoteLine();updateQuoteSummary();quoteSetStatus('')});
quoteItems.addEventListener('input',()=>{updateQuoteSummary();quoteSetStatus('')});
$('copyQuote').addEventListener('click',async()=>{const items=quoteValidate();if(!items)return;const msg=quoteText(items);const ok=await copyQuoteText(msg);quoteSetStatus(ok?quoteWords.copied:quoteWords.copyFailed,!ok)});
// Registrar solicitudes en la base MIRVOX y después continuar por WhatsApp.
const leadWords=lang==='es'?{
  bad:'Ingresa un nombre válido, WhatsApp y acepta el aviso de privacidad.',wait:'Registrando la solicitud en Google Sheets…',
  done:'Solicitud registrada en MIRVOX. Ahora se abrirá WhatsApp.',notReady:'Falta conectar el receptor de Google Sheets. Puedes usar WhatsApp, pero todavía NO se guardará esta solicitud.',
  fail:'No se confirmó el registro en Google Sheets. Puedes reintentar o abrir WhatsApp sin registro.',
  saved:'Guardado en Google Sheets. Presiona Enviar dentro de WhatsApp.',
  fallback:'Continúa por WhatsApp: el registro en Google Sheets no está activo.'
}:{
  bad:'Enter your name, WhatsApp number and accept the privacy notice.',wait:'Saving this request to Google Sheets…',
  done:'Request saved in MIRVOX. WhatsApp will now open.',notReady:'Google Sheets receiver is not configured. You may use WhatsApp, but this request will NOT be recorded.',
  fail:'Google Sheets did not confirm receipt. Try again or use WhatsApp without saving.',
  saved:'Saved to Google Sheets. Press Send inside WhatsApp.',
  fallback:'Continue via WhatsApp: Google Sheets is not active.'
};
function validPhone(text){const digits=text.replace(/\D/g,'');return digits.length>=8&&digits.length<=15&&/^[+\d\s()\-]{8,25}$/.test(text)}
function showFallback(id,href){const link=$(id);if(link){link.href=href;link.hidden=false}}
function formFieldError(field,description,status){status.textContent=description;field?.focus();return false}
async function registerAndContinue({data,msg,status,button,fallbackId}){
 const url=whatsapp(msg);const fallback=$(fallbackId);if(fallback)fallback.hidden=true;
 status.classList.remove('is-error');
 if(!window.MIRVOX_SHEETS?.configured()){
  status.classList.add('is-error');
  status.textContent=leadWords.notReady;showFallback(fallbackId,url);return;
 }
 button.disabled=true;button.setAttribute('aria-busy','true');status.textContent=leadWords.wait;
 try{
  const result=await window.MIRVOX_SHEETS.save(data);
  status.textContent=leadWords.saved+' #'+result.orderId;
  showFallback(fallbackId,url);
  // Tras recibir acuse del servidor, continuar en la misma pestaña evita bloqueos de pop-ups.
  window.location.assign(url);
 }catch(error){
  status.classList.add('is-error');
  status.textContent=leadWords.fail+' ('+(error?.message||'ERROR')+')';
  showFallback(fallbackId,url);
 }finally{button.disabled=false;button.removeAttribute('aria-busy')}
}
$('compatForm').addEventListener('submit',async event=>{
 event.preventDefault();const items=quoteValidate();if(!items)return;
 const status=$('quoteStatus');
 const name=getValue('leadName'),phone=getValue('leadPhone');
 if(name.length<2)return formFieldError($('leadName'),leadWords.bad,status);
 if(!validPhone(phone))return formFieldError($('leadPhone'),leadWords.bad,status);
 if(!$('leadPrivacy').checked)return formFieldError($('leadPrivacy'),leadWords.bad,status);
 const orderId=window.MIRVOX_SHEETS.makeId();
 const rows=items.map(item=>({sku:'',name:item.part,qty:item.count}));
 const data={orderId,name,phone,region:getValue('leadRegion'),city:getValue('leadCity'),address:getValue('leadAddress'),
  notes:[getValue('vehicle')?'Vehículo: '+getValue('vehicle'):'',getValue('vehicleYear')?'Año: '+getValue('vehicleYear'):'',getValue('quoteNotes')].filter(Boolean).join(' · '),
  privacy:true,marketing:$('leadMarketing').checked,honeypot:getValue('leadWebsite'),items:rows,source:'busqueda'};
 const msg=quoteText(items)+'\n\n'+(lang==='es'?'Solicitud':'Request')+': '+orderId+'\n'+t.name+': '+name+'\n'+t.tel+': '+phone;
 await registerAndContinue({data,msg,status,button:$('sendQuote'),fallbackId:'quoteWhatsappFallback'});
});
addQuoteLine();
if(window.MIRVOX_SHEETS?.configured()){const hint=$('crmInstallHint');if(hint)hint.hidden=true;}
$('checkoutForm').addEventListener('submit',async event=>{
 event.preventDefault();const items=products.filter(p=>cart[p.id]);const status=$('checkoutStatus');status.textContent='';
 if(!items.length){status.textContent=t.checkEmpty;return}
 for(const id of ['customerName','customerPhone','customerRegion','customerCity','customerAddress']){
  if(!getValue(id)){status.textContent=t.checkRequired;$(id).focus();return}
 }
 if(!validPhone(getValue('customerPhone'))){status.textContent=t.checkPhone;$('customerPhone').focus();return}
 if(!$('customerPrivacy').checked){status.textContent=t.checkPrivacy;$('customerPrivacy').focus();return}
 const orderId=window.MIRVOX_SHEETS.makeId();
 const name=getValue('customerName'),phone=getValue('customerPhone');
 const data={orderId,name,phone,region:getValue('customerRegion'),city:getValue('customerCity'),address:getValue('customerAddress'),notes:getValue('customerNotes'),
  privacy:true,marketing:$('customerMarketing').checked,honeypot:'',source:'carrito',
  items:items.map(p=>({sku:p.id,name:p.name,qty:cart[p.id]}))};
 const msg=[t.orderTitle,`${t.reference}: ${orderId}`,
  ...items.map(p=>`• ${p.name} [${p.id}]: ${cart[p.id]} ${t.units}`),'',
  `${t.name}: ${name}`,`${t.tel}: ${phone}`,`${t.department}: ${getValue('customerRegion')}`,
  `${t.municipality}: ${getValue('customerCity')}`,`${t.address}: ${getValue('customerAddress')}`,
  `${t.notes}: ${getValue('customerNotes')||t.none}`,'',t.closing].join('\n');
 await registerAndContinue({data,msg,status,button:$('checkout'),fallbackId:'cartWhatsappFallback'});
});
if('IntersectionObserver'in window){
 const observer=new IntersectionObserver(entries=>{for(const en of entries)if(en.isIntersecting){en.target.classList.add('in-view');observer.unobserve(en.target)}},{threshold:.08,rootMargin:'0px 0px -28px 0px'});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view'));
const hdr=document.querySelector('.site-header');const onScroll=()=>hdr&&hdr.classList.toggle('scrolled',scrollY>8);addEventListener('scroll',onScroll,{passive:true});onScroll();
$('year').textContent=String(new Date().getFullYear());
renderProducts();saveCart();
