import React, { useState } from "react"
import "./CalculatorUI.css"

const CalculatorUI = () => {
  const [input, setInput] = useState("")

  const handleCalculate = () => {}

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
      </div>
    </div>
  )
}

export default CalculatorUI
