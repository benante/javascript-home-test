import {
  checkArguments,
  checkSameDataType,
  comparePrimitives,
  compareArrays,
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

describe("comparePrimitives function test", () => {
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

describe("compareArrays function test", () => {
  const helloWorld = ["hello", "world"];
  const slimShady = ["My", "name", "is", "Slim", "Shady"];
  const oneTwoThree = [1, 2, 3];

  test(`${helloWorld} has different lenght of ${slimShady}`, () => {
    expect(compareArrays(helloWorld, slimShady)).toBe(false);
  });
  test(`${helloWorld} has same lenght of ["this", "array"] but different values`, () => {
    expect(compareArrays(helloWorld, ["this", "array"])).toBe(false);
  });
  test(`${oneTwoThree} has same lenght and values of [1, 2, 3]`, () => {
    expect(compareArrays(oneTwoThree, [1, 2, 3])).toBe(true);
  });
});
