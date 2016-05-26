describe("getAverage", function() {

  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(getAverage()), "getAverage() не NaN");
  });

  describe("вычисляет среднее", function() {

    it("среднее 1 и 3 равно 2", function() {
      assert.equal(getAverage(1, 3), 2);
    });

    it("среднее 0 и 10 равно 5", function() {
      assert.equal(getAverage(0, 10), 5);
    });

    it("среднее -5 и 5 равно 0", function() {
      assert.equal(getAverage(-5, 5), 0);
    });

    it("среднее -10 и 10 равно 0", function() {
      assert.equal(getAverage(-10, 10), 0);
    });

    it("среднее 0 и 100 равно 50", function() {
      assert.equal(getAverage(0, 100), 50);
    });

  });

});

describe("getReverseByWords", function() {

  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(getReverseByWords()), "getReverseByWords() не NaN");
  });

  describe("переворачивает строку по словам", function() {

    it("В лесу родилась ёлочка -> ёлочка родилась лесу В", function() {
      assert.equal(getReverseByWords("В лесу родилась ёлочка"), "ёлочка родилась лесу В");
    });

    it("Мама мыла раму -> раму мыла Мама", function() {
      assert.equal(getReverseByWords("Мама мыла раму"), "раму мыла Мама");
    });

  });

});

describe("getAverageMany", function() {

  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(getAverageMany()), "getAverageMany() не NaN");
  });

  describe("вычисляет среднее", function() {

    it("среднее 2, 2, 2, 2, 2 равно 2", function() {
      assert.equal(getAverageMany(2, 2, 2, 2, 2), 2);
    });

    it("среднее 1, 3 и 5 равно 3", function() {
      assert.equal(getAverageMany(1, 3, 5), 3);
    });

    it("среднее 1 и 3 равно 2", function() {
      assert.equal(getAverageMany(1, 3), 2);
    });

    it("среднее 0 и 10 равно 5", function() {
      assert.equal(getAverageMany(0, 10), 5);
    });

    it("среднее -5 и 5 равно 0", function() {
      assert.equal(getAverageMany(-5, 5), 0);
    });

    it("среднее -10 и 10 равно 0", function() {
      assert.equal(getAverageMany(-10, 10), 0);
    });

    it("среднее 0 и 100 равно 50", function() {
      assert.equal(getAverageMany(0, 100), 50);
    });

  });

});

describe("getFilterRange", function() {

  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(getFilterRange()), "getFilterRange() не NaN");
  });

  describe("фильтрует массив", function() {

    it("[0, 1, 2, 3, 4, 5] между 2 и 4 -> [3]", function() {
      assert.equal(getFilterRange([0, 1, 2, 3, 4, 5], 2, 4), [3]);
    });

    it("[0, 1, 2, 3, 4, 5] между -10 и 3 -> [0, 1, 2]", function() {
      assert.equal(getFilterRange([0, 1, 2, 3, 4, 5], -10, 3), [0, 1, 2]);
    });

  });

});

describe("isEmpty", function() {

  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(isEmpty()), "isEmpty() не NaN");
  });

  describe("проверяет объект на пустоту", function() {

    it("{} -> пустой", function() {
      assert.equal(isEmpty({}), true);
    });

    it("{a: 1} -> не пустой", function() {
      assert.equal(isEmpty({a: 1}), false);
    });

  });

});

describe("getApple", function() {

  describe("говорит цвет и размер", function() {

    it("говорит цвет", function() {
      var apple = getApple('красный', 'маленький');
      assert.isDefined(apple, "яблоко существует");

      assert.equal(apple.sayColor(), 'мой цвет - красный');
    });

    it("говорит размер", function() {
      var apple = getApple('красный', 'маленький');
      assert.isDefined(apple, "яблоко существует");

      assert.equal(apple.saySize(), 'мой размер - маленький');
    });

  });

  describe("яблоки независимы", function() {
    var apple = getApple('красный', 'маленький');
    assert.isDefined(apple, "яблоко существует");

    var appleBig = getApple('красный', 'большой');
    assert.isDefined(appleBig, "яблоко существует");

    assert.equal(apple.saySize(), 'мой размер - маленький');
    assert.equal(appleBig.saySize(), 'мой размер - большой');
  });

});
