import { useState } from "react";
import { Answer } from "./Answer";

const App = () => {
  const fib = (n) => (n <= 2 ? 1 : fib(n - 1) + fib(n - 2));
  const [count, rerender] = useState(0);
  const [number, setNumber] = useState(25);

  return (
    <div className="App">
      <h1>React Hooks Exercise Starter</h1>
      <Answer calculateFunction={fib} number={number} />
      <button onClick={() => setNumber(number + 1)}>
        Increase the number ({number})
      </button>
      <button onClick={() => rerender(count + 1)}>
        Force rerender (count: {count})
      </button>
    </div>
  );
};

export default App;
