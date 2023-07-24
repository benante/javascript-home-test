import {
  checkArguments,
  checkSameDataType,
  comparePrimitives,
} from "./assert-equals";

describe("checkArguments function test", () => {
  test("One missing argument", () => {
    expect(checkArguments(1)).toBe(false);
  });
  test("No arguments at all", () => {
    expect(checkArguments()).toBe(false);
  });
  test("Working with both arguments", () => {
    expect(checkArguments("hello OakNorth", 666)).toBe(true);
  });
});

describe("checkSameDataType function test", () => {
  test("`Pantera` is a string like `Metallica`", () => {
    expect(checkSameDataType("Pantera", "Metallica")).toBe(true);
  });
  test("Arrays have not the same type of numbers", () => {
    expect(checkSameDataType([1], 1)).toBe(false);
  });
  test("Numbers have different type to strings", () => {
    expect(checkSameDataType(3, "String")).toBe(false);
  });
});

describe("assertPrimitives function", () => {
  test("111 is equal 111", () => {
    expect(comparePrimitives(111, 111)).toBe(true);
  });
  test("`Hello` is not equal to `hello`", () => {
    expect(comparePrimitives("Hello", "hello")).toBe(false);
  });
  test("Tommaso is equal to Tommaso", () => {
    expect(comparePrimitives("Tommaso", "Tommaso")).toBe(true);
  });
});
