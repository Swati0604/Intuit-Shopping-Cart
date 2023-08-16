import { ShoppingCartOutlined } from "@material-ui/icons";
import { checkItemPresentInCart } from "../../../utils/helpers";
import { ProductData } from "../../../utils/types";

import "./styles.scss";

const Product = (props: ProductCardProps) => {
  const {
    item,
    handleNavigate,
    addToCart,
    shoppingCart,
    removeFromCart
  } = props;
  const { image, title, price, category } = item;

  return (
    <div className="product-container">
      <div className="product-top-content">
        <div className="product-container-image" onClick={handleNavigate}>
          <img src={image} alt={title} />
        </div>

        <div className="product-container-body">
          <h2 onClick={handleNavigate}>{title}</h2>
          <span className="Item__category">{category.toUpperCase()}</span>
          <br />
          <span className="fw600">${price}</span>
        </div>
      </div>

      <div className="product-container-footer">
        {checkItemPresentInCart(shoppingCart, item) ? (
          <button
            className="remove-btn  valign-wrapper vcenter"
            onClick={removeFromCart}
          >
            Remove from Cart
            <ShoppingCartOutlined style={{ height: "18px" }} />
          </button>
        ) : (
          <button
            className="cart-btn valign-wrapper vcenter"
            onClick={addToCart}
          >
            Add to Cart
            <ShoppingCartOutlined style={{ height: "18px" }} />
          </button>
        )}
      </div>
    </div>
  );
};

interface ProductCardProps {
  item: ProductData;
  handleNavigate: () => void;
  addToCart: () => void;
  removeFromCart: () => void;
  shoppingCart: ProductData[];
}

export default Product;
