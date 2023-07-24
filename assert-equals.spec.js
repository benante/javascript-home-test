// import checkDataType from "./assert-equals";
import { checkArguments } from "./assert-equals";

describe("checkArguments function test", () => {
  test("Missing argument", () => {
    expect(checkArguments(1)).toBe(false);
  });
  test("Working with both arguments", () => {
    expect(checkArguments("hello OakNorth", 666)).toBe(true);
  });
});
