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
