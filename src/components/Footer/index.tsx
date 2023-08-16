import { Link } from "react-router-dom";

import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter
} from "@material-ui/icons";

import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-section">
        <div className="logo">INTUIT CRAFT.</div>
        <div className="desc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </div>
      </div>
      <div className="right-section">
        <div className="title">Contact</div>
        <div className="contact-item">
          <Room className="contact-icon" /> EcoSpace, Intuit Campus 8 , Campus
          4A , Campus 6A, Pritech Rd, Adarsh Palm Retreat, Bellandur, Bengaluru,
          Karnataka 560103
        </div>
        <div className="contact-item">
          <Phone className="contact-icon" /> 7206607070
        </div>
        <div className="contact-item">
          <MailOutline className="contact-icon" /> swatijha.dev@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
