import { useState } from 'react';

export const useProduct = (initialValue: number) => {
  const [counter, setCounter] = useState(initialValue);

  const increasedBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, initialValue));
  };

  return {
    counter,
    increasedBy,
  };
};
