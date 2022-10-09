import { useState, useEffect } from 'react';

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

export default useLocalStorage;
