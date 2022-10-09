import { useEffect, useState } from "react";

const getCounterStateFromLocalStorage = () => {
  const counterState = localStorage.getItem("counterState");
  if (counterState) return JSON.parse(counterState);
  return { count: 0 };
};

const setCounterStateInLocalStorage = (count) => {
  localStorage.setItem("counterState", JSON.stringify({ count }));
  console.log(localStorage);
};

const updateDocumentTitle = (count) => {
  document.title = count;
};

const Counter = ({ max, step }) => {
  const [count, setCount] = useState(
    () => getCounterStateFromLocalStorage().count
  );

  const increment = () => {
    setCount((count) => {
      if (count >= max) return count;
      return count + step;
    });

    console.log("Before", { count });
  };
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    updateDocumentTitle(count);
  }, [count]);

  useEffect(() => {
    setCounterStateInLocalStorage(count);
  }, [count]);

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
