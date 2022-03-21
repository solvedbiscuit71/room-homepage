function Slide(props) {
  return (
    <div className="slide">
      {/* Note: the image will be set using background-image */}

      <div className="slide-btn">
        <img src="images/svg/angle-left" alt="left slide" />
        <img src="images/svg/angle-right" alt="right slide" />
      </div>
    </div>
  );
}

export default Slide;