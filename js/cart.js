// Ключ для хранения корзины в localStorage
const CART_KEY = 'silverPearCart';

// Получить корзину из хранилища
function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

// Сохранить корзину
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
}

// Добавить товар
function addToCart(product) {
    let cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += product.quantity;
    } else {
        cart.push(product);
    }
    saveCart(cart);
    alert('Товар добавлен в корзину');
}

// Обновить счётчик в шапке
function updateCartCount() {
    const cart = getCart();
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const countElement = document.getElementById('cart-count');
    if (countElement) countElement.textContent = totalCount;
}

// Рендер страницы корзины
function renderCartPage() {
    const cart = getCart();
    const container = document.getElementById('cart-items');
    const totalSpan = document.getElementById('cart-total');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = '<p>Корзина пуста</p>';
        totalSpan.textContent = '0';
        return;
    }

    let html = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
        html += `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" width="80">
                <div class="cart-item__info">
                    <h3>${item.name}</h3>
                    <p>${item.price} ₽ x <span class="item-quantity">${item.quantity}</span></p>
                    <input type="number" min="1" value="${item.quantity}" class="cart-item__quantity">
                    <button class="btn-remove">Удалить</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    totalSpan.textContent = total;

    // Обработчики для изменения количества и удаления
    document.querySelectorAll('.cart-item__quantity').forEach(input => {
        input.addEventListener('change', function() {
            const id = this.closest('.cart-item').dataset.id;
            const newQty = parseInt(this.value);
            updateCartItemQuantity(id, newQty);
        });
    });
    document.querySelectorAll('.btn-remove').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.closest('.cart-item').dataset.id;
            removeFromCart(id);
        });
    });
}

function updateCartItemQuantity(id, newQty) {
    let cart = getCart();
    const item = cart.find(i => i.id == id);
    if (item) {
        item.quantity = newQty;
        saveCart(cart);
        renderCartPage();
    }
}

function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(i => i.id != id);
    saveCart(cart);
    renderCartPage();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    if (document.getElementById('cart-items')) {
        renderCartPage();
    }
});