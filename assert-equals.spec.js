import { describe } from "yargs";
import { checkArguments } from "./assert-equals";
import { checkSameDataType } from "./assert-equals";

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
