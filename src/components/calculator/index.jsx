import React, { useState } from "react"
import { addString } from "../../services/StringCalculator"
import "./CalculatorUI.css"

const CalculatorUI = () => {
  const [input, setInput] = useState("")
  const [result, setResult] = useState(null)
  const [error, setError] = useState("")

  const handleCalculate = () => {
    try {
      const sum = addString(input)
      setResult(sum)
      setError("")
    } catch (err) {
      setResult(null)
      setError(err.message)
    }
  }

  return (
    <div className="calculator-container">
      <h1>String Calculator</h1>
      <div className="calculator-card">
        <label htmlFor="calculator-input">
          Enter numbers <br />
          <span className="format-note">
            (Format: //[delimiter]\n[numbers])
          </span>
        </label>
        <input
          id="calculator-input"
          type="text"
          placeholder="e.g., //;\n1;2 or 1,2,3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleCalculate}>Calculate</button>
        {result !== null && (
          <p className="result" data-testid="result">
            Result: {result}
          </p>
        )}
        {error && (
          <p className="error" data-testid="error">
            Error: {error}
          </p>
        )}
      </div>
    </div>
  )
}

export default CalculatorUI
