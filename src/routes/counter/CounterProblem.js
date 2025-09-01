import { useState } from "react";
import "../../App.css";

function CounterProblem() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1 className="title">❌ Counter Problem</h1>
      <p className="greeting">Count: {count}</p>
      <button className="btn" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default CounterProblem;
