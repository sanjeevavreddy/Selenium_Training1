import assert from "assert";

function sum(arr: number[]) {
  return arr.reduce((sum, curr) => sum + curr, 0);
}

type Test = {
  arr: number[];
  expected: number;
};

describe("Testing the sum function (alt)", function () {
  const testSum = ({ arr, expected }: Test) =>
    function () {
      const res = sum(arr);
      assert.equal(res, expected);
    };

  it(`correctly adds 2 args`, testSum({ arr: [1, 2], expected: 3 }));
  it(`correctly adds 3 args`, testSum({ arr: [1, 2, 3], expected: 6 }));
  it(`correctly adds 4 args`, testSum({ arr: [1, 2, 3, 4], expected: 10 }));
});

describe("Testing the sum function", function () {
  const tests = [
    { arr: [1, 2], expected: 3 },
    { arr: [1, 2, 3], expected: 6 },
    { arr: [1, 2, 3, 4], expected: 10 },
  ];

  tests.forEach(({ arr, expected }) => {
    it(`correctly adds ${arr.length} elements`, function () {
      const res = sum(arr);
      assert.equal(res, expected);
    });
  });
});
