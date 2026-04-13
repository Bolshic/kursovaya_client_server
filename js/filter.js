
const products = typeof allProducts !== 'undefined' ? allProducts : [];


let currentCategory = 'all';
let currentSort = 'default';


function renderProducts(filteredProducts) {
    const grid = document.getElementById('product-grid');
    if (!grid) {
        console.error('Элемент #product-grid не найден!');
        return;
    }
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = '<p class="no-products">Товаров в данной категории нет</p>';
        return;
    }

    let html = '';
    filteredProducts.forEach(p => {
        
        const priceHtml = p.oldPrice 
            ? `<span class="old-price">${p.oldPrice} ₽</span> <span class="current-price">${p.price} ₽</span>`
            : `<span class="current-price">${p.price} ₽</span>`;
        
        // Короткое описание
        const shortDesc = p.description && p.description.length > 60 
            ? p.description.substring(0, 60) + '...' 
            : (p.description || 'Описание отсутствует');
        
        // Статус наличия
        const stockStatus = p.inStock 
            ? '<span class="in-stock-badge">В наличии</span>' 
            : '<span class="out-of-stock-badge">Нет в наличии</span>';
        
        html += `
            <div class="product-card">
                <a href="product.html?id=${p.id}" class="product-card__link">
                    <img src="${p.image}" alt="${p.name}" class="product-card__image">
                    <div class="product-card__content">
                        <h3 class="product-card__title">${p.name}</h3>
                        <p class="product-card__desc">${shortDesc}</p>
                        <div class="product-card__volume">${p.volume || 'Объём не указан'}</div>
                        <div class="product-card__price">
                            ${priceHtml}
                        </div>
                        <div class="product-card__stock">${stockStatus}</div>
                    </div>
                </a>
                <button class="btn btn--primary btn--small add-to-cart" 
                    data-id="${p.id}" 
                    data-name="${p.name}" 
                    data-price="${p.price}" 
                    data-image="${p.image}"
                    ${!p.inStock ? 'disabled' : ''}>
                    ${p.inStock ? 'Купить' : 'Нет в наличии'}
                </button>
            </div>
        `;
    });
    grid.innerHTML = html;
}

// Функция фильтрации и сортировки
function updateProducts() {
    // 1. Фильтрация по категории
    let filtered = products;
    if (currentCategory !== 'all') {
        filtered = products.filter(p => p.category === currentCategory);
    }

    // 2. Сортировка
    if (currentSort === 'asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else {
        // 'default' — сортировка по id
        filtered.sort((a, b) => a.id - b.id);
    }

    renderProducts(filtered);
}

// Установка активного класса для кнопок категорий
function setActiveCategory(selectedCategory) {
    document.querySelectorAll('.category-btn').forEach(btn => {
        const cat = btn.dataset.category;
        if (cat === selectedCategory) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Установка активного класса для кнопок сортировки
function setActiveSort(selectedSort) {
    document.querySelectorAll('.sort-btn').forEach(btn => {
        const sort = btn.dataset.sort;
        if (sort === selectedSort) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', () => {
    // Кнопки категорий
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const category = e.target.dataset.category;
            if (category) {
                currentCategory = category;
                setActiveCategory(category);
                updateProducts();
            }
        });
    });

    // Кнопки сортировки
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const sort = e.target.dataset.sort;
            if (sort) {
                currentSort = sort;
                setActiveSort(sort);
                updateProducts();
            }
        });
    });

    // Первоначальная загрузка
    updateProducts();

    // Параметр из URL (например, ?cat=face)
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    if (catParam && ['face', 'body', 'perfume', 'makeup', 'hair', 'mens'].includes(catParam)) {
        currentCategory = catParam;
        setActiveCategory(catParam);
        updateProducts();
    }
});

// Обработка кликов по динамическим кнопкам "Купить" 
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        e.preventDefault();
        e.stopPropagation(); 
        
        const btn = e.target;
        if (btn.disabled) return;
        
        const product = {
            id: parseInt(btn.dataset.id),
            name: btn.dataset.name,
            price: parseInt(btn.dataset.price),
            image: btn.dataset.image,
            quantity: 1
        };
        
        if (typeof addToCart === 'function') {
            addToCart(product);
        }
        
        if (typeof showToast === 'function') {
            showToast('Товар добавлен в корзину');
        } else {
            alert('Товар добавлен в корзину');
        }
    }
});