document.getElementById('track-btn').addEventListener('click', function() {
    const orderNumber = document.getElementById('order-number').value.trim();
    const email = document.getElementById('order-email').value.trim();
    const resultDiv = document.getElementById('track-result');
    
    if (!orderNumber || !email) {
        resultDiv.innerHTML = '<p class="error">Пожалуйста, заполните оба поля.</p>';
        resultDiv.style.display = 'block';
        return;
    }
    
    // Получаем массив заказов из localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders.find(o => o.number === orderNumber && o.email === email);
    
    if (order) {
        let statusText = '';
        switch(order.status) {
            case 'new': statusText = '✅ Новый заказ (принят)'; break;
            case 'processing': statusText = '🔄 В обработке'; break;
            case 'shipped': statusText = '📦 Отправлен'; break;
            case 'delivered': statusText = '🏠 Доставлен'; break;
            default: statusText = 'Статус неизвестен';
        }
        resultDiv.innerHTML = `
            <div class="order-info">
                <p><strong>Заказ №${order.number}</strong></p>
                <p>Статус: ${statusText}</p>
                <p>Состав: ${order.items.map(i => i.name).join(', ')}</p>
                <p>Сумма: ${order.total} ₽</p>
                <p>Дата оформления: ${order.date}</p>
                <p>Способ оплаты: ${order.payment || 'не указан'}</p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = '<p class="error">❌ Заказ не найден. Проверьте номер и email.</p>';
    }
    resultDiv.style.display = 'block';
});