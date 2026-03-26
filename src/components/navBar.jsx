import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";


// <!-- External CSS Style sheet -->
import "../styles/mainPagesStyles.css";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav className={showNav ? "navbar show" : "navbar hide"}>
        <Link to="/" > 
        <img src={logo} alt="Exotic Scoops logo" width="100" height="100" />
      </Link>
      <ul className="navLinks">
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/aboutUs">About Us</Link>
        </li>
        <li>
          <Link to="/contactUs">Contact Us</Link>
        </li>
        <li>
          <Link to="/citations">Citations</Link>
        </li>
      </ul>
      </nav>
    </>
  );
};

export default NavBar;
