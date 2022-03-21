function Slide(props) {
  return (
    <div className="slide">
      {/* Note: the image will be set using background-image */}

      <div className="slide-btn">
        <div><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg></div>
        <div><svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fill-rule="evenodd"/></svg></div>
      </div>
    </div>
  );
}

export default Slide;