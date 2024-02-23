import logo from "../../assets/LogoWhite.png"
import "../footer/footer.scss";

const Footer = () => {
    return (
        <div className="wrapperFooter">
            <img className="logoFooter" src={logo} alt="logo Kasa"></img>
            <p className="pFooter">© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;