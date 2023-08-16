import { Send } from "@material-ui/icons";

import "./styles.scss";

const Newsletter = () => {
  return (
    <div className="newletter-container">
      <div className="title">Newsletter</div>
      <div className="desc">
        Get timely updates from your favorite products.
      </div>
      <div className="input-container">
        <input type="email" placeholder="Your email" className="input" />
        <button className="button">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
