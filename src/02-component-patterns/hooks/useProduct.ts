import { useEffect, useState, useRef } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount && newValue > initialValues.maxCount) return;

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.maxCount && counter >= initialValues.maxCount,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
