import {
  AccountCircle,
  Email,
  ContactMail,
  LocationCity
} from "@material-ui/icons";
import { useState } from "react";

import "./styles.scss";

const CheckoutForm = ({
  handleCheckout,
  payload,
  setPayload
}: {
  handleCheckout: () => void;
  payload: any;
  setPayload: Function;
}) => {
  const handleTextChange = (e: any, payloadLabel: string) => {
    let newPayload = { ...payload };

    console.log(payload, e.target.value, "sdc");

    if (payload[payloadLabel]) {
      newPayload[payloadLabel] = e.target.value;
    } else {
      newPayload = {
        ...payload,
        [payloadLabel]: e.target.value
      };
    }

    setPayload(newPayload);
  };

  return (
    <div className="checkout-form-container">
      <div className="container">
        <form onSubmit={handleCheckout}>
          <div className="valign-wrapper form-container">
            <div className="width50">
              <h3 className="title">Billing Address</h3>
              <div className="input-container">
                <label className="label-style">
                  <AccountCircle className="icon-style" /> Full Name
                </label>
                <input
                  className="input-style"
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Swati Jha"
                  onChange={(e) => handleTextChange(e, "fullName")}
                  required
                />
              </div>
              <div className="input-container">
                <label className="label-style">
                  <Email className="icon-style" /> Email
                </label>
                <input
                  className="input-style"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="swatijha.dev@example.com"
                  onChange={(e) => handleTextChange(e, "email")}
                  required
                />
              </div>
              <div className="input-container">
                <label className="label-style">
                  <ContactMail className="icon-style" /> Address
                </label>
                <input
                  className="input-style"
                  type="text"
                  id="adr"
                  name="address"
                  placeholder="Adarsh Palm Retret, Bangalore"
                  onChange={(e) => handleTextChange(e, "address")}
                  required
                />
              </div>
              <div className="input-container">
                <label className="label-style">
                  <LocationCity className="icon-style" /> City
                </label>
                <input
                  className="input-style"
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Bangalore"
                  onChange={(e) => handleTextChange(e, "city")}
                  required
                />
              </div>

              <div className="valign-wrapper">
                <div className="width50">
                  <div className="input-container">
                    <label className="label-style">State</label>
                    <input
                      className="input-style inline-two-input"
                      type="text"
                      id="state"
                      name="state"
                      placeholder="Karnataka"
                      onChange={(e) => handleTextChange(e, "state")}
                      required
                    />
                  </div>
                </div>
                <div className="width50">
                  <div className="input-container">
                    <label className="label-style ">Zip</label>
                    <input
                      className="input-style inline-two-input"
                      type="text"
                      id="zip"
                      name="zip"
                      placeholder="560024"
                      onChange={(e) => handleTextChange(e, "zip")}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="width50">
              <h3 className="title">Payment</h3>
              <div className="input-container">
                <label className="label-style">Name on Card</label>
                <input
                  className="input-style"
                  type="text"
                  id="cname"
                  name="cardname"
                  onChange={(e) => handleTextChange(e, "nameOnCard")}
                  placeholder="John More Doe"
                />
              </div>
              <div className="input-container">
                <label className="label-style">Card number</label>
                <input
                  className="input-style"
                  type="text"
                  id="ccnum"
                  name="cardnumber"
                  onChange={(e) => handleTextChange(e, "cardnumber")}
                  placeholder="1111-2222-3333-4444"
                />
              </div>
              <div className="input-container">
                <label className="label-style">Exp Month</label>
                <input
                  className="input-style"
                  type="text"
                  id="expmonth"
                  name="expmonth"
                  placeholder="September"
                />
              </div>
              <div className="valign-wrapper">
                <div className="width50">
                  <div className="input-container">
                    <label className="label-style">Exp Year</label>
                    <input
                      className="input-style inline-two-input"
                      type="text"
                      id="expyear"
                      name="expyear"
                      onChange={(e) => handleTextChange(e, "expYear")}
                      placeholder="2028"
                    />
                  </div>
                </div>
                <div className="width50">
                  <div className="input-container">
                    <label className="label-style">CVV</label>
                    <input
                      className="input-style inline-two-input"
                      type="text"
                      id="cvv"
                      name="cvv"
                      onChange={(e) => handleTextChange(e, "cvv")}
                      placeholder="352"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="checkout-btn">Continue to checkout</button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
