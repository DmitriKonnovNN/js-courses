# WEB: Базовый курс Javascript

## Тест 1. Числа, строки, ветвления, циклы

```js
// вычислить сумму всех натуральных от 1 до n
function sumToN(n) { ... }

// вычислить сумму всех целых чисел от m до n
function sumFromMToN(m, n) { ... }

// вычислить n-е число Фибоначчи
function fib(n) { ... }

// вычислить n!
function factorial(n) { ... }

// вычислить x в степени n
function pow(x, n) { ... }

// перевернуть строку s
function reverse(s) { ... }

// вычислить n-е простое число
function simple(n) { ... }
```

## Тест 2. Массивы, объекты, работа с датой

```js
// вычислить сумму всех элементов массива
function calcArraySum(arr) { ... }

// вернуть новый массив, состоящий только их чётных элементов
function getEvenElements(arr) { ... }

// вычислить количество свойств объекта
function getLength(obj) { ... }

// вычислить день недели в указанную дату
function getDayOfWeek(year, month, day) { ... }
```

## Тест 3. Область видимость, замыкания

```js
// получить функцию, которая считает, сколько раз она вызывается
// var counter = getCounter()
// counter() - вернёт 1
// counter() - вернёт 2
function getCounter() { ... }

// multiplex(4)(5) --> 20
function multiplex() { ... }

// получить функцию, которая умеет здороваться и прощаться с определённым человеком
// hello = getHellower("Вася")
// hello() - вернёт "Привет, Вася"
// hello() - вернёт "Уже здоровались"
// hello() - вернёт "Пока, Вася"
function getHellower() { ... }
```