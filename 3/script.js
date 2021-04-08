// задание 3
const basket = {
    goods: [
        {
            id: 1,
            name: 'Book',
            price: 1000,
            quantity: 2
        },
        {
            id: 2,
            name: 'Note',
            price: 110,
            quantity: 3
        },
        {
            id: 3,
            name: 'Bag',
            price: 2100,
            quantity: 1
        }
    ],
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
            this.goods.forEach(good => { basketList.insertAdjacentHTML('beforeend', this.visualDiv(good)); });
            basketList.insertAdjacentHTML('beforeend', `<div class="total">В корзине: ${this.goods.length} товаров на сумму ${this.countBasketPrice()} р.</div>`);
        } else {
            basketList.textContent = 'Корзина пуста';
        }
    },
    countBasketPrice() {
        return this.goods.reduce(function (totalPrice, item) { return totalPrice + item.price * item.quantity }, 0)
    }
};

basket.init();
