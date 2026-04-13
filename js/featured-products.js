document.addEventListener('DOMContentLoaded', function() {
    const featuredContainer = document.getElementById('featured-products-grid');
    if (!featuredContainer) return;
    
    
    const featuredProducts = allProducts ? allProducts.slice(0, 3) : [];
    
    if (featuredProducts.length === 0) {
        featuredContainer.innerHTML = '<p class="no-products">Товары временно недоступны</p>';
        return;
    }
    
    let html = '';
    featuredProducts.forEach(product => {
        
        const priceHtml = product.oldPrice 
            ? `<span class="old-price">${product.oldPrice} ₽</span> <span class="current-price">${product.price} ₽</span>`
            : `<span class="current-price">${product.price} ₽</span>`;
        
        
        const shortDesc = product.description && product.description.length > 60 
            ? product.description.substring(0, 60) + '...' 
            : (product.description || 'Описание отсутствует');
        
        html += `
            <div class="product-card">
                <a href="product.html?id=${product.id}" class="product-card__link">
                    <img src="${product.image}" alt="${product.name}" class="product-card__image">
                    <div class="product-card__content">
                        <h3 class="product-card__title">${product.name}</h3>
                        <p class="product-card__desc">${shortDesc}</p>
                        <div class="product-card__volume">${product.volume || 'Объём не указан'}</div>
                        <div class="product-card__price">
                            ${priceHtml}
                        </div>
                        <div class="product-card__stock">
                            ${product.inStock ? '<span class="in-stock-badge">В наличии</span>' : '<span class="out-of-stock-badge">Нет в наличии</span>'}
                        </div>
                    </div>
                </a>
                <button class="btn btn--primary btn--small add-to-cart" 
                    data-id="${product.id}" 
                    data-name="${product.name}" 
                    data-price="${product.price}" 
                    data-image="${product.image}"
                    ${!product.inStock ? 'disabled' : ''}>
                    ${product.inStock ? 'Купить' : 'Нет в наличии'}
                </button>
            </div>
        `;
    });
    
    featuredContainer.innerHTML = html;
});