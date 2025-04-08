import { addString } from "../services/StringCalculator"

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(addString("")).toBe(0)
  })
  test("returns the number for a single number input", () => {
    expect(addString("5")).toBe(5)
    expect(addString("42")).toBe(42)
  })
  test("returns the sum for two numbers separated by a comma", () => {
    expect(addString("1,2")).toBe(3)
  })
  test("returns the sum for multiple comma-separated numbers", () => {
    expect(addString("1,2,3,4")).toBe(10);
  });
  test("handles newlines between numbers", () => {
    expect(addString("1\n2,3")).toBe(6);
  });
})
