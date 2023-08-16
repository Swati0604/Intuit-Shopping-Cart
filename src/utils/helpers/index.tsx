import { ProductData } from "../types";

export const checkItemPresentInCart = (
  shoppingCart: ProductData[],
  item: ProductData
) => {
  const isItemPresent = shoppingCart.reduce((acc, curr) => {
    if (curr.id === item.id) {
      acc = true;
    }
    return acc;
  }, false);

  return isItemPresent;
};

export const fixTillSecondDecimal = (value: number) => {
  return value.toFixed(2);
};
