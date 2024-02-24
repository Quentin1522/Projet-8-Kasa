import "../banner/banner.scss";

const Banner = (props) => {

  return (
    <div className="wrapperBanner">
      <div className="bgOpacity" style={{ opacity: props.bgOpacity }}></div>
      <img className="imgBanner" src={props.img} alt="source"/>
      <h1 className="titleBanner">{props.title}</h1>
      <h1 className="titleBannerMobile">{props.titleMobileOne}<br></br>{props.titleMobileTwo}</h1>
    <div className="banner">
    </div>
  </div>
  );
};

export default Banner