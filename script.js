// задание 1
var n = 2;

while (n < 100) {
    if (CheckPrimeNumber(n))
        console.log(n);

    n++;
}

function CheckPrimeNumber(n) {
    for (var i = 2; i < n; i++) {
        if (n % i === 0)
            return false;
    }

    return true;
}

// задание 2
var basket = [
    ["Book", 1000, 2],
    ["Bag", 2100, 1],
    ["Note", 110, 3]
];

function countBasketPrice(basket) {
    return basket.reduce(function (totalPrice, item) { return totalPrice + item[1] * item[2] }, 0)
}

console.log(countBasketPrice(basket));

//  задание 3
for (var i = 0; i < 10; console.log(i++)) { }

// задание 4
for (var i = 0, pyramid = 'x'; i < 20; i++, pyramid += 'x') {
    console.log(pyramid);
}