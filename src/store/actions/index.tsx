import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

//Action
import {
  GET_PRODUCTS_DATA_FAILURE,
  GET_PRODUCTS_DATA_INPROGRESS,
  GET_PRODUCTS_DATA_SUCCESS,
  GET_PRODUCT_INFO_INPROGRESS,
  GET_PRODUCT_INFO_SUCCESS,
  GET_PRODUCT_INFO_FAILURE,
  SET_PAGE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_CART_ITEM_COUNT,
  DECREASE_CART_ITEM_COUNT,
  EMPTY_CART
} from "../actionTypes";

//Utils
import { productsApi } from "../../utils/api";
import {
  ProductData,
  ProductAction,
  ProductInfoAction
} from "../../utils/types";

type ThunkResult<R> = ThunkAction<R, any, undefined, ProductAction>;

export const getProductsList = (): ThunkResult<void> => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      dispatch({
        type: GET_PRODUCTS_DATA_INPROGRESS,
        productList: []
      });
      const response: AxiosResponse<ProductData[]> = await axios.get<ProductData[]>(productsApi);
      const productData: ProductData[] = response.data;

      console.log(response, 'ashj')

      dispatch({
        type: GET_PRODUCTS_DATA_SUCCESS,
        productList: productData
      });
    } catch (error) {
      // Handle error here
      dispatch({
        type: GET_PRODUCTS_DATA_FAILURE,
        productList: []
      });
      console.error("Error fetching product data:", error);
    }
  };
};

export const getProductInfo = (
  data: ProductData[],
  title: string
): ThunkResult<void> => {
  return async (dispatch: Dispatch<ProductInfoAction>) => {
    try {
      dispatch({
        type: GET_PRODUCT_INFO_INPROGRESS,
        productInfo: {}
      });

      if (!data || data?.length < 1) {
        const response: AxiosResponse<ProductData[]> = await axios.get<
          ProductData[]
        >(productsApi);

        const productInfo =
          Array.isArray(response.data) &&
          response.data.find(
            (product: any) => product.title.trim() === title?.trim()
          );

        dispatch({
          type: GET_PRODUCT_INFO_SUCCESS,
          productInfo: productInfo ?? {}
        });
      } else {
        const productInfo =
          Array.isArray(data) &&
          data.find((product: any) => product.title.trim() === title?.trim());

        dispatch({
          type: GET_PRODUCT_INFO_SUCCESS,
          productInfo: productInfo ?? {}
        });
      }
    } catch (error) {
      // Handle error here
      dispatch({
        type: GET_PRODUCT_INFO_FAILURE,
        productInfo: {}
      });
      console.error("Error fetching product data:", error);
    }
  };
};

export const setPage = (redirectTopage: string, payload?: string) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: SET_PAGE,
      pageData: {
        redirectTopage,
        payload
      }
    });
  };
};

export const addToCart = (id: number, data: ProductData[]) => {
  return (dispatch: Dispatch<any>) => {
    const cartItem =
      Array.isArray(data) && data.find((product: any) => product.id === id);
    dispatch({
      type: ADD_TO_CART,
      cartItem
    });
  };
};

export const removeFromCart = (id: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: REMOVE_FROM_CART,
      cartId: id
    });
  };
};

export const increaseCount = (id: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: INCREASE_CART_ITEM_COUNT,
      cartId: id
    });
  };
};

export const decreaseCount = (id: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: DECREASE_CART_ITEM_COUNT,
      cartId: id
    });
  };
};

export const emptyShoppingCart = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: EMPTY_CART
    });
  };
};
