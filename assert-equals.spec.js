// import checkDataType from "./assert-equals";
import { checkArguments } from "./assert-equals";

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
