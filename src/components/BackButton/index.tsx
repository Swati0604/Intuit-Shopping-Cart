import { ArrowBack } from "@material-ui/icons";

import "./styles.scss";

const BackButton = ({ handleBackClick }: { handleBackClick: () => void }) => {
  return (
    <div className="back-button-section">
      <button className="back-button-container" onClick={handleBackClick}>
        <ArrowBack />
      </button>
    </div>
  );
};

export default BackButton;
