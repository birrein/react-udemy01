import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import {
  ProductCardProps,
  ProductContextProps,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increasedBy } = useProduct(0);

  return (
    <Provider value={{ counter, increasedBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
