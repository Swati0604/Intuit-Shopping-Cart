import { useEffect, useState } from "react";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import LandingPage from "../../pages/LandingPage";
import ProductListingPage from "../../pages/ProductListingPage";
import CartPage from "../../pages/CartPage";
import ProductDescriptionPage from "../../pages/ProductDescriptionPage";
import CheckoutPage from "../../pages/CheckoutPage";
import OrderPlaced from "../../pages/OrderPlaced";

import { setPage } from "../../store/actions";

import { PAGES } from "../../utils/types";
import "./styles.scss";

const Home = () => {
  const dispatch = useDispatch();

  const pageData = useSelector((reducerData: any) => reducerData.data.pageData);

  const { redirectTopage: currentPage } = pageData ?? {};

  useEffect(() => {
    dispatch((setPage(PAGES.LANDING_PAGE) as unknown) as AnyAction);
  }, []);

  switch (currentPage) {
    case PAGES.LANDING_PAGE:
      return <LandingPage />;

    case PAGES.PRODUCT_LISTING_PAGE:
      return <ProductListingPage />;

    case PAGES.PRODUCT_DISCRIPTION_PAGE:
      return <ProductDescriptionPage />;

    case PAGES.CART_PAGE:
      return <CartPage />;

    case PAGES.CHECKOUT_PAGE:
      return <CheckoutPage />;

    case PAGES.ORDER_SUCESS_PAGE:
      return <OrderPlaced />;

    default:
      return <LandingPage />;
  }
};

export default Home;
