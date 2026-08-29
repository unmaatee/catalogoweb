const WHATSAPP_NUMBER = '5493624202299';
const INSTAGRAM_URL = 'https://www.instagram.com/unmaatee/';

const PRODUCTS = [
  { id:'combo_esencial', name:'Combo Matero Esencial', price:61500, compareAt:68000, category:'Combos', image:'assets/mate_camionero.jpg', description:'Mate Camionero + Termo Media Manija + Bombilla de Acero Inox.', stock:'available', featured:true, badge:'Ahorro combo' },
  { id:'combo_premium', name:'Combo Premium Imperial', price:78900, compareAt:86000, category:'Combos', image:'assets/mate_imperial.jpg', description:'Mate Imperial + Termo Stanley MateSystem + Bombilla de Alpaca.', stock:'low', featured:true, badge:'Top ventas' },
  { id:'combo_roma', name:'Combo Roma Matero', price:82900, compareAt:89550, category:'Combos', image:'assets/termera_roma.jpg', description:'Termera Roma + Mate Torpedo + Bombilla de Acero Inox.', stock:'available', featured:true, badge:'Edición especial' },

  { id:'termo_termolar', name:'Termo Termolar', price:18000, category:'Termos', image:'assets/termo_termolar.jpg', description:'Ideal para uso diario, práctico y rendidor.', stock:'available', featured:false },
  { id:'termo_stanley_matesystem', name:'Termo Stanley MateSystem', price:32000, category:'Termos', image:'assets/termo_stanley_matesystem.jpg', description:'Diseño clásico para cebar con estilo.', stock:'available', featured:true },
  { id:'termo_media_manija', name:'Termo Media Manija', price:25000, category:'Termos', image:'assets/termo_media_manija.jpg', description:'Cómodo agarre y formato funcional.', stock:'available', featured:false },
  { id:'termo_stanley', name:'Termo Stanley', price:29000, category:'Termos', image:'assets/termo_stanley.jpg', description:'Formato térmico versátil y moderno.', stock:'low', featured:false },

  { id:'mate_criollo', name:'Mate Criollo', price:50050, category:'Mates', image:'assets/mate_criollo.jpg', description:'Estilo tradicional con presencia fuerte.', stock:'available', featured:true },
  { id:'mate_imperial', name:'Mate Imperial', price:44000, category:'Mates', image:'assets/mate_imperial.jpg', description:'Uno de los modelos más elegidos.', stock:'available', featured:true },
  { id:'mate_camionero', name:'Mate Camionero', price:33000, category:'Mates', image:'assets/mate_camionero.jpg', description:'Clásico, cómodo y rendidor.', stock:'available', featured:false },
  { id:'mate_camionero_cincelado', name:'Mate Camionero Cincelado', price:35200, category:'Mates', image:'assets/mate_camionero_cincelado.jpg', description:'Terminación trabajada con gran detalle.', stock:'low', featured:false },
  { id:'mate_camionero_cuero_especial_cincelado', name:'Mate Camionero Cuero Especial y Cincelado', price:35200, category:'Mates', image:'assets/mate_camionero_cuero_especial_cincelado.jpg', description:'Versión especial con gran personalidad.', stock:'available', featured:false },
  { id:'mate_imperial_cincelado', name:'Mate Imperial Cincelado', price:45100, category:'Mates', image:'assets/mate_imperial_cincelado.jpg', description:'Imperial con detalle cincelado premium.', stock:'available', featured:false },
  { id:'mate_torpedo_cincelado', name:'Mate Torpedo Cincelado', price:41800, category:'Mates', image:'assets/mate_torpedo_cincelado.jpg', description:'Formato torpedo con terminación destacada.', stock:'available', featured:false },
  { id:'mate_torpedo', name:'Mate Torpedo', price:39050, category:'Mates', image:'assets/mate_torpedo.jpg', description:'Diseño elegante y excelente agarre.', stock:'available', featured:false },
  { id:'mate_torpedo_cincelado_base_bolitas', name:'Mate Torpedo Cincelado Base con Bolitas', price:39600, category:'Mates', image:'assets/mate_torpedo_cincelado_base_bolitas.jpg', description:'Una opción distinta y muy llamativa.', stock:'low', featured:false },
  { id:'mate_rachero', name:'Mate Rachero', price:19800, category:'Mates', image:'assets/mate_rachero.jpg', description:'Modelo simple, canchero y accesible.', stock:'out', featured:false },

  { id:'bombillon', name:'Bombillón', price:34000, category:'Bombillas', image:'assets/bombillon.jpg', description:'Pieza protagonista para completar el set.', stock:'out', featured:false },
  { id:'bombilla_alpaca', name:'Bombilla de Alpaca', price:10000, category:'Bombillas', image:'assets/bombilla_alpaca.jpg', description:'Detalle fino y presentación premium.', stock:'available', featured:false },
  { id:'bombilla_acero_inox', name:'Bombilla de Acero Inox', price:10000, category:'Bombillas', image:'assets/bombilla_acero_inox.jpg', description:'Resistente y fácil de mantener.', stock:'available', featured:false },

  { id:'yerbera_gamuza', name:'Yerbera de Gamuza', price:12000, category:'Accesorios', image:'assets/yerbera_gamuza.jpg', description:'Práctica y con buena presencia.', stock:'available', featured:false },
  { id:'yerbera_cuero', name:'Yerbera de Cuero', price:6500, category:'Accesorios', image:'assets/yerbera_cuero.jpg', description:'Opción compacta y funcional.', stock:'available', featured:false },
  { id:'tapa_mate_silicona', name:'Tapa Mate Silicona', price:8000, category:'Accesorios', image:'assets/tapa_mate_silicona.jpg', description:'Protección útil para transportar.', stock:'available', featured:false },
  { id:'base_montanita', name:'Base para Montañita', price:5000, category:'Accesorios', image:'assets/base_montanita.jpg', description:'Accesorio simple para una mejor experiencia.', stock:'available', featured:false },
  { id:'luz_bombilla', name:'Luz para Bombilla', price:5000, category:'Accesorios', image:'assets/luz_bombilla.jpg', description:'Detalle original para sumar valor.', stock:'low', featured:false },

  { id:'termera_uruguaya', name:'Termera Estilo Uruguaya', price:42000, category:'Termeras', image:'assets/termera_uruguaya.jpg', description:'Amplia, cómoda y con estilo propio.', stock:'available', featured:false },
  { id:'termera_roma', name:'Termera Roma', price:40500, category:'Termeras', image:'assets/termera_roma.jpg', description:'Diseño práctico para llevar todo tu set.', stock:'available', featured:true }
];

const state = { category:'Todos', query:'', stock:'todos', sort:'featured', cart:[] };

const grid = document.querySelector('#productGrid');
const featuredGrid = document.querySelector('#featuredGrid');
const filterWrap = document.querySelector('#filters');
const stockFilterWrap = document.querySelector('#stockFilters');
const searchInput = document.querySelector('#search');
const sortSelect = document.querySelector('#sortSelect');
const cartPanel = document.querySelector('#cartPanel');
const cartItems = document.querySelector('#cartItems');
const cartCount = document.querySelector('#cartCount');
const cartTotal = document.querySelector('#cartTotal');
const cartToggle = document.querySelector('#cartToggle');
const closeCart = document.querySelector('#closeCart');
const checkoutBtn = document.querySelector('#checkoutBtn');
const clearCartBtn = document.querySelector('#clearCartBtn');
const pageStrip = document.querySelector('#pageStrip');

function money(n){ return '$' + Number(n).toLocaleString('es-AR'); }
function stockText(stock){ return ({available:'Disponible', low:'Últimas unidades', out:'Sin stock'})[stock] || 'Disponible'; }
function stockClass(stock){ return ({available:'available', low:'low', out:'out'})[stock] || 'available'; }
function canBuy(product){ return product.stock !== 'out'; }
function savings(product){ return product.compareAt ? product.compareAt - product.price : 0; }

function renderFilters(){
  const cats = ['Todos', ...new Set(PRODUCTS.map(p => p.category))];
  filterWrap.innerHTML = cats.map(cat => `<button class="chip ${state.category === cat ? 'active' : ''}" data-cat="${cat}">${cat}</button>`).join('');
  document.querySelectorAll('[data-cat]').forEach(btn => btn.addEventListener('click', () => {
    state.category = btn.dataset.cat;
    renderFilters();
    renderProducts();
  }));

  const stockOptions = [
    {key:'todos', label:'Todo el stock'},
    {key:'available', label:'Disponibles'},
    {key:'low', label:'Últimas unidades'},
    {key:'out', label:'Sin stock'}
  ];
  stockFilterWrap.innerHTML = stockOptions.map(opt => `<button class="chip ${state.stock === opt.key ? 'active' : ''}" data-stock="${opt.key}">${opt.label}</button>`).join('');
  document.querySelectorAll('[data-stock]').forEach(btn => btn.addEventListener('click', () => {
    state.stock = btn.dataset.stock;
    renderFilters();
    renderProducts();
  }));
}

function filteredProducts(){
  let items = PRODUCTS.filter(p => p.category !== 'Combos');
  items = items.filter(p => (state.category === 'Todos' || p.category === state.category));
  items = items.filter(p => p.name.toLowerCase().includes(state.query.toLowerCase()));
  items = items.filter(p => state.stock === 'todos' || p.stock === state.stock);

  switch(state.sort){
    case 'price-asc': items.sort((a,b) => a.price - b.price); break;
    case 'price-desc': items.sort((a,b) => b.price - a.price); break;
    case 'name': items.sort((a,b) => a.name.localeCompare(b.name, 'es')); break;
    default:
      items.sort((a,b) => Number(b.featured) - Number(a.featured) || a.price - b.price);
  }
  return items;
}

function cardTemplate(product){
  return `
    <article class="card product-card">
      <div class="product-img-wrap"><img src="${product.image}" alt="${product.name}" loading="lazy"></div>
      <div class="product-info">
        <div class="badges">
          <span class="tag">${product.category}</span>
          <span class="stock-badge ${stockClass(product.stock)}">${stockText(product.stock)}</span>
          ${product.badge ? `<span class="promo-badge">${product.badge}</span>` : ''}
        </div>
        <h3>${product.name}</h3>
        <p class="product-desc">${product.description || ''}</p>
        <div class="price-row">
          <div class="price-box">
            ${product.compareAt ? `<span class="old-price">${money(product.compareAt)}</span>` : ''}
            <strong>${money(product.price)}</strong>
            ${product.compareAt ? `<span class="saving">Ahorrás ${money(savings(product))}</span>` : ''}
          </div>
        </div>
        <div class="card-actions">
          <button class="btn small" data-add="${product.id}" ${!canBuy(product) ? 'disabled' : ''}>${canBuy(product) ? 'Agregar' : 'Sin stock'}</button>
          <button class="btn small line" data-wa="${product.id}">WhatsApp</button>
        </div>
      </div>
    </article>`;
}

function bindCardActions(){
  document.querySelectorAll('[data-add]').forEach(btn => btn.addEventListener('click', () => addToCart(btn.dataset.add)));
  document.querySelectorAll('[data-wa]').forEach(btn => btn.addEventListener('click', () => askProduct(btn.dataset.wa)));
}

function renderFeatured(){
  const items = PRODUCTS.filter(p => p.category === 'Combos' || p.featured).slice(0,3);
  featuredGrid.innerHTML = items.map(cardTemplate).join('');
  bindCardActions();
}

function renderProducts(){
  const items = filteredProducts();
  grid.innerHTML = items.map(cardTemplate).join('') || '<p class="empty">No encontramos productos con esa búsqueda.</p>';
  bindCardActions();
}

function addToCart(id){
  const product = PRODUCTS.find(p => p.id === id);
  if (!product || !canBuy(product)) return;
  const found = state.cart.find(item => item.id === id);
  if (found) found.qty += 1;
  else state.cart.push({ id, qty: 1 });
  renderCart();
  cartPanel.classList.add('open');
}
function changeQty(id, delta){
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter(i => i.id !== id);
  renderCart();
}
function renderCart(){
  const rows = state.cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return {...p, qty:item.qty, subtotal:p.price * item.qty};
  });
  cartItems.innerHTML = rows.map(row => `
    <div class="cart-item">
      <img src="${row.image}" alt="${row.name}">
      <div>
        <b>${row.name}</b>
        <span>${money(row.price)} x ${row.qty}</span>
      </div>
      <div class="qty">
        <button aria-label="Restar" data-minus="${row.id}">-</button>
        <span>${row.qty}</span>
        <button aria-label="Sumar" data-plus="${row.id}">+</button>
      </div>
    </div>`).join('') || '<p class="empty">Todavía no agregaste productos.</p>';
  const totalQty = rows.reduce((a,b)=>a+b.qty,0);
  const total = rows.reduce((a,b)=>a+b.subtotal,0);
  cartCount.textContent = totalQty;
  cartTotal.textContent = money(total);
  document.querySelectorAll('[data-minus]').forEach(btn => btn.addEventListener('click', () => changeQty(btn.dataset.minus, -1)));
  document.querySelectorAll('[data-plus]').forEach(btn => btn.addEventListener('click', () => changeQty(btn.dataset.plus, 1)));
}
function waUrl(message){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function askProduct(id){
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const msg = `Hola UNMAATEE! Quiero consultar por: ${p.name}. Precio: ${money(p.price)}. Estado: ${stockText(p.stock)}.`;
  window.open(waUrl(msg), '_blank');
}
function checkout(){
  if (!state.cart.length) return;
  const lines = state.cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return `• ${p.name} x${item.qty} - ${money(p.price)}`;
  }).join('\n');
  const total = state.cart.reduce((sum,item) => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return sum + p.price * item.qty;
  }, 0);
  const msg = `Hola UNMAATEE! Quiero consultar por este pedido:\n${lines}\n\nTotal estimado: ${money(total)}`;
  window.open(waUrl(msg), '_blank');
}
function renderPages(){
  const pages = Array.from({length:15}, (_,i)=>i+1);
  pageStrip.innerHTML = pages.map(n => `<img src="assets/page_${String(n).padStart(2,'0')}.jpg" alt="Página ${n} del catálogo" loading="lazy">`).join('');
}

searchInput.addEventListener('input', e => { state.query = e.target.value.trim(); renderProducts(); });
sortSelect.addEventListener('change', e => { state.sort = e.target.value; renderProducts(); });
cartToggle.addEventListener('click', () => cartPanel.classList.add('open'));
closeCart.addEventListener('click', () => cartPanel.classList.remove('open'));
checkoutBtn.addEventListener('click', checkout);
clearCartBtn.addEventListener('click', () => { state.cart = []; renderCart(); });
document.querySelector('#instagramBtn').href = INSTAGRAM_URL;
document.querySelector('#heroWhatsapp').href = waUrl('Hola UNMAATEE! Quiero hacer una consulta sobre el catálogo.');
document.querySelector('#footerWhatsapp').href = waUrl('Hola UNMAATEE! Quiero hacer una consulta.');
document.querySelector('#floatingWhatsapp').href = waUrl('Hola UNMAATEE! Quiero consultar por productos del catálogo.');

renderFilters();
renderFeatured();
renderProducts();
renderCart();
renderPages();
