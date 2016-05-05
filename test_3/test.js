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

});

describe("multiplex", function() {

  describe("умножает числа", function() {

    it("multiplex(1)(0) -> 0", function() {
      assert.equal(multiplex(1)(0), 0);
    });

    it("multiplex(10)(9) --> 90", function() {
      assert.equal(multiplex(10)(9), 0);
    });

    it("multiplex(7)(-3) --> -21", function() {
      assert.equal(multiplex(7)(-3), -21);
    });

    it("multiplex(1)(2) --> 2", function() {
      assert.equal(multiplex(1)(2), 2);
    });

  });

});