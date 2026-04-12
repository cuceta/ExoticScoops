import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "/images/logo.svg";


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
      {/* <!-- advanced HTML5 element ||NAV|| --> */}
      <nav className={showNav ? "navbar show" : "navbar hide"}>
        <NavLink to="/" > 
        <img src={logo} alt="Exotic Scoops logo" width="100" height="100" />
      </NavLink>
      <ul className="navLinks">
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
      </nav>
    </>
  );
};

export default NavBar;
