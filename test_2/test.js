describe("calcArraySum", function() {

  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(calcArraySum()), "calcArraySum() не NaN");
  });

  describe("вычисляет сумму элементов", function() {

    it("сумма 1 равна 1", function() {
      assert.equal(calcArraySum([1]), 1);
    });

    it("сумма 1, 10 равна 11", function() {
      assert.equal(calcArraySum([1, 10]), 11);
    });

    it("сумма -1, 10 равна 9", function() {
      assert.equal(calcArraySum([-1, 10]), 9);
    });

    it("сумма -10, 10 равна 0", function() {
      assert.equal(calcArraySum([-10, 10]), 0);
    });

    it("сумма 1, 2, 3, 4 равна 10", function() {
      assert.equal(calcArraySum([1, 2, 3, 4]), 10);
    });

  });

});

describe("getEvenElements", function() {

  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(getEvenElements()), "getEvenElements() не NaN");
  });

  describe("фильтрует чётные числа", function() {

    it("фильтр [1] равен []", function() {
      assert.deepEqual(getEvenElements([1]), []);
    });

    it("фильтр [1, 10] равна [10]", function() {
      assert.deepEqual(getEvenElements([1, 10]), [10]);
    });

    it("фильр [-1, 10] равен [10]", function() {
      assert.deepEqual(getEvenElements([-1, 10]), [10]);
    });

    it("фильтр [-10, 10] равен [-10, 10]", function() {
      assert.deepEqual(getEvenElements([-10, 10]), [-10, 10]);
    });

    it("фильтр [1, 2, 3, 4] равен [2, 4]", function() {
      assert.deepEqual(getEvenElements([1, 2, 3, 4]), [2, 4]);
    });

  });

});

describe("getLength", function() {

  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(getLength()), "getLength() не NaN");
  });

  describe("считает количество полей", function() {

    it("у пустого объекта 0 полей", function() {
      assert.equal(getLength({}), 0);
    });

    it("у объекта { a: '1', b: 2 } - 2 поля", function() {
      assert.equal(getLength({ a: '1', b: 2 }), 2);
    });

    it("у объекта { a: 1, b: 2, c: 3, d: 7 } - 4 поля", function() {
      assert.deepEqual(getLength({ a: 1, b: 2, c: 3, d: 7 }), 4);
    });

  });

});

describe("getDayOfWeek", function() {

  it("при запуске без параметров результат NaN", function() {
    assert(isNaN(getDayOfWeek()), "getDayOfWeek() не NaN");
  });

  describe("считает день недели", function() {

    it("8 мая 2016 года воскресенье", function() {
      assert.equal(getDayOfWeek(2016, 5, 8), 'вс');
    });

    it("8 апреля 2040 года пятница", function() {
      assert.equal(getDayOfWeek(2016, 4, 8), 'пт');
    });

    it("1 января 2017 года воскресенье", function() {
      assert.equal(getDayOfWeek(2017, 1, 1), 'вс');
    });

    it("5 мая 2016 года четверг", function() {
      assert.equal(getDayOfWeek(2016, 5, 5), 'чт');
    });

  });

});