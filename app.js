
const PRODUCTS = [
  {
    "id": "termo_termolar",
    "name": "Termo Termolar",
    "price": "$18.000",
    "category": "Termos",
    "image": "assets/termo_termolar.jpg"
  },
  {
    "id": "termo_stanley_matesystem",
    "name": "Termo Stanley MateSystem",
    "price": "$32.000",
    "category": "Termos",
    "image": "assets/termo_stanley_matesystem.jpg"
  },
  {
    "id": "termo_media_manija",
    "name": "Termo Media Manija",
    "price": "$25.000",
    "category": "Termos",
    "image": "assets/termo_media_manija.jpg"
  },
  {
    "id": "termo_stanley",
    "name": "Termo Stanley",
    "price": "$29.000",
    "category": "Termos",
    "image": "assets/termo_stanley.jpg"
  },
  {
    "id": "mate_criollo",
    "name": "Mate Criollo",
    "price": "$50.050",
    "category": "Mates",
    "image": "assets/mate_criollo.jpg"
  },
  {
    "id": "mate_imperial",
    "name": "Mate Imperial",
    "price": "$44.000",
    "category": "Mates",
    "image": "assets/mate_imperial.jpg"
  },
  {
    "id": "mate_camionero",
    "name": "Mate Camionero",
    "price": "$33.000",
    "category": "Mates",
    "image": "assets/mate_camionero.jpg"
  },
  {
    "id": "mate_camionero_cincelado",
    "name": "Mate Camionero Cincelado",
    "price": "$35.200",
    "category": "Mates",
    "image": "assets/mate_camionero_cincelado.jpg"
  },
  {
    "id": "mate_camionero_cuero_especial_cincelado",
    "name": "Mate Camionero Cuero Especial y Cincelado",
    "price": "$35.200",
    "category": "Mates",
    "image": "assets/mate_camionero_cuero_especial_cincelado.jpg"
  },
  {
    "id": "mate_imperial_cincelado",
    "name": "Mate Imperial Cincelado",
    "price": "$45.100",
    "category": "Mates",
    "image": "assets/mate_imperial_cincelado.jpg"
  },
  {
    "id": "mate_torpedo_cincelado",
    "name": "Mate Torpedo Cincelado",
    "price": "$41.800",
    "category": "Mates",
    "image": "assets/mate_torpedo_cincelado.jpg"
  },
  {
    "id": "mate_torpedo",
    "name": "Mate Torpedo",
    "price": "$39.050",
    "category": "Mates",
    "image": "assets/mate_torpedo.jpg"
  },
  {
    "id": "mate_torpedo_cincelado_base_bolitas",
    "name": "Mate Torpedo Cincelado Base con Bolitas",
    "price": "$39.600",
    "category": "Mates",
    "image": "assets/mate_torpedo_cincelado_base_bolitas.jpg"
  },
  {
    "id": "mate_rachero",
    "name": "Mate Rachero",
    "price": "$19.800",
    "category": "Mates",
    "image": "assets/mate_rachero.jpg"
  },
  {
    "id": "bombillon",
    "name": "Bombillón",
    "price": "$34.000",
    "category": "Bombillas",
    "image": "assets/bombillon.jpg"
  },
  {
    "id": "bombilla_alpaca",
    "name": "Bombilla de Alpaca",
    "price": "$10.000",
    "category": "Bombillas",
    "image": "assets/bombilla_alpaca.jpg"
  },
  {
    "id": "bombilla_acero_inox",
    "name": "Bombilla de Acero Inox",
    "price": "$10.000",
    "category": "Bombillas",
    "image": "assets/bombilla_acero_inox.jpg"
  },
  {
    "id": "yerbera_gamuza",
    "name": "Yerbera de Gamuza",
    "price": "$12.000",
    "category": "Accesorios",
    "image": "assets/yerbera_gamuza.jpg"
  },
  {
    "id": "yerbera_cuero",
    "name": "Yerbera de Cuero",
    "price": "$6.500",
    "category": "Accesorios",
    "image": "assets/yerbera_cuero.jpg"
  },
  {
    "id": "tapa_mate_silicona",
    "name": "Tapa Mate Silicona",
    "price": "$8.000",
    "category": "Accesorios",
    "image": "assets/tapa_mate_silicona.jpg"
  },
  {
    "id": "base_montanita",
    "name": "Base para Montañita",
    "price": "$5.000",
    "category": "Accesorios",
    "image": "assets/base_montanita.jpg"
  },
  {
    "id": "luz_bombilla",
    "name": "Luz para Bombilla",
    "price": "$5.000",
    "category": "Accesorios",
    "image": "assets/luz_bombilla.jpg"
  },
  {
    "id": "termera_uruguaya",
    "name": "Termera Estilo Uruguaya",
    "price": "$42.000",
    "category": "Termeras",
    "image": "assets/termera_uruguaya.jpg"
  },
  {
    "id": "termera_roma",
    "name": "Termera Roma",
    "price": "$40.500",
    "category": "Termeras",
    "image": "assets/termera_roma.jpg"
  }
];
const WHATSAPP_NUMBER = '5493624202299';
const INSTAGRAM_URL = 'https://www.instagram.com/unmaatee/';

const state = { category: 'Todos', query: '', cart: [] };

const grid = document.querySelector('#productGrid');
const filterWrap = document.querySelector('#filters');
const searchInput = document.querySelector('#search');
const cartPanel = document.querySelector('#cartPanel');
const cartItems = document.querySelector('#cartItems');
const cartCount = document.querySelector('#cartCount');
const cartTotal = document.querySelector('#cartTotal');
const cartToggle = document.querySelector('#cartToggle');
const closeCart = document.querySelector('#closeCart');
const checkoutBtn = document.querySelector('#checkoutBtn');
const clearCartBtn = document.querySelector('#clearCartBtn');
const pageStrip = document.querySelector('#pageStrip');

function pesosToNumber(price) {
  return Number(String(price).replace(/[^0-9]/g, '')) || 0;
}
function money(n) {
  return '$' + n.toLocaleString('es-AR');
}

function renderFilters() {
  const cats = ['Todos', ...new Set(PRODUCTS.map(p => p.category))];
  filterWrap.innerHTML = cats.map(cat => `<button class="chip ${state.category === cat ? 'active' : ''}" data-cat="${cat}">${cat}</button>`).join('');
  document.querySelectorAll('.chip').forEach(btn => btn.addEventListener('click', () => {
    state.category = btn.dataset.cat;
    renderFilters(); renderProducts();
  }));
}

function getFilteredProducts() {
  return PRODUCTS.filter(p => (state.category === 'Todos' || p.category === state.category) && p.name.toLowerCase().includes(state.query.toLowerCase()));
}

function renderProducts() {
  const items = getFilteredProducts();
  grid.innerHTML = items.map(p => `
    <article class="card product-card">
      <div class="product-img-wrap"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
      <div class="product-info">
        <span class="tag">${p.category}</span>
        <h3>${p.name}</h3>
        <div class="price-row">
          <strong>${p.price}</strong>
          <button class="btn small" data-add="${p.id}">Agregar</button>
        </div>
      </div>
    </article>
  `).join('') || '<p class="empty">No encontramos productos con esa búsqueda.</p>';
  document.querySelectorAll('[data-add]').forEach(btn => btn.addEventListener('click', () => addToCart(btn.dataset.add)));
}

function addToCart(id) {
  const found = state.cart.find(item => item.id === id);
  if (found) found.qty += 1;
  else state.cart.push({ id, qty: 1 });
  renderCart();
  cartPanel.classList.add('open');
}
function changeQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter(i => i.id !== id);
  renderCart();
}
function renderCart() {
  const rows = state.cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return {...p, qty:item.qty, subtotal: pesosToNumber(p.price)*item.qty};
  });
  cartItems.innerHTML = rows.map(row => `
    <div class="cart-item">
      <img src="${row.image}" alt="${row.name}">
      <div>
        <b>${row.name}</b>
        <span>${row.price} x ${row.qty}</span>
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
function checkout() {
  if (!state.cart.length) return;
  const lines = state.cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return `• ${p.name} x${item.qty} - ${p.price}`;
  }).join('%0A');
  const total = state.cart.reduce((sum,item) => { const p = PRODUCTS.find(x => x.id === item.id); return sum + pesosToNumber(p.price)*item.qty; }, 0);
  const msg = `Hola UNMAATEE! Quiero consultar por este pedido:%0A${lines}%0A%0ATotal estimado: ${money(total)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
}
function renderPages() {
  const pages = Array.from({length:15}, (_,i)=>i+1);
  pageStrip.innerHTML = pages.map(n => `<img src="assets/page_${String(n).padStart(2,'0')}.jpg" alt="Página ${n} del catálogo" loading="lazy">`).join('');
}

searchInput.addEventListener('input', e => { state.query = e.target.value; renderProducts(); });
cartToggle.addEventListener('click', () => cartPanel.classList.add('open'));
closeCart.addEventListener('click', () => cartPanel.classList.remove('open'));
checkoutBtn.addEventListener('click', checkout);
clearCartBtn.addEventListener('click', () => { state.cart = []; renderCart(); });
document.querySelector('#instagramBtn').href = INSTAGRAM_URL;
document.querySelector('#heroWhatsapp').href = `https://wa.me/${WHATSAPP_NUMBER}`;
document.querySelector('#footerWhatsapp').href = `https://wa.me/${WHATSAPP_NUMBER}`;

renderFilters();
renderProducts();
renderCart();
renderPages();
