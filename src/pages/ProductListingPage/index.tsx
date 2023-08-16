import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { AnyAction } from "redux";

import {
  addToCart,
  getProductsList,
  setPage,
  removeFromCart
} from "../../store/actions";

import { PAGES } from "../../utils/types";

import Announcement from "../../components/Announcement";
import BackButton from "../../components/BackButton";
import EmptyState from "../../components/EmptyState";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import ProductList from "../../components/ProductsList";
import Page500 from "../../components/Page500";

import notFound from "../../assets/images/NotFound.svg";
import loader from "../../assets/images/loader.gif";

const ProductListingPage = () => {
  const dispatch = useDispatch();

  const productList = useSelector(
    (reducerData: any) => reducerData.data.productListData
  );

  const shoppingCart = useSelector(
    (reducerData: any) => reducerData.data.shoppingCart
  );

  const { loading, error, data } = productList ?? {};

  const handleNavigate = (itemTitle: string) => {
    dispatch(
      (setPage(
        PAGES.PRODUCT_DISCRIPTION_PAGE,
        itemTitle
      ) as unknown) as AnyAction
    );
  };

  useEffect(() => {
    if (!data.length) {
      dispatch((getProductsList() as unknown) as AnyAction);
    }
  }, []);

  const handleBackClick = () => {
    dispatch((setPage(PAGES.LANDING_PAGE) as unknown) as AnyAction);
  };

  const addItemsToCart = (itemId: number) => {
    dispatch((addToCart(itemId, data) as unknown) as AnyAction);
  };

  const removeItemsFromCart = (itemId: number) => {
    dispatch((removeFromCart(itemId) as unknown) as AnyAction);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(data, 'sjb')

  return (
    <div>
      <Navbar />
      <Announcement />
      <BackButton handleBackClick={handleBackClick} />

      {loading && !error && (
        <div className="loader">
          <img src={loader} alt="loader" />{" "}
        </div>
      )}

      {!loading && error && (
        <div className="loader">
          <Page500 />
        </div>
      )}
      

      {!loading && !error && data.length < 1 ? (
        <EmptyState
          errorStateImg={notFound}
          title="Oopsie! No Item Found..."
          subTitle=""
          buttonText="Back To Home Page"
          buttonLink={PAGES.LANDING_PAGE}
        />
      ) : (
        <ProductList
          productList={data}
          handleNavigate={handleNavigate}
          addToCart={addItemsToCart}
          shoppingCart={shoppingCart}
          removeFromCart={removeItemsFromCart}
        />
      )}

      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductListingPage;
