import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AnyAction } from "redux";

import {
  addToCart,
  getProductInfo,
  removeFromCart,
  setPage
} from "../../store/actions";

import { PAGES } from "../../utils/types";

import Announcement from "../../components/Announcement";
import BackButton from "../../components/BackButton";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Newsletter from "../../components/Newsletter";
import ProductDescription from "../../components/ProductDescription";

import loader from "../../assets/images/loader.gif";
import Page500 from "../../components/Page500";

const ProductDescriptionPage = () => {
  const dispatch = useDispatch();

  const pageData = useSelector((reducerData: any) => reducerData.data.pageData);

  const { payload: title } = pageData;

  const productList = useSelector(
    (productData: any) => productData.data.productListData
  );

  const shoppingCart = useSelector(
    (productData: any) => productData.data.shoppingCart
  );

  const { data } = productList ?? {};

  const productInfo = useSelector(
    (productData: any) => productData.data.productInfo
  );

  const { data: productInfodata, loading, error } = productInfo;

  useEffect(() => {
    dispatch((getProductInfo(data, title as string) as unknown) as AnyAction);
  }, []);

  const handleBackClick = () => {
    dispatch((setPage(PAGES.PRODUCT_LISTING_PAGE) as unknown) as AnyAction);
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

  if (productInfodata && Object.keys(productInfodata).length > 0) {
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

        <ProductDescription
          shoppingCart={shoppingCart}
          productInfo={productInfodata}
          addToCart={addItemsToCart}
          removeFromCart={removeItemsFromCart}
        />
        <Newsletter />
        <Footer />
      </div>
    );
  }

  return null;
};

export default ProductDescriptionPage;
