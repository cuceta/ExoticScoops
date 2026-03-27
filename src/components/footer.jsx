import { NavLink } from "react-router-dom";

import "../styles/mainPagesStyles.css";
import logo from "../assets/Logo.svg";
import facebookLogo from "../assets/socialmediaLogos/facebooklogo.png";
import instagramLogo from "../assets/socialmediaLogos/instagramlogo.png";
import tiktokLogo from "../assets/socialmediaLogos/tiktoklogo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
  <div className="footerLeft">
    <ul>
      <li>
          <NavLink to="/shop">SHOP</NavLink>
        </li>
        <li>
          <NavLink to="/locations">LOCATIONS</NavLink>
        </li>
        <li>
          <NavLink to="/aboutUs">ABOUT US</NavLink>
        </li>
        <li>
          <NavLink to="/contactUs">CONTACT US</NavLink>
        </li>
        <li>
          <NavLink to="/citations">CITATIONS</NavLink>
        </li>
    </ul>
  </div>

  <div className="footerCenter">
    <NavLink to="/">
        <img src={logo} alt="Exotic Scoops logo" />
    </NavLink>
  </div>

  <div className="footerRight">
    <ul className="socialMediaLink">
      <li>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebookLogo} alt="Facebook logo" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/?hl=en" target="_blank">
          <img src={instagramLogo} alt="Instagram logo" />
        </a>
      </li>
      <li>
        <a href="https://www.tiktok.com/en/" target="_blank">
          <img src={tiktokLogo} alt="Tiktok logo" />
        </a>
      </li>
    </ul>
  </div>
</footer>
    </>
  );
};

export default Footer;
