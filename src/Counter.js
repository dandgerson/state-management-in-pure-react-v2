import { useState } from "react";

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem("counterState");
  if (storage) return JSON.parse(storage);
  return { count: 0 };
};

const storeStateInLocalStorage = (state) => {
  localStorage.setItem("counterState", JSON.stringify(state));
  console.log(localStorage);
};

const updateDocumentTitle = (state) => {
  document.title = state.count;
};

const Counter = ({ max, step }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => {
      if (count >= max) return count;
      return count + step;
    });

    console.log("Before", { count });
  };
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <div className="count">{count}</div>
      <div className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
