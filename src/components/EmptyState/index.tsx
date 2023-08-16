import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { AnyAction } from "redux";

import { setPage } from "../../store/actions";

//utils
import { EmptyStateProps } from "../../utils/types";

//styles
import "./styles.scss";

const EmptyState = (props: EmptyStateProps) => {
  const {
    errorStateImg,
    buttonLink,
    buttonText,
    title,
    subTitle,
    customhandling
  } = props;
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch((setPage(buttonLink) as unknown) as AnyAction);
  };

  return (
    <div className="error-style">
      <div className="img-container valign-wrapper vcenter">
        <img src={errorStateImg} className="not-found" alt="not-found" />
      </div>
      <p className="title center-align">{title}</p>
      <p className="sub-title center-align">{subTitle}</p>
      <button
        onClick={customhandling ?? handleButtonClick}
        className="link-button"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default EmptyState;
