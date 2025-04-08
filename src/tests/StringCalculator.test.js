import { addString } from "../services/StringCalculator";

describe("String Calculator", () => {
    test("returns 0 for an empty string", () => {
      expect(addString("")).toBe(0);
    });
  });