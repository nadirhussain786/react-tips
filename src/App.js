import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [count, setCount] = useLocalStorage("count", 0);

  return (
    <div className="app">
      <h1 className="title">⚡ Simple Counter</h1>
      <div className="counter">
        <p className="count-display">Current Count: {count}</p>
        <div className="buttons">
          <button className="btn" onClick={() => setCount(count + 1)}>
            ➕ Increment
          </button>
          <button className="btn" onClick={() => setCount(count - 1)}>
            ➖ Decrement
          </button>
          <button className="btn reset" onClick={() => setCount(0)}>
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
