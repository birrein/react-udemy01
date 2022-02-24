import { Props as ButtonsProps } from '../components/ProductButtons';
import { Props as ImageProps } from '../components/ProductImage';
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as TitleProps } from '../components/ProductTitle';

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increasedBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (Props: TitleProps) => JSX.Element;
  Image: (Props: ImageProps) => JSX.Element;
  Buttons: (Props: ButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}
