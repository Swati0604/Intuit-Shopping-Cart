import { useEffect } from "react";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setPage
} from "../../store/actions";

import { PAGES, ProductData } from "../../utils/types";

import Announcement from "../../components/Announcement";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import OrderSummaryCard from "../../components/OrderSummaryCard";
import OrderInfoSection from "../../components/OrderInfoSection";
import BackButton from "../../components/BackButton";
import EmptyState from "../../components/EmptyState";

import notFound from "../../assets/images/NotFound.svg";

import "./styles.scss";
import Newsletter from "../../components/Newsletter";

const CartPage = () => {
  const dispatch = useDispatch();

  const shoppingCart = useSelector(
    (reducerData: any) => reducerData.data.shoppingCart
  );

  const handleBackClick = () => {
    dispatch((setPage(PAGES.PRODUCT_LISTING_PAGE) as unknown) as AnyAction);
  };

  const removeItemsFromCart = (itemId: number) => {
    dispatch((removeFromCart(itemId) as unknown) as AnyAction);
  };

  const increaseItemCount = (itemId: number) => {
    dispatch((increaseCount(itemId) as unknown) as AnyAction);
  };

  const decreaseItemCount = (itemId: number) => {
    dispatch((decreaseCount(itemId) as unknown) as AnyAction);
  };

  const getTotalPrice = () => {
    const totalPrice = shoppingCart.reduce((acc: number, curr: ProductData) => {
      acc = (curr.count ?? 1) * curr.price + acc;
      return acc;
    }, 0);

    return totalPrice;
  };

  // useEffect(() => {
  //   getTotalPrice(shoppingCart);
  // }, [shoppingCart]);

  const handleCheckoutNow = () => {
    dispatch((setPage(PAGES.CHECKOUT_PAGE) as unknown) as AnyAction);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart-container">
      <Navbar />
      <Announcement />
      <BackButton handleBackClick={handleBackClick} />
      <div className="cart-wrapper">
        <div className="title">YOUR BAG</div>
        <div className="bottom-section">
          {shoppingCart.length > 0 ? (
            <>
              <OrderInfoSection
                shoppingCart={shoppingCart}
                removeFromCart={removeItemsFromCart}
                increaseCount={increaseItemCount}
                decreaseCount={decreaseItemCount}
              />
              <OrderSummaryCard
                subTotal={getTotalPrice()}
                shipppingCharges={5.9}
                checkoutNow={handleCheckoutNow}
              />
            </>
          ) : (
            <EmptyState
              errorStateImg={notFound}
              title="Oopsie! No Item Found In Cart..."
              subTitle="Add Item In Cart"
              buttonText="Back To Product Page"
              buttonLink={PAGES.PRODUCT_LISTING_PAGE}
            />
          )}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CartPage;
