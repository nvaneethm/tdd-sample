// src/components/Calculator/CalculatorUI.test.js

import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CalculatorUI from "../components/calculator"

describe("CalculatorUI", () => {
  test("displays result after a successful calculation", async () => {
    render(<CalculatorUI />)

    const input = screen.getByPlaceholderText(/e.g., \/\/;/i)
    const button = screen.getByRole("button", { name: /calculate/i })

    await userEvent.clear(input)
    await userEvent.type(input, "1,2,3")

    userEvent.click(button)

    const resultEl = await screen.findByTestId("result")

    expect(resultEl).toBeInTheDocument()
    expect(resultEl).toHaveTextContent("Result: 6")
  })

  test("displays error message when negatives are provided", async () => {
    render(<CalculatorUI />)

    const input = screen.getByPlaceholderText(/e.g., \/\/;/i)
    const button = screen.getByRole("button", { name: /calculate/i })

    await userEvent.clear(input)
    await userEvent.type(input, "1,-2,3,-4")

    userEvent.click(button)

    const errorEl = await screen.findByTestId("error")

    expect(errorEl).toBeInTheDocument()
    expect(errorEl).toHaveTextContent("Error: negatives not allowed: -2, -4")
  })
})
