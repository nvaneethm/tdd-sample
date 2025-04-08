import { addString } from "../services/StringCalculator"

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(addString("")).toBe(0)
  })
  test("returns the number for a single number input", () => {
    expect(addString("5")).toBe(5)
    expect(addString("42")).toBe(42)
  })
})
