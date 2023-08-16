import { Add, Remove, ShoppingCartOutlined } from "@material-ui/icons";

import { ProductData } from "../../utils/types";
import { fixTillSecondDecimal } from "../../utils/helpers";

import "./styles.scss";

const OrderInfoSection = ({
  shoppingCart,
  removeFromCart,
  increaseCount,
  decreaseCount
}: {
  shoppingCart: ProductData[];
  removeFromCart: (itemId: number) => void;
  increaseCount: (itemId: number) => void;
  decreaseCount: (itemId: number) => void;
}) => {
  if (shoppingCart.length > 0) {
    return (
      <div className="order-info-section-container">
        {Array.isArray(shoppingCart) &&
          shoppingCart.map((item, index) => {
            return (
              <div className="order-info-section">
                <div className="product-section">
                  <div className="product-details-section">
                    <img
                      className="product-image"
                      src={item.image}
                      alt="product-img"
                    />
                    <div className="product-details">
                      <div className="product-name">
                        <b>Product:</b> {item.title}
                      </div>
                      <div className="product-id">
                        <b>ID:</b> {item.id}
                      </div>
                      <div className="product-rating">
                        <b>Rating:</b> {item?.rating?.rate}
                      </div>
                      <button
                        className="remove-btn  valign-wrapper vcenter"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove from Cart
                        <ShoppingCartOutlined style={{ height: "18px" }} />
                      </button>
                    </div>
                  </div>
                  <div className="price-details">
                    <div className="product-amount-container">
                      <button
                        className="change-item-count-btn"
                        onClick={() => increaseCount(item.id)}
                      >
                        <Add />
                      </button>
                      <div className="product-count">{item.count ?? 1}</div>
                      <button
                        className="change-item-count-btn"
                        onClick={() => decreaseCount(item.id)}
                        disabled={item.count && item?.count <= 1 ? true : false}
                      >
                        <Remove />
                      </button>
                    </div>
                    <div className="product-total-price">
                      $ {fixTillSecondDecimal((item.count ?? 1) * item.price)}
                    </div>
                  </div>
                </div>
                <hr className="horizontal-line" />
              </div>
            );
          })}
      </div>
    );
  }

  return null;
};

export default OrderInfoSection;
