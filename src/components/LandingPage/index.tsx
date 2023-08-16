import { useEffect } from "react";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";

import Announcement from "../../components/Announcement";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import Slider from "../../components/Slider";

import { setPage } from "../../store/actions";

import { PAGES } from "../../utils/types";

const LandingPage = () => {
  const dispatch = useDispatch();

  const handleShopNowClick = () => {
    dispatch((setPage(PAGES.PRODUCT_LISTING_PAGE) as unknown) as AnyAction);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider handleShopNowClick={handleShopNowClick} />
      <Categories handleShopNowClick={handleShopNowClick} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LandingPage;
