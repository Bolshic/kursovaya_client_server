// featured.js
const featuredProducts = [
    { id: 1, name: 'Увлажняющий крем', price: 1250, image: 'img/крем_увл.webp', desc: 'Гиалуроновая кислота' },
    { id: 2, name: 'Сыворотка для лица', price: 2100, image: 'img/сыворотка.webp', desc: 'Антивозрастная' },
    { id: 3, name: 'Тоник освежающий', price: 850, image: 'img/тоник2.webp', desc: 'Для всех типов кожи' },
    { id: 4, name: 'Парфюмерная вода', price: 3200, image: 'img/парфюм.webp', desc: 'Цветочный аромат' }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.product-grid--featured');
    if (!grid) return;

    featuredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-card__image">
            <div class="product-card__content">
                <h3 class="product-card__title">${product.name}</h3>
                <p class="product-card__desc">${product.desc}</p>
                <div class="product-card__price">${product.price} ₽</div>
                <button class="btn btn--primary btn--small add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">Купить</button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Обработчики для кнопок
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const product = {
                id: btn.dataset.id,
                name: btn.dataset.name,
                price: parseInt(btn.dataset.price),
                image: btn.dataset.image,
                quantity: 1
            };
            addToCart(product);
            showToast('Товар добавлен в корзину');
        });
    });
});