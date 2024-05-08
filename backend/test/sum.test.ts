import sum from "../src/server";

describe("sum method", function() {
  it("should return the sum of 4 and 5 to be 9", function() {
    const a = 5;
    const b = 10;

    const result = sum(a, b);
    expect(result).toBe(15);
  });
});