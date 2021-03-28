// задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - префиксная форма
d = b++; alert(d);           // 1 - постфиксная форма
c = (2 + ++a); alert(c);      // 5 - префиксная (2 + 3)
d = (2 + b++); alert(d);      // 4 - постфиксная (2 + 2)
alert(a);                    // 3 
alert(b);                    // 3

/**
 * В постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование.
 * В префиксной форме инкрементирование производится сразу, а возврат — уже с обновленным значением.
 */

// задание 2
var a = 2;
var x = 1 + (a *= 2); // x = 1 + 4 => x = 5

// задание 3
var a = 1, b = 2

function mathOperation(a, b) {
    if (a >= 0 && b >= 0)
        return Math.abs(a - b);
    else if (a < 0 && b < 0)
        return a * b;
    else
        return a + b;
};

mathOperation(a, b);

// задание 4
var a = 1;

switch (a) {
    case 0:
        alert(0);
    case 1:
        alert(1);
    case 2:
        alert(2);
    case 3:
        alert(3);
    case 4:
        alert(4);
    case 5:
        alert(5);
    case 6:
        alert(6);
    case 7:
        alert(7);
    case 8:
        alert(8);
    case 9:
        alert(9);
    case 10:
        alert(10);
    case 11:
        alert(11);
    case 12:
        alert(12);
    case 13:
        alert(13);
    case 14:
        alert(14);
    case 15:
        alert(15);
        break;
    default:
        break;
}

// задание 5
function plusOperation(a, b) {
    return a + b;
}
function minusOperation(a, b) {
    return a - b;
}
function multiOperation(a, b) {
    return a * b;
}
function divisionOperation(a, b) {
    return a / b;
}

// задание 6
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return plusOperation(arg1, arg2);
            break;
        case "-":
            return minusOperation(arg1, arg2);
            break;
        case "*":
            return multiOperation(arg1, arg2);
            break;
        case "/":
            return divisionOperation(arg1, arg2);
            break;
    }
}

mathOperation(2, 4, '*');

// задание 7

alert(null > 0);  // (1) false
alert(null == 0); // (2) false
alert(null >= 0); // (3) true

/**
 * Нестрогое равенство и сравнения > < >= <= работают по-разному. Сравнения преобразуют null в число, рассматривая его как 0.
 * Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.

Для нестрогого равенства == значение null действует особое правило: оно ни к чему не приводятся, поэтому (2) null == 0 ложно.
 */