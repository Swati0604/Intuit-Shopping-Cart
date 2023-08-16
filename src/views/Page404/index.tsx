import { useNavigate } from "react-router-dom";

//components
import EmptyState from "../../components/EmptyState";

//Images
import Page404Img from "../../assets/images/Page404.svg";

//Utils
import { PAGES } from "../../utils/types";

//styles
import "./styles.scss";

const Page404 = () => {
  const navigate = useNavigate();

  const goBackToHomePage = () => {
    navigate("/");
  };
  return (
    <div className="page404">
      <EmptyState
        errorStateImg={'../../styles/assets/images/Page404.svg'}
        title="Oopsie! Something’s missing..."
        subTitle="What you’re looking for may have been replaces in long term memory."
        buttonText="Back to home"
        buttonLink={PAGES.LANDING_PAGE}
        customhandling={goBackToHomePage}
      />
    </div>
  );
};

export default Page404;
