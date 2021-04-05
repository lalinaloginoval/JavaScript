// задание 1
var number = +prompt('Введите число от 0 до 999:');
EnterNumber(number);

function EnterNumber(number) {
    if (!Number.isInteger(number) || number > 999) {
        console.log('Необходимо ввести число от 0 до 999!');
        return {};
    }

    console.log(NumberToObject(number));
}

function NumberToObject(number) {
    return {
        'units': number % 10,
        'tens': Math.floor(number / 10) % 10,
        'hundreds': Math.floor(number / 100)
    };
}

// задание 2
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
    countBasketPrice() {
        return this.goods.reduce(function (totalPrice, item) { return totalPrice + item.price * item.quantity }, 0)
    }
};

console.log(basket.countBasketPrice());
