// import initialState from "./rawData";

import { ProductData } from "../../utils/types";
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

const INITIAL_STATE = {
  productListData: {
    data: [],
    loading: false,
    error: false
  },
  productInfo: {
    data: {},
    loading: false,
    error: false
  },
  pageData: {
    redirectTopage: "",
    payload: ""
  },
  shoppingCart: [],
  cartLength: 0
};

const reducers = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_PRODUCTS_DATA_INPROGRESS:
      return {
        ...state,
        productListData: {
          data: [],
          loading: true,
          error: ""
        }
      };

    case GET_PRODUCTS_DATA_SUCCESS:
      const { productList } = action;
      return {
        ...state,
        productListData: {
          data: productList,
          loading: false,
          error: false
        }
      };

    case GET_PRODUCTS_DATA_FAILURE:
      return {
        ...state,
        productListData: {
          data: [],
          loading: false,
          error: false
        }
      };

    case GET_PRODUCT_INFO_INPROGRESS:
      return {
        ...state,
        productInfo: {
          data: {},
          loading: true,
          error: ""
        }
      };

    case GET_PRODUCT_INFO_SUCCESS:
      const { productInfo } = action;
      return {
        ...state,
        productInfo: {
          data: productInfo,
          loading: false,
          error: false
        }
      };

    case GET_PRODUCT_INFO_FAILURE:
      return {
        ...state,
        productInfo: {
          data: {},
          loading: false,
          error: false
        }
      };

    case SET_PAGE:
      const { pageData } = action;
      const { redirectTopage, payload } = pageData;
      return {
        ...state,
        pageData: {
          redirectTopage,
          payload
        }
      };

    case ADD_TO_CART:
      const { cartItem } = action;
      const { shoppingCart } = state;

      let count = cartItem?.count ?? 0;

      if (shoppingCart.length > 0) {
        console.log(shoppingCart, "shoppi");
        count = shoppingCart.reduce((acc: number, curr: ProductData) => {
          if (curr.id === cartItem.id) {
            acc = acc + 1;
          }
          return acc;
        }, 0);
      }

      if (count < 1) {
        const newCartItem = { ...cartItem, count: count + 1 };
        const newShoppingCart = [...shoppingCart, newCartItem];

        return {
          ...state,
          shoppingCart: newShoppingCart
        };
      } else {
        const newShoppingCart: any[] = [];
        shoppingCart.map((cart: ProductData) => {
          if (cart.id === cartItem.id) {
            cart.count = (cart.count ?? 1) + 1;
            newShoppingCart.push(cart);
          } else {
            newShoppingCart.push(cart);
          }
        });
        return {
          ...state,
          shoppingCart: newShoppingCart
        };
      }

    case REMOVE_FROM_CART:
      const { cartId } = action;

      const updatedShoppingCart = state.shoppingCart.filter(
        (cart: ProductData) => cart.id !== cartId
      );

      return {
        ...state,
        shoppingCart: updatedShoppingCart
      };

    case INCREASE_CART_ITEM_COUNT:
      const { cartId: itemId } = action;
      const increaseItemCountInShoppingCart = state.shoppingCart.filter(
        (cart: ProductData) => {
          if (cart.id !== itemId) {
            return cart;
          } else {
            cart.count = (cart.count ?? 1) + 1;
            return cart;
          }
        }
      );

      console.log();

      return {
        ...state,
        shoppingCart: increaseItemCountInShoppingCart
      };

    case DECREASE_CART_ITEM_COUNT:
      const { cartId: cartItemId } = action;
      const decreaseItemCountInShoppingCart = state.shoppingCart.filter(
        (cart: ProductData) => {
          if (cart.id !== cartItemId) {
            return cart;
          } else {
            cart.count = (cart.count ?? 1) - 1;
            return cart;
          }
        }
      );

      return {
        ...state,
        shoppingCart: decreaseItemCountInShoppingCart
      };

    case EMPTY_CART:
      return {
        ...state,
        shoppingCart: []
      };

    default:
      return state;
  }
};

export default reducers;
