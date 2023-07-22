import assertEquals from "./assert-equals";

describe("assertEquals", () => {
  describe("when expected and actual are the same string", () => {
    it("returns without throwing an error", () => {
      expect(() => assertEquals("abc", "abc")).not.toThrow();
    });
  });

  describe("when expected and actual are different strings", () => {
    it.todo("throws an error");
  });
});
