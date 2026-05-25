const {describe,it} = require("node:test");
const assert = require("node:assert");
const {utils} = require("./utils.js");

describe("Calculate Array Stats", () => {
  it("should throw an error if the input is not an array", () => {
    const data = "not an array";
    assert.throws(() => utils(data));
  });

  it("should throw an error if the array is empty", () => {
    const data = [];
    assert.throws(() => utils(data));
  });

  it("should throw an error if any element in the array is not a number", () => {
    const data = [1, 2, "three", 4];
    assert.throws(() => utils(data) )});
});

it("should return the correct average, minimum, and maximum values for a valid array of numbers", () => {
  const data = [4, 2, 6, 8];
  const expectedOutput = {
    avg: 5,
    min: 2,
    max: 8
  };
  const result = utils(data);
  assert.deepStrictEqual(result, expectedOutput);
}
)