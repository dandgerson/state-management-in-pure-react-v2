import { useEffect, useState } from "react";

const useLocalStorage = (initialState, key) => {
  const get = (initialState, key) => {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return initialState;
  };

  const [value, setValue] = useState(get(initialState, key));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

const Counter = ({ max, step }) => {
  const [count, setCount] = useLocalStorage(0, "count");

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
    document.title = count;
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
