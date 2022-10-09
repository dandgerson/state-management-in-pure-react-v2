import { useEffect, useRef, useState } from 'react';

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
    const id = setInterval(() => {
      console.log(`Count: ${count}`);
    }, 3000);

    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="counter">
      <div>{message}</div>
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
