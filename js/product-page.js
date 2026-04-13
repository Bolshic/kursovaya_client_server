document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const product = productsData[productId];
    const container = document.getElementById('product-detail-container');
    
    if (!product) {
        container.innerHTML = '<p class="error">Товар не найден</p>';
        return;
    }
    
    // Формируем характеристики
    let charsHtml = '';
    for (let [key, value] of Object.entries(product.characteristics)) {
        charsHtml += `<div class="char-row"><strong>${key}:</strong> ${value}</div>`;
    }
    
    const oldPriceHtml = product.oldPrice ? `<span class="old-price">${product.oldPrice} ₽</span>` : '';
    const stockHtml = product.inStock 
        ? '<span class="in-stock">✓ В наличии</span>' 
        : '<span class="out-of-stock">✗ Нет в наличии</span>';
    
    container.innerHTML = `
        <div class="product-page">
            <div class="product-page__image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-page__info">
                <h1>${product.name}</h1>
                <div class="price-block">
                    ${oldPriceHtml}
                    <span class="price">${product.price} ₽</span>
                </div>
                <div class="stock">${stockHtml}</div>
                <p class="volume"><strong>Объём:</strong> ${product.volume}</p>
                <h3>Описание</h3>
                <p>${product.description}</p>
                <h3>Состав</h3>
                <p>${product.composition}</p>
                <h3>Характеристики</h3>
                <div class="characteristics">${charsHtml}</div>
                <div class="actions">
                    <input type="number" id="qty" value="1" min="1" class="qty-input">
                    <button class="btn btn--primary" id="add-to-cart-btn">В корзину</button>
                </div>
            </div>
        </div>
    `;
    
    // Добавление в корзину
    document.getElementById('add-to-cart-btn').addEventListener('click', function() {
        const qty = parseInt(document.getElementById('qty').value);
        addToCart({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: qty
        });
        showToast(`Товар добавлен в корзину (${qty} шт.)`);
    });
});