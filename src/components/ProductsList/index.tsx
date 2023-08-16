import { addToCart } from "../../store/actions";
import { ProductListProps } from "../../utils/types";

import Product from "./Product";

import "./styles.scss";

const ProductList = (props: ProductListProps) => {
  const {
    productList,
    handleNavigate,
    addToCart,
    shoppingCart,
    removeFromCart
  } = props;
  return (
    <div className="product-list-container">
      {productList?.map((item: any) => (
        <Product
          item={item}
          key={item.id}
          handleNavigate={() => handleNavigate(item.title)}
          addToCart={() => addToCart(item.id)}
          shoppingCart={shoppingCart}
          removeFromCart={() => removeFromCart(item.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
