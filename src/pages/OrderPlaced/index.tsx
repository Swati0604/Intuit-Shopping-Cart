import { Check } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

import { setPage } from "../../store/actions";
import { PAGES } from "../../utils/types";

import "./styles.scss";

const OrderPlaced = () => {
  const dispatch = useDispatch();

  const goToHomePage = () => {
    dispatch((setPage(PAGES.LANDING_PAGE) as unknown) as AnyAction);
  };

  return (
    <div className="order-placed-card valign-wrapper vcenter">
      <div className="icon-container vcenter valign-wrapper">
        <Check className="checkmark" />
      </div>
      <h4 className="title">Success</h4>
      <p className="sub-title">
        We received your purchase request;
        <br /> we'll be in touch shortly!
      </p>

      <button className="back-to-home-btn " onClick={goToHomePage}>
        Go To Home Page
      </button>
    </div>
  );
};

export default OrderPlaced;
