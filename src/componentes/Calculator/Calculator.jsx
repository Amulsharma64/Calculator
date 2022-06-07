import { useState } from "react";

export default function Calculator() {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");
  const opr = ["/", "*", "+", "-", "."];

  function update(value) {
    if (
      (opr.includes(value) && cal === "") ||
      (opr.includes(value) && opr.includes(cal.slice(-1)))
    ) {
      return;
    }
    setCal(cal + value);
    if (!opr.includes(value)) {
      setResult(eval(cal + value).toString());
    }
  }

  function Calculate() {
    setCal(eval(cal).toString());
  }

  function Delete() {
    if (cal != "") {
      const value = cal.slice(0, -1);
      setCal(value);
    }
  }

  function clrScreen() {
    setCal("");
    setResult("");
  }
  const digits = [];
  for (let i = 1; i < 10; i++) {
    digits.push(
      <button key={i} onClick={() => update(i)}>
        {i}
      </button>
    );
  }
  return (
    <div className="calculatorApp">
      <h1>Basic Calculator</h1>
      <div className="Calculator">
        <div className="Display">
          {result ? <span className="eval">({result})</span> : ""} &nbsp;
          {cal || "0"}
        </div>

        <div className="operaters">
          <button onClick={() => update("/")}>/</button>
          <button onClick={() => update("*")}>*</button>
          <button onClick={() => update("-")}>-</button>
          <button onClick={() => update("+")}>+</button>
          <button onClick={Delete}>DEL</button>
          <button onClick={clrScreen}>CLR</button>
        </div>
        <div className="Digits">
          {digits}
          <button onClick={() => update("0")}>0</button>
          <button onClick={() => update(".")}>.</button>
          <button onClick={Calculate}>=</button>
        </div>
      </div>
    </div>
  );
}
