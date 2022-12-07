import assert from "assert";

describe("Math Libriry Tests", function () {
  it("Should pass", function () {
    assert.equal(Math.sqrt(25), 5);
  });

  it("Should fail", function () {
    assert.equal(Math.sqrt(25), 4);
  });

  describe("Testing nested describe", function () {
    it("Should pass", function () {
      assert.equal(Math.sqrt(25), 5);
    });

    it("Should fail", function () {
      assert.equal(Math.sqrt(25), 4);
    });
  });
});
