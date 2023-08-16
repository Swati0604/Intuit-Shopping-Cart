import { ShoppingCartOutlined } from "@material-ui/icons";
import { checkItemPresentInCart } from "../../utils/helpers";

import { Rating } from "../Rating";

import "./styles.scss";

const ProductDescription = ({
  productInfo,
  addToCart,
  shoppingCart,
  removeFromCart
}: any) => {
  if (productInfo) {
    return (
      <section className="Detail">
        <article className="Detail__thumbnail">
          <img src={productInfo.image} alt="" />
        </article>

        <article className="Detail__info">
          <div className="Detail__info--header">
            <h2>{productInfo.title}</h2>
          </div>

          <div className="Detail__info--meta">
            <span className="Detail__price">${productInfo.price}</span>
            <Rating content={productInfo.rating.rate} />
          </div>

          <p className="Detail__info--description">{productInfo.description}</p>

          {checkItemPresentInCart(shoppingCart, productInfo) ? (
            <button
              className="remove-btn  valign-wrapper vcenter"
              onClick={() => removeFromCart(productInfo.id)}
            >
              Remove from Cart
              <ShoppingCartOutlined style={{ height: "18px" }} />
            </button>
          ) : (
            <button
              className="cart-btn valign-wrapper vcenter"
              onClick={() => addToCart(productInfo.id)}
            >
              Add to Cart
              <ShoppingCartOutlined style={{ height: "18px" }} />
            </button>
          )}
        </article>
      </section>
    );
  }

  return null;
};

export default ProductDescription;
