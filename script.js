// задание 1
const catalog = {
    catalog: null,
    basket: null,
    goods: [
        {
            id: 1,
            name: 'Book',
            price: 1000
        },
        {
            id: 2,
            name: 'Note',
            price: 110
        },
        {
            id: 3,
            name: 'Bag',
            price: 2100
        }
    ],
    init(basket) {
        this.catalog = document.getElementById('catalog');
        this.basket = basket;
        this.render();
        this.catalog.addEventListener('click', event => this.addToBasket(event));
    },
    render() {
        if (this.goods.length) {
            this.catalog.innerHTML = '';
            this.goods.forEach(good => { this.catalog.insertAdjacentHTML('beforeend', this.catalogItem(good)); });
        } else {
            this.catalog.innerHTML = '';
            this.catalog.textContent = 'Каталог товартов пуст.';
        }
    },
    catalogItem(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <button class="addToBasket" data-id="${good.id}">В корзину</button>
                </div>`;
    },
    addToBasket(event) {
        if (!event.target.classList.contains('addToBasket')) return;
        const goodId = +event.target.dataset.id;
        console.log(goodId);
        const goodToAdd = this.goods.find((good) => good.id === goodId);
        console.log(goodToAdd);
        this.basket.addToBasket(goodToAdd);
    }
};

const basket = {
    goods: [],
    init() {
        document.getElementById('basketClear').addEventListener('click', () => {
            this.goods = [];
            this.render();
        })

        this.render();
    },
    visualDiv(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    },
    render() {
        var basketList = document.getElementById('basketList');

        if (this.goods.length) {
            basketList.innerHTML = '';
            this.goods.forEach(good => { basketList.insertAdjacentHTML('beforeend', this.visualDiv(good)); });
            basketList.insertAdjacentHTML('beforeend', `<div class="total">В корзине: ${this.goods.length} товаров на сумму ${this.countBasketPrice()} р.</div>`);
        } else {
            basketList.innerHTML = '';
            basketList.textContent = 'Корзина пуста.';
        }
    },
    countBasketPrice() {
        return this.goods.reduce(function (totalPrice, item) { return totalPrice + item.price * item.quantity }, 0)
    },
    addToBasket(good) {
        const findInBasket = this.goods.find(({ id }) => good.id === id);
        if (findInBasket) {
            findInBasket.quantity++;
        } else {
            this.goods.push({ ...good, quantity: 1 });
        }
        this.render();
    }
};

catalog.init(basket);
basket.init();
