import { NavLink } from "react-router-dom";

import "../styles/mainPagesStyles.css";
// import logo from "../assets/Logo.svg";
import facebookLogo from "../assets/socialmediaLogos/facebooklogo.png";
import instagramLogo from "../assets/socialmediaLogos/instagramlogo.png";
import tiktokLogo from "../assets/socialmediaLogos/tiktoklogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerLeft">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/flavors">EXPLORE FLAVORS</NavLink>
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
{/* 
      <div className="footerCenter">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div> */}

      <div className="footerRight">
        <ul className="socialMediaLink">
          <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <img src={facebookLogo} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <img src={instagramLogo} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
              <img src={tiktokLogo} alt="TikTok" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;