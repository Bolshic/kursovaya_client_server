document.addEventListener('DOMContentLoaded', () => {
    // ----- Форма обратной связи -----
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = feedbackForm.querySelector('[name="name"]').value.trim();
            const email = feedbackForm.querySelector('[name="email"]').value.trim();
            const message = feedbackForm.querySelector('[name="message"]').value.trim();
            let errors = [];

            if (!name) errors.push('Введите имя');
            if (!email || !isValidEmail(email)) errors.push('Введите корректный email');
            if (!message) errors.push('Введите сообщение');

            if (errors.length > 0) {
                alert('Ошибки:\n' + errors.join('\n'));
            } else {
                alert('Сообщение отправлено! Спасибо за обратную связь.');
                feedbackForm.reset();
            }
        });
    }

    // ----- Форма заказа (оформление) -----
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = orderForm.querySelector('[name="name"]').value.trim();
            const email = orderForm.querySelector('[name="email"]').value.trim();
            const phone = orderForm.querySelector('[name="phone"]').value.trim();
            const address = orderForm.querySelector('[name="address"]').value.trim();
            const paymentSelect = orderForm.querySelector('[name="payment"]');
            const payment = paymentSelect ? paymentSelect.value : 'Не указан';
            const agree = orderForm.querySelector('[name="agree"]').checked;

            const cartKey = (typeof CART_KEY !== 'undefined') ? CART_KEY : 'silverPearCart';
            const cartRaw = localStorage.getItem(cartKey);
            const cart = cartRaw ? JSON.parse(cartRaw) : [];

            let errors = [];
            if (!name) errors.push('Введите имя');
            if (!email || !isValidEmail(email)) errors.push('Введите корректный email');
            if (!phone) errors.push('Введите телефон');
            if (!address) errors.push('Введите адрес');
            if (!agree) errors.push('Необходимо согласие на обработку данных');
            if (cart.length === 0) errors.push('Корзина пуста. Добавьте товары перед оформлением.');

            if (errors.length > 0) {
                alert('Ошибки:\n' + errors.join('\n'));
                return;
            }

            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const orderNumber = 'SP-' + Math.floor(Math.random() * 10000);
            const orderDate = new Date().toLocaleString();

            const orderData = {
                number: orderNumber,
                email: email,
                name: name,
                phone: phone,
                address: address,
                payment: payment,
                items: cart,
                total: total,
                date: orderDate,
                status: 'new'
            };

            let orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(orderData);
            localStorage.setItem('orders', JSON.stringify(orders));

            localStorage.removeItem(cartKey);

            if (typeof updateCartCount === 'function') {
                updateCartCount();
            } else {
                const cartCountSpan = document.getElementById('cart-count');
                if (cartCountSpan) cartCountSpan.textContent = '0';
            }

            alert(`✅ Заказ №${orderNumber} оформлен!\nСумма: ${total} ₽\nСпособ оплаты: ${payment}\n\nСохраните номер заказа — он понадобится для отслеживания.`);

            orderForm.reset();

            if (typeof renderCartPage === 'function') {
                renderCartPage();
            }

            window.location.href = 'index.html';
        });
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

