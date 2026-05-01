/*
  UNMAATEE - Funciones de la tienda
  Controla filtros, buscador, galería, carrito y envío del pedido por WhatsApp.
*/
const state = {
      activeCategory: "Todos",
      search: "",
      cart: JSON.parse(localStorage.getItem("unmaatee_cart") || "[]")
    };

    const productGrid = document.getElementById("productGrid");
    const categoryPills = document.getElementById("categoryPills");
    const searchInput = document.getElementById("searchInput");
    const clearFilters = document.getElementById("clearFilters");
    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const checkoutBtn = document.getElementById("checkoutBtn");
    const imageModal = document.getElementById("imageModal");
    const closeImageModal = document.getElementById("closeImageModal");
    const modalProductImage = document.getElementById("modalProductImage");
    const modalProductName = document.getElementById("modalProductName");
    const modalProductPrice = document.getElementById("modalProductPrice");
    const modalProductDesc = document.getElementById("modalProductDesc");
    const modalProductThumbs = document.getElementById("modalProductThumbs");
    const modalAddProduct = document.getElementById("modalAddProduct");
    let activeModalProductId = null;
    const cartDrawer = document.getElementById("cartDrawer");
    const drawerBackdrop = document.getElementById("drawerBackdrop");
    const openCart = document.getElementById("openCart");
    const closeCart = document.getElementById("closeCart");
    const heroCartBtn = document.getElementById("heroCartBtn");
    const toast = document.getElementById("toast");

    document.getElementById("year").textContent = new Date().getFullYear();

    function money(value) {
      return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
      }).format(value);
    }

    function placeholderImage(name) {
      const svg = encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="900" height="700" viewBox="0 0 900 700">
          <rect width="900" height="700" fill="#f4dfc4"/>
          <circle cx="690" cy="120" r="170" fill="#dfb889" opacity="0.5"/>
          <circle cx="190" cy="580" r="220" fill="#7a3f1d" opacity="0.12"/>
          <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="54" font-weight="800" fill="#4d2612">UNMAATEE</text>
          <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="28" fill="#7c6658">${name}</text>
        </svg>`);
      return `data:image/svg+xml;charset=UTF-8,${svg}`;
    }

    function filteredProducts() {
      return PRODUCTS.filter(product => {
        const matchesCategory = state.activeCategory === "Todos" || product.category === state.activeCategory;
        const query = state.search.trim().toLowerCase();
        const matchesSearch = !query || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
      });
    }

    function renderCategories() {
      const categories = ["Todos", ...new Set(PRODUCTS.map(product => product.category))];
      categoryPills.innerHTML = categories.map(category => `
        <button class="filter-pill ${category === state.activeCategory ? "active" : ""}" data-category="${category}" type="button">
          ${category}
        </button>
      `).join("");
    }

    function renderProducts() {
      const products = filteredProducts();

      if (!products.length) {
        productGrid.innerHTML = `
          <div class="empty-cart" style="grid-column: 1 / -1;">
            No encontramos productos con ese filtro. Probá con otra búsqueda.
          </div>
        `;
        return;
      }

      productGrid.innerHTML = products.map(product => `
        <article class="product-card">
          <button class="product-media" type="button" data-image-id="${product.id}" aria-label="Ampliar imagen de ${product.name}">
            <img src="${(product.images && product.images[0]) || product.image || placeholderImage(product.name)}" alt="${product.name}" onerror="this.src='${placeholderImage(product.name)}'" />
            <span class="badge ${product.stock === 0 ? "stock-out" : ""}">${product.stock === 0 ? "Sin stock" : product.badge}</span>
          </button>
          <div class="product-body">
            <div class="product-category">${product.category}</div>
            <h3 class="product-title">${product.name}</h3>
            <p class="product-desc">${product.description}</p>
            <div class="price-row">
              <div class="price">
                <strong>${money(product.price)}</strong>
                ${product.installments ? `<span>${product.installments}</span>` : ""}
              </div>
              <button class="add-btn" data-add-id="${product.id}" type="button" ${product.stock === 0 ? "disabled" : ""} aria-label="Agregar ${product.name} al carrito"><span aria-hidden="true">🛒</span><span>${product.stock === 0 ? "Sin stock" : "Agregar"}</span></button>
            </div>
          </div>
        </article>
      `).join("");
    }

    function saveCart() {
      localStorage.setItem("unmaatee_cart", JSON.stringify(state.cart));
    }

    function getCartTotal() {
      return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    }

    function getCartCount() {
      return state.cart.reduce((sum, item) => sum + item.qty, 0);
    }

    function renderCart() {
      cartCount.textContent = getCartCount();
      cartTotal.textContent = money(getCartTotal());
      checkoutBtn.disabled = state.cart.length === 0;

      if (!state.cart.length) {
        cartItems.innerHTML = `
          <div class="empty-cart">
            Tu carrito está vacío.<br />Agregá productos y después enviá el pedido por WhatsApp.
          </div>
        `;
        return;
      }

      cartItems.innerHTML = state.cart.map(item => `
        <article class="cart-item">
          <img src="${item.image || placeholderImage(item.name)}" alt="${item.name}" onerror="this.src='${placeholderImage(item.name)}'" />
          <div>
            <h3>${item.name}</h3>
            <p>${money(item.price)} · Subtotal: ${money(item.price * item.qty)}</p>
            <div class="cart-actions">
              <div class="qty-controls" aria-label="Cantidad">
                <button type="button" data-decrease-id="${item.id}" aria-label="Restar unidad">−</button>
                <span>${item.qty}</span>
                <button type="button" data-increase-id="${item.id}" aria-label="Sumar unidad">+</button>
              </div>
              <button class="remove-btn" data-remove-id="${item.id}" type="button">Eliminar</button>
            </div>
          </div>
        </article>
      `).join("");
    }

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("show");
      window.clearTimeout(showToast.timeout);
      showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 1800);
    }

    function findProductForCart(id) {
      if (typeof FEATURED_COMBO !== "undefined" && id === FEATURED_COMBO.id) return FEATURED_COMBO;
      return PRODUCTS.find(item => item.id === id);
    }

    function addToCart(id) {
      const product = findProductForCart(id);
      if (!product || product.stock === 0) return;

      const existing = state.cart.find(item => item.id === id);
      if (existing) {
        if (existing.qty >= product.stock) {
          showToast("No hay más stock disponible de este producto");
          return;
        }
        existing.qty += 1;
      } else {
        state.cart.push({ ...product, qty: 1 });
      }

      saveCart();
      renderCart();
      showToast("Producto agregado al carrito");
    }

    function removeFromCart(id) {
      // Esta función elimina completamente el producto, incluso si fue agregado por error.
      state.cart = state.cart.filter(item => item.id !== id);
      saveCart();
      renderCart();
      showToast("Producto eliminado del carrito");
    }

    function changeQty(id, direction) {
      const product = PRODUCTS.find(item => item.id === id);
      const item = state.cart.find(cartItem => cartItem.id === id);
      if (!item) return;

      if (direction === "increase") {
        if (product && item.qty >= product.stock) {
          showToast("No hay más stock disponible de este producto");
          return;
        }
        item.qty += 1;
      }

      if (direction === "decrease") {
        item.qty -= 1;
        if (item.qty <= 0) {
          removeFromCart(id);
          return;
        }
      }

      saveCart();
      renderCart();
    }

    function openDrawer() {
      cartDrawer.classList.add("show");
      drawerBackdrop.classList.add("show");
      cartDrawer.setAttribute("aria-hidden", "false");
    }

    function closeDrawer() {
      cartDrawer.classList.remove("show");
      drawerBackdrop.classList.remove("show");
      cartDrawer.setAttribute("aria-hidden", "true");
    }


    function openImageModal(productId) {
      const product = PRODUCTS.find(item => item.id === productId);
      if (!product) return;

      const gallery = product.images && product.images.length ? product.images : [product.image || placeholderImage(product.name)];
      activeModalProductId = product.id;
      modalProductImage.src = gallery[0];
      modalProductImage.alt = product.name;
      modalProductName.textContent = product.name;
      modalProductPrice.textContent = money(product.price);
      modalProductDesc.textContent = product.description || "";
      modalAddProduct.disabled = product.stock === 0;
      modalAddProduct.textContent = product.stock === 0 ? "Sin stock" : "Agregar al carrito";

      if (gallery.length > 1) {
        modalProductThumbs.classList.add("show");
        modalProductThumbs.innerHTML = gallery.map((img, index) => `
          <button class="image-modal-thumb ${index === 0 ? "active" : ""}" type="button" data-modal-image-index="${index}" aria-label="Ver imagen ${index + 1} de ${product.name}">
            <img src="${img}" alt="${product.name} vista ${index + 1}" />
          </button>
        `).join("");
        modalProductThumbs.querySelectorAll("[data-modal-image-index]").forEach(button => {
          button.addEventListener("click", () => {
            const index = Number(button.dataset.modalImageIndex);
            modalProductImage.src = gallery[index];
            modalProductThumbs.querySelectorAll(".image-modal-thumb").forEach(item => item.classList.remove("active"));
            button.classList.add("active");
          });
        });
      } else {
        modalProductThumbs.classList.remove("show");
        modalProductThumbs.innerHTML = "";
      }

      imageModal.classList.add("show");
      imageModal.setAttribute("aria-hidden", "false");
    }

    function openComboModal() {
      if (typeof FEATURED_COMBO === "undefined") return;
      activeModalProductId = FEATURED_COMBO.id;
      modalProductImage.src = FEATURED_COMBO.image;
      modalProductImage.alt = FEATURED_COMBO.name;
      modalProductName.textContent = FEATURED_COMBO.name;
      modalProductPrice.textContent = money(FEATURED_COMBO.price);
      modalProductDesc.textContent = FEATURED_COMBO.description;
      modalAddProduct.disabled = FEATURED_COMBO.stock === 0;
      modalAddProduct.textContent = FEATURED_COMBO.stock === 0 ? "Sin stock" : "Agregar combo al carrito";
      modalProductThumbs.classList.remove("show");
      modalProductThumbs.innerHTML = "";
      imageModal.classList.add("show");
      imageModal.setAttribute("aria-hidden", "false");
    }

    function closeProductImageModal() {
      imageModal.classList.remove("show");
      imageModal.setAttribute("aria-hidden", "true");
      modalProductThumbs.classList.remove("show");
      modalProductThumbs.innerHTML = "";
      if (modalProductDesc) modalProductDesc.textContent = "";
      activeModalProductId = null;
    }

    function checkoutWhatsApp() {
      if (!state.cart.length) return;

      const lines = state.cart.map(item => `• ${item.qty} x ${item.name} - ${money(item.price * item.qty)}`);
      const message = [
        "Hola UNMAATEE, quiero hacer este pedido:",
        "",
        ...lines,
        "",
        `Total estimado: ${money(getCartTotal())}`,
        "",
        "¿Me pasás disponibilidad y forma de pago?"
      ].join("\n");

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    }

    productGrid.addEventListener("click", event => {
      const imageButton = event.target.closest("[data-image-id]");
      const addButton = event.target.closest("[data-add-id]");

      if (addButton) {
        addToCart(Number(addButton.dataset.addId));
        return;
      }

      if (imageButton) {
        openImageModal(Number(imageButton.dataset.imageId));
      }
    });

    categoryPills.addEventListener("click", event => {
      const button = event.target.closest("[data-category]");
      if (!button) return;
      state.activeCategory = button.dataset.category;
      renderCategories();
      renderProducts();
    });

    cartItems.addEventListener("click", event => {
      const removeButton = event.target.closest("[data-remove-id]");
      const increaseButton = event.target.closest("[data-increase-id]");
      const decreaseButton = event.target.closest("[data-decrease-id]");

      if (removeButton) removeFromCart(Number(removeButton.dataset.removeId));
      if (increaseButton) changeQty(Number(increaseButton.dataset.increaseId), "increase");
      if (decreaseButton) changeQty(Number(decreaseButton.dataset.decreaseId), "decrease");
    });

    searchInput.addEventListener("input", event => {
      state.search = event.target.value;
      renderProducts();
    });

    clearFilters.addEventListener("click", () => {
      state.activeCategory = "Todos";
      state.search = "";
      searchInput.value = "";
      renderCategories();
      renderProducts();
    });

    openCart.addEventListener("click", openDrawer);
    heroCartBtn.addEventListener("click", openDrawer);
    closeCart.addEventListener("click", closeDrawer);
    drawerBackdrop.addEventListener("click", closeDrawer);
    checkoutBtn.addEventListener("click", checkoutWhatsApp);
    closeImageModal.addEventListener("click", closeProductImageModal);
    imageModal.addEventListener("click", event => {
      if (event.target === imageModal) closeProductImageModal();
    });
    modalAddProduct.addEventListener("click", () => {
      if (activeModalProductId) {
        addToCart(activeModalProductId);
        closeProductImageModal();
      }
    });

    const comboButtons = document.querySelectorAll("[data-combo-button]");
    comboButtons.forEach(button => {
      button.addEventListener("click", openComboModal);
      button.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openComboModal();
        }
      });
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        closeDrawer();
        closeProductImageModal();
      }
    });

    renderCategories();
    renderProducts();
    renderCart();
