import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("October 17, 2025");
  date.setDate(date.getDate() + count);

  function minusStep() {
    setStep((s) => s - 5);
  }
  function plusStep() {
    setStep((s) => s + 5);
  }
  function minusCount() {
    setCount((c) => c - step);
  }
  function plusCount() {
    setCount((c) => c + step);
  }
  return (
    <div>
      <div>
        <button onClick={minusStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={plusStep}>+</button>
      </div>
      <div>
        <button onClick={minusCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={plusCount}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
}
