import { useEffect, useRef, useState } from 'react';

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
  const [count, setCount] = useState(0);

  const countRef = useRef();

  let message = '';
  if (countRef.current > count) message = 'Higher';
  if (countRef.current < count) message = 'Lower';

  console.log(countRef, { count }, message);
  countRef.current = count;

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    setTimeout(() => {
      console.log(`Count: ${count}`);
    }, 3000);
  }, [count]);

  return (
    <div className="counter">
      <div>The message is: {message}</div>
      <div className="count">
        {message}
        {count}
      </div>
      <div className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
