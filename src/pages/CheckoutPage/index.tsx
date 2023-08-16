import { useEffect, useState } from "react";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import BackButton from "../../components/BackButton";
import CheckoutForm from "../../components/CheckoutForm";
import Announcement from "../../components/Announcement";

import { emptyShoppingCart, setPage } from "../../store/actions";

import { PAGES } from "../../utils/types";
import Navbar from "../../components/Navbar";

const CheckoutPage = () => {
  const [payload, setPayload] = useState<any>({});

  const dispatch = useDispatch();

  const handleBackClick = () => {
    dispatch((setPage(PAGES.CART_PAGE) as unknown) as AnyAction);
  };

  const handleCheckout = () => {
    if (payload) {
      toast("You have successfully placed order!");
      dispatch((emptyShoppingCart() as unknown) as AnyAction);
      dispatch((setPage(PAGES.ORDER_SUCESS_PAGE) as unknown) as AnyAction);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Announcement />
      <BackButton handleBackClick={handleBackClick} />

      <CheckoutForm
        handleCheckout={handleCheckout}
        payload={payload}
        setPayload={setPayload}
      />

      <ToastContainer />
    </div>
  );
};

export default CheckoutPage;
