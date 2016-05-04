describe("sumToN", function() {
  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(sumToN()), "sumToN() не NaN");
  });

  it("при орицательном параметре результат NaN", function() {
    assert(isNaN(sumToN(-1)), "sumToN(-1) не NaN");
  });

  describe("вычисляет сумму до числа", function() {

    it("сумма до числа 0 равна 1 ", function() {
      assert.equal(sumToN(0), 0);
    });

    it("сумма до числа 1 равна 1 ", function() {
      assert.equal(sumToN(1), 1);
    });

    it("сумма до числа 2 равна 2 ", function() {
      assert.equal(sumToN(2), 3);
    });

    it("сумма до числа 3 равна 3 ", function() {
      assert.equal(sumToN(3), 6);
    });

    it("сумма до числа 4 равна 5 ", function() {
      assert.equal(sumToN(4), 10);
    });

    it("сумма до числа 5 равна 8", function() {
      assert.equal(sumToN(5), 15);
    });

  });
});


describe("sumFromMToN", function() {
  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(sumFromMToN()), "sumFromMToN() не NaN");
  });

  it("при m > n результат NaN", function() {
    assert(isNaN(sumFromMToN(10, 9)), "sumFromMToN(10, 9) не NaN");
  });

  describe("вычисляет сумму до числа", function() {

    it("сумма от 0 до 0 равна 0 ", function() {
      assert.equal(sumFromMToN(0, 0), 0);
    });

    it("сумма от -2 до 0 равна 0 ", function() {
      assert.equal(sumFromMToN(-2, 0), -3);
    });

    it("сумма от -2 до 2 равна 0 ", function() {
      assert.equal(sumFromMToN(-2, 2), 0);
    });

    it("сумма от -5 до 11 равна 0 ", function() {
      assert.equal(sumFromMToN(-5, 11), 51);
    });

    it("сумма от 0 до 5 равна 0 ", function() {
      assert.equal(sumFromMToN(0, 5), 15);
    });

  });
});

describe("fib", function() {
  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(fib()), "fib() не NaN");
  });

  it("при орицательном параметре результат NaN", function() {
    assert(isNaN(fib(-1)), "fib(-1) не NaN");
  });

  describe("вычисляет числа Фибоначи", function() {

    it("число Фибоначи номер 0 равно 1 ", function() {
      assert.equal(fib(0), 1);
    });

    it("число Фибоначи номер 1 равно 1 ", function() {
      assert.equal(fib(1), 1);
    });

    it("число Фибоначи номер 2 равно 2 ", function() {
      assert.equal(fib(2), 2);
    });

    it("число Фибоначи номер 3 равно 3 ", function() {
      assert.equal(fib(3), 3);
    });

    it("число Фибоначи номер 4 равно 5 ", function() {
      assert.equal(fib(4), 5);
    });

    it("число Фибоначи номер 5 равно 8", function() {
      assert.equal(fib(5), 8);
    });

  });
});


describe("factorial", function() {
  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(factorial()), "factorial() не NaN");
  });

  it("при орицательном параметре результат NaN", function() {
    assert(isNaN(factorial(-1)), "factorial(-1) не NaN");
  });

  describe("вычисляет факториал", function() {

    it("факториал 0 равен 1 ", function() {
      assert.equal(factorial(0), 1);
    });

    it("факториал 1 равен 1 ", function() {
      assert.equal(factorial(1), 1);
    });

    it("факториал 2 равен 2 ", function() {
      assert.equal(factorial(2), 2);
    });

    it("факториал 3 равен 6 ", function() {
      assert.equal(factorial(3), 6);
    });

    it("факториал 4 равен 24 ", function() {
      assert.equal(factorial(4), 24);
    });

    it("факториал 5 равен 120", function() {
      assert.equal(factorial(5), 120);
    });

  });
});


describe("sumToN", function() {

});


describe("pow", function() {

  describe("возводит x в степень n", function() {

    function makeTest(x) {
      var expected = x * x * x;
      it("при возведении " + x + " в степень 3 результат: " + expected, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  it("при возведении в отрицательную степень результат NaN", function() {
    assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
  });

  it("при возведении в дробную степень результат NaN", function() {
    assert(isNaN(pow(2, 1.5)), "pow(2, -1.5) не NaN");
  });

  describe("любое число, кроме нуля, в степени 0 равно 1", function() {

    function makeTest(x) {
      it("при возведении " + x + " в степень 0 результат: 1", function() {
        assert.equal(pow(x, 0), 1);
      });
    }

    for (var x = -5; x <= 5; x += 2) {
      makeTest(x);
    }

  });

  it("ноль в нулевой степени даёт NaN", function() {
    assert(isNaN(pow(0, 0)), "0 в степени 0 не NaN");
  });

});

describe("reverse", function() {

  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(reverse()), "reverse() не NaN");
  });

  describe("переворачивает строку", function() {

    it("переворачивает строку 123", function() {
      assert.equal(reverse("123"), "321");
    });

    it("переворачивает строку Вася и Петя", function() {
      assert.equal(reverse("Вася и Петя"), "ятеП и ясаВ");
    });

  });

});

describe("simple", function() {

  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(simple()), "simple() не NaN");
  });

  it("при орицательном параметре результат NaN", function() {
    assert(isNaN(simple(-1)), "simple(-1) не NaN");
  });

  it("при нулевом параметре результат NaN", function() {
    assert(isNaN(simple(0)), "simple(0) не NaN");
  });

  describe("вычисляет простые числа", function() {

    it("первое простое число 2", function() {
      assert.equal(simple(1), 2);
    });

    it("второе простое число 3", function() {
      assert.equal(simple(2), 3);
    });

    it("третье простое число 5", function() {
      assert.equal(simple(3), 5);
    });

    it("четвёртое простое число 7", function() {
      assert.equal(simple(4), 7);
    });

    it("пятое простое число 11", function() {
      assert.equal(simple(5), 11);
    });

  });

});