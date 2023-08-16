import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

import { setPage } from "../../store/actions";
import { PAGES } from "../../utils/types";

import "./styles.scss";

const Navbar = () => {
  const dispatch = useDispatch();

  const shoppingCart = useSelector(
    (reducerData: any) => reducerData.data.shoppingCart
  );
  const cartLength = shoppingCart.length;

  const redirectToCartPage = () => {
    dispatch((setPage(PAGES.CART_PAGE) as unknown) as AnyAction);
  };

  const redirectToLandingPage = () => {
    dispatch((setPage(PAGES.LANDING_PAGE) as unknown) as AnyAction);
  };

  return (
    <div className="navbar-container ">
      <div className="wrapper valign-wrapper vspace-between">
        <div className="left-section valign-wrapper ">
          <div className="logo fw500" onClick={redirectToLandingPage}>
            INTUIT CRAFT.
          </div>
        </div>
        <div className="right-section">
          <div className="menu-items" onClick={redirectToCartPage}>
            <Badge
              badgeContent={cartLength > 9 ? "+9" : cartLength}
              color="primary"
            >
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
