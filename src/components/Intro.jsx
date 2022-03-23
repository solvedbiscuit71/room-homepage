function Intro(props) {
  const data = {
    1: {
      title: "Discover innovative ways to decorate",
      para: `
        We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.
      `
    },
    2: {
      title: "We are available all across the globe",
      para: `
        With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we're in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.
      `
    },
    3: {
      title: "Manufactured with the best materials",
      para: `
        Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.
      `
    }
  }

  return (
    <div className="intro">
      <h1>{data[props.slide].title}</h1>
      <p>{data[props.slide].para}</p>
      <div className="arrow-btn">
        <span>Shop now</span>
        <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fillRule="nonzero"/></svg>
      </div>
    </div>
  );
}

export default Intro;