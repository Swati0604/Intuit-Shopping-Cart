import EmptyState from "../EmptyState";

import Page500Img from "../../assets/images/Page500.gif";

import { PAGES } from "../../utils/types";

import "./styles.scss";

const Page500 = () => {
  return (
    <div className="page500">
      <EmptyState
        errorStateImg={Page500Img}
        title="Sorry it's not you, it's us"
        subTitle="We're fixing the issue, sorry for the inconvenience"
        buttonText="Back to home"
        buttonLink={PAGES.LANDING_PAGE}
      />
    </div>
  );
};

export default Page500;
