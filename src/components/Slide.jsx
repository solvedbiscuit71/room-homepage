import React, { useState } from 'react';

function Slide(props) {
  const [slide,changeSlide] = useState(1)
  const handleClick = (operation) => {
    switch (operation) {
      case "+":
        if (slide + 1 < 4) {
          changeSlide(slide + 1)
        }else {
          changeSlide(1)
        }
        break;
      case "-":
        if (slide - 1 > 0) {
          changeSlide(slide - 1)
        }else {
          changeSlide(3)
        }
        break;
    }
  }

  return (
    <div className="slide" style={{backgroundImage: `url("images/slide/${props.isDesktop ? "desktop" : "mobile"}-${slide}.jpg")`}}>
      {/* Note: the image will be set using background-image */}

      <div className="slide-btn">
        <div onClick={() => handleClick("-")}><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd"/></svg></div>
        <div onClick={() => handleClick("+")}><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd"/></svg></div>
      </div>
    </div>
  );
}

export default Slide;