const productsData = {
    1: {
        id: 1,
        name: 'Увлажняющий крем с гиалуроновой кислотой',
        category: 'face',
        price: 1250,
        oldPrice: 1650,
        image: 'img/крем_увл.webp',
        description: 'Интенсивно увлажняет кожу, разглаживает мелкие морщины, придаёт здоровое сияние. Подходит для всех типов кожи.',
        composition: 'Aqua, Glycerin, Sodium Hyaluronate, Cetearyl Alcohol, Caprylic/Capric Triglyceride, Butyrospermum Parkii Butter, Tocopherol, Phenoxyethanol.',
        volume: '50 мл',
        inStock: true,
        characteristics: {
            'Тип кожи': 'Все типы',
            'Эффект': 'Увлажнение, сияние',
            'Способ применения': 'Наносить на очищенную кожу лица утром и вечером',
            'Срок годности': '24 месяца'
        }
    },
    2: {
        id: 2,
        name: 'Сыворотка для лица антивозрастная',
        category: 'face',
        price: 2100,
        oldPrice: 2600,
        image: 'img/сыворотка.webp',
        description: 'Активная сыворотка с ретинолом и витамином C. Сокращает морщины, выравнивает тон кожи, стимулирует выработку коллагена.',
        composition: 'Aqua, Retinol, Ascorbic Acid, Hyaluronic Acid, Aloe Barbadensis Leaf Juice, Glycerin, Xanthan Gum.',
        volume: '30 мл',
        inStock: true,
        characteristics: {
            'Тип кожи': 'Зрелая, увядающая',
            'Эффект': 'Лифтинг, омоложение',
            'Способ применения': 'Наносить на ночь, избегать попадания в глаза',
            'Срок годности': '18 месяцев'
        }
    },
    3: {
        id: 3,
        name: 'Тоник освежающий',
        category: 'face',
        price: 850,
        image: 'img/тоник.webp',
        description: 'Мягкий тоник на основе розовой воды. Успокаивает, тонизирует и подготавливает кожу к нанесению крема.',
        composition: 'Rosa Damascena Flower Water, Glycerin, Aloe Barbadensis Leaf Juice, Citric Acid, Potassium Sorbate.',
        volume: '200 мл',
        inStock: true,
        characteristics: {
            'Тип кожи': 'Чувствительная, сухая',
            'Эффект': 'Успокоение, тонизирование',
            'Способ применения': 'Нанести на ватный диск, протереть лицо',
            'Срок годности': '36 месяцев'
        }
    },
    4: {
        id: 4,
        name: 'Масло для тела питательное',
        category: 'body',
        price: 950,
        image: 'img/масло_тело.webp',
        description: 'Натуральное масло с арганой и миндалём. Интенсивно питает, смягчает и восстанавливает сухую кожу.',
        composition: 'Argania Spinosa Kernel Oil, Prunus Amygdalus Dulcis Oil, Tocopherol, Parfum.',
        volume: '100 мл',
        inStock: true,
        characteristics: {
            'Тип кожи': 'Сухая, обезвоженная',
            'Эффект': 'Питание, восстановление',
            'Способ применения': 'Наносить на чистое тело массажными движениями',
            'Срок годности': '24 месяца'
        }
    },
    5: {
        id: 5,
        name: 'Скраб для тела',
        category: 'body',
        price: 690,
        image: 'img/скраб_тело.webp',
        description: 'Кофейный скраб с маслом кокоса. Отшелушивает ороговевшие частицы, улучшает микроциркуляцию, делает кожу гладкой.',
        composition: 'Coffea Arabica Seed Powder, Cocos Nucifera Oil, Sucrose, Parfum, Tocopherol.',
        volume: '150 мл',
        inStock: false,
        characteristics: {
            'Тип кожи': 'Все типы',
            'Эффект': 'Отшелушивание, гладкость',
            'Способ применения': 'Наносить на влажную кожу, массировать, смыть',
            'Срок годности': '18 месяцев'
        }
    },
    6: {
        id: 6,
        name: 'Парфюмерная вода',
        category: 'perfume',
        price: 3200,
        oldPrice: 4000,
        image: 'img/парфюм.webp',
        description: 'Утончённый аромат с нотами груши, жасмина и мускуса. Создаёт атмосферу элегантности и свежести.',
        composition: 'Alcohol Denat, Parfum, Aqua, Limonene, Linalool, Citronellol.',
        volume: '50 мл',
        inStock: true,
        characteristics: {
            'Тип аромата': 'Цветочно-фруктовый',
            'Стойкость': '6-8 часов',
            'Верхние ноты': 'Груша, бергамот',
            'Ноты сердца': 'Жасмин, роза',
            'Базовые ноты': 'Мускус, ваниль'
        }
    },
    7: {
        id: 7,
        name: 'Тональный крем с эффектом сияния',
        category: 'makeup',
        price: 1450,
        image: 'img/тоналка.webp',
        description: 'Лёгкий тональный крем с натуральным сиянием. Выравнивает тон, увлажняет и защищает от UV-излучения.',
        composition: 'Aqua, Titanium Dioxide, Glycerin, Squalane, Niacinamide, Hyaluronic Acid.',
        volume: '30 мл',
        inStock: true,
        characteristics: {
            'Тип кожи': 'Все типы',
            'Покрытие': 'Лёгкое, сияющее',
            'SPF': '15',
            'Способ применения': 'Наносить на увлажнённую кожу лица'
        }
    },
    8: {
        id: 8,
        name: 'Помада',
        category: 'makeup',
        price: 890,
        image: 'img/помада.webp',
        description: 'Матовая помада с кремовой текстурой. Держится до 8 часов, не сушит губы, содержит масло ши и витамин E.',
        composition: 'Isododecane, Dimethicone, Cera Alba, Butyrospermum Parkii Butter, Tocopherol, CI 77891.',
        volume: '4 г',
        inStock: true,
        characteristics: {
            'Финиш': 'Матовый',
            'Стойкость': '8 часов',
            'Уход': 'Масло ши, витамин E'
        }
    },
    9: {
        id: 9,
        name: 'Тушь для ресниц объёмная',
        category: 'makeup',
        price: 750,
        image: 'img/тушь.webp',
        description: 'Тушь с эффектом объёма. Силиконовая щёточка разделяет ресницы, придаёт им густоту и изгиб.',
        composition: 'Aqua, Cera Alba, Copernicia Cerifera Cera, Carbon Black, Glycerin, Panthenol.',
        volume: '10 мл',
        inStock: true,
        characteristics: {
            'Эффект': 'Объём, разделение',
            'Стойкость': '12 часов',
            'Способ применения': 'Наносить зигзагообразными движениями от корней к кончикам'
        }
    },
    10: {
        id: 10,
        name: 'Шампунь для объёма волос',
        category: 'hair',
        price: 890,
        image: 'img/шампунь.webp',
        description: 'Шампунь для тонких волос, придаёт объём от корней. Содержит протеины пшеницы и пантенол.',
        composition: 'Aqua, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Hydrolyzed Wheat Protein, Panthenol, Glycerin.',
        volume: '250 мл',
        inStock: true,
        characteristics: {
            'Тип волос': 'Тонкие, склонные к жирности',
            'Эффект': 'Объём, укрепление',
            'Без сульфатов': 'Да'
        }
    },
    11: {
        id: 11,
        name: 'Бальзам-ополаскиватель питательный',
        category: 'hair',
        price: 790,
        image: 'img/бальзам.webp',
        description: 'Восстанавливающий бальзам для сухих и повреждённых волос. Разглаживает, питает, облегчает расчёсывание.',
        composition: 'Aqua, Cetearyl Alcohol, Behentrimonium Chloride, Argania Spinosa Kernel Oil, Hydrolyzed Keratin, Panthenol.',
        volume: '200 мл',
        inStock: true,
        characteristics: {
            'Тип волос': 'Сухие, повреждённые',
            'Эффект': 'Восстановление, питание',
            'Способ применения': 'Наносить на влажные волосы, смыть через 2-3 минуты'
        }
    },
    12: {
        id: 12,
        name: 'Маска для волос восстанавливающая',
        category: 'hair',
        price: 1100,
        image: 'img/маска_волосы.webp',
        description: 'Интенсивная маска с кератином и маслом арганы. Восстанавливает структуру волос, защищает от ломкости.',
        composition: 'Aqua, Cetearyl Alcohol, Behentrimonium Chloride, Argania Spinosa Kernel Oil, Hydrolyzed Keratin, Panthenol, Tocopherol.',
        volume: '150 мл',
        inStock: true,
        characteristics: {
            'Тип волос': 'Все типы',
            'Эффект': 'Восстановление, блеск',
            'Способ применения': 'Наносить на чистые волосы на 10-15 минут, смыть'
        }
    },
    13: {
        id: 13,
        name: 'Гель для душа освежающий',
        category: 'mens',
        price: 550,
        image: 'img/гель_муж.webp',
        description: 'Мужской гель для душа с ароматом морского бриза. Мягко очищает, не сушит кожу, дарит заряд бодрости.',
        composition: 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Glycerin, Parfum, Sea Salt Extract.',
        volume: '200 мл',
        inStock: true,
        characteristics: {
            'Тип кожи': 'Все типы',
            'Аромат': 'Морской бриз',
            'Способ применения': 'Наносить на влажную кожу, вспенить, смыть'
        }
    },
    14: {
        id: 14,
        name: 'Крем после бритья успокаивающий',
        category: 'mens',
        price: 680,
        image: 'img/гель_послебритья_муж.webp',
        description: 'Крем после бритья с алоэ вера и пантенолом. Снимает раздражение, увлажняет, успокаивает кожу.',
        composition: 'Aqua, Aloe Barbadensis Leaf Juice, Panthenol, Glycerin, Caprylic/Capric Triglyceride, Cetearyl Alcohol.',
        volume: '75 мл',
        inStock: true,
        characteristics: {
            'Тип кожи': 'Чувствительная, склонная к раздражению',
            'Эффект': 'Успокоение, увлажнение',
            'Способ применения': 'Наносить на чистую кожу после бритья'
        }
    },
    15: {
        id: 15,
        name: 'Дезодорант-стик 24h',
        category: 'mens',
        price: 450,
        image: 'img/дезодорант.webp',
        description: 'Мужской дезодорант-стик с нейтральным ароматом. Обеспечивает защиту от пота и запаха на 24 часа.',
        composition: 'Propylene Glycol, Aqua, Sodium Stearate, Parfum, Aloe Barbadensis Leaf Juice, Tocopherol.',
        volume: '50 мл',
        inStock: true,
        characteristics: {
            'Тип': 'Стик',
            'Стойкость': '24 часа',
            'Без солей алюминия': 'Да'
        }
    }
};


const allProducts = Object.values(productsData);