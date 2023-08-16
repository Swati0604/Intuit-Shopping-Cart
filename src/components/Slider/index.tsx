import { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

import { sliderItems } from "../../utils/constants";
import { SliderProps } from "../../utils/types";

import "./styles.scss";

const Slider = (props: SliderProps) => {
  const { handleShopNowClick } = props;
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction: string) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider-container">
      <div className="arrow left-arrow" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>
      <div
        className="wrapper"
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            className="slide"
            style={{ backgroundColor: item.bg }}
            key={item.id}
          >
            <div className="img-container">
              <img src={item.img} className="img-style" alt="slide" />
            </div>
            <div className="slide-info-container">
              <div className="slide-title">{item.title}</div>
              <div className="slide-desc">{item.desc}</div>
              <button className="slide-button" onClick={handleShopNowClick}>
                SHOW NOW
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow right-arrow" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
