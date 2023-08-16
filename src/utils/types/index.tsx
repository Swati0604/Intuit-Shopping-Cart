import { Action } from "redux";
import {
  GET_PRODUCTS_DATA_SUCCESS,
  GET_PRODUCT_INFO_SUCCESS
} from "../../store/actionTypes";

export interface EmptyStateProps {
  errorStateImg: string;
  buttonLink: string;
  buttonText: string;
  title: string;
  subTitle: string;
  customhandling?: () => void;
}

export interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  count?: number;
}

export interface ProductListProps {
  productList: ProductData[];
  handleNavigate: (itemTitle: string) => void;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  shoppingCart: ProductData[];
}

export interface Rating {
  rate: number;
  count: number;
}

export interface ProductAction extends Action<any> {
  productList: ProductData[];
}

export interface ProductInfoAction extends Action<any> {
  productInfo: ProductData | {};
}

export interface Page extends Action<any> {
  page: "";
}

export interface SliderProps {
  handleShopNowClick: () => void;
}

export interface CategoryItemProps {
  item: CategoryItem;
  handleShopNowClick: () => void;
}

export interface CategoryItem {
  id: number;
  img: string;
  title: string;
}

export interface SliderProps {
  handleShopNowClick: ()=> void;
}

export enum PAGES {
  LANDING_PAGE = "LANDING_PAGE",
  PRODUCT_LISTING_PAGE = "PRODUCT_LISTING_PAGE",
  PRODUCT_DISCRIPTION_PAGE = "PRODUCT_DISCRIPTION_PAGE",
  CART_PAGE = "CART_PAGE",
  CHECKOUT_PAGE = "CHECKOUT_PAGE",
  ORDER_SUCESS_PAGE = "ORDER_SUCESS_PAGE"
}
