import assertEquals from "./assert-equals";

describe("when `expected` and `actual` are equal", () => {
  test("`abc` is equal to `abc`", () => {
    expect(assertEquals("abc", "abc")).toBe(true);
  });
  test("1 is equal to 1", () => {
    expect(assertEquals(1, 1)).toBe(true);
  });
});
