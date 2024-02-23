import "../header/header.scss";
import logo from "../../assets/LOGO.png";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="wrapperHeaders">
      <div className="headers">
        <div className="contentLogo">
          <img className="logo" src={logo} alt="Mon image" />
        </div>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">A Propos</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;