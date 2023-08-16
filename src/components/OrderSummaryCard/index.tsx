import { fixTillSecondDecimal } from "../../utils/helpers";

import "./styles.scss";

const OrderSummaryCard = ({ subTotal, shipppingCharges, checkoutNow }: any) => {
  const priceWihoutDiscount = subTotal + shipppingCharges;

  const totalPrice = subTotal > 80 ? subTotal : priceWihoutDiscount;

  return (
    <div className="order-summary-card">
      <div className="card-top-section">
        <div className="card-title">ORDER SUMMARY</div>
        <div className="card-summary-section">
          <div className="item-heading">Subtotal</div>
          <div className="item-price">$ {fixTillSecondDecimal(subTotal)}</div>
        </div>
        <div className="card-summary-section">
          <div className="item-heading">Estimated Shipping</div>
          <div className="item-price">
            $ {fixTillSecondDecimal(shipppingCharges)}
          </div>
        </div>
        {subTotal > 80 && (
          <div className="card-summary-section">
            <div className="item-heading">Shipping Discount</div>
            <div className="item-price">
              $ -{fixTillSecondDecimal(shipppingCharges)}
            </div>
          </div>
        )}
        <div className="card-summary-section">
          <div className="item-heading total">Total</div>
          <div className="item-price total">
            $ {fixTillSecondDecimal(totalPrice)}
          </div>
        </div>
      </div>
      <div className="card-bottom-section">
        <button className="checkout-button" onClick={checkoutNow}>
          CHECKOUT NOW
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
