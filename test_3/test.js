describe("getCounter", function() {

  describe("считает сколько раз вызывается", function() {

    it("при вызове три раза вернёт 3", function() {
      var counter = getCounter();
      counter();
      counter();
      assert.equal(counter(), 3);
    });

    it("при вызове 10 раз вернёт 10", function() {
      var counter = getCounter();
      for (var i = 0; i < 9; i++) {
        counter();
      }
      assert.equal(counter(), 10);
    });

  });

  describe("счётчики независимы", function() {

    it("первый был вызван 10 раз, а второй 9 раз", function() {
      var counter1 = getCounter();
      for (var i = 0; i < 9; i++) {
        counter1();
      }

      var counter2 = getCounter();
      for (var i = 0; i < 8; i++) {
        counter2();
      }

      assert.equal(counter1(), 10);
      assert.equal(counter2(), 9);
    });

  });

});

describe("multiplex", function() {

  describe("умножает числа", function() {

    it("multiplex(1)(0) -> 0", function() {
      assert.equal(multiplex(1)(0), 0);
    });

    it("multiplex(10)(9) --> 90", function() {
      assert.equal(multiplex(10)(9), 90);
    });

    it("multiplex(7)(-3) --> -21", function() {
      assert.equal(multiplex(7)(-3), -21);
    });

    it("multiplex(1)(2) --> 2", function() {
      assert.equal(multiplex(1)(2), 2);
    });

  });

});

describe("getHellower", function() {

  describe("здоровается с Петей", function() {

    it("здоровается с Петей", function() {
      var hellower = getHellower("Петя");
      assert.equal(hellower(), "Привет, Петя");
      assert.equal(hellower(), "Уже здоровались");
      assert.equal(hellower(), "Пока, Петя");
    });

    it("здоровается с Сашей", function() {
      var hellower = getHellower("Саша");
      assert.equal(hellower(), "Привет, Саша");
      assert.equal(hellower(), "Уже здоровались");
      assert.equal(hellower(), "Пока, Саша");
    });

    it("здоровается с Сашей и Петей независимо", function() {
      var hellower1 = getHellower("Саша");
      var hellower2 = getHellower("Петя");

      assert.equal(hellower1(), "Привет, Саша");
      assert.equal(hellower2(), "Привет, Петя");

      assert.equal(hellower1(), "Уже здоровались");
      assert.equal(hellower2(), "Уже здоровались");

      assert.equal(hellower1(), "Пока, Саша");
      assert.equal(hellower2(), "Пока, Петя");

    });

  });

});