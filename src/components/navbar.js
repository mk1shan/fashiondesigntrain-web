import React, { useState } from "react"
import { Link } from "gatsby"
import * as navbarStyles from "./navbar.module.css"
import LogoImage from "../images/logo-edited.png"; // Import your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={navbarStyles.navbar}>
      <div className={navbarStyles.logo}>
        <img src={LogoImage} alt="Maxi Fashion House Logo" style={{ height: "40px", marginRight: "10px" }} />
        Maxi Fashion House
      </div>
      <div className={navbarStyles.hamburger} onClick={toggleNavbar}>
        <div className={navbarStyles.hamburgerLine}></div>
        <div className={navbarStyles.hamburgerLine}></div>
        <div className={navbarStyles.hamburgerLine}></div>
      </div>
      <ul className={isOpen ? `${navbarStyles.navLinks} ${navbarStyles.active}` : navbarStyles.navLinks}>
      <li class="nav-item nav-link"><a class="nav-link" href="http://www.maxifashionhouse.com">Home</a></li>

      <li class="nav-item nav-link"><a class="nav-link" href="http://www.maxifashionhouse.com/gallery">Gallery</a></li>
                    <li class="nav-item nav-link"><a class="nav-link" href="http://www.maxifashionhouse.com/wedding-frocks">Wedding</a></li>
                    <li class="nav-item nav-link"><a class="nav-link" href="http://www.maxifashionhouse.com/home-coming-frocks">Home Coming</a></li>
                    <li class="nav-item nav-link"><a class="nav-link" href="http://www.maxifashionhouse.com/going-away-frocks">Going Away</a></li>
                    <li class="nav-item nav-link"><a class="nav-link" href="http://www.maxifashionhouse.com/pre-shoot-dresses">Pre-shoot</a></li>
                    <li class="nav-item nav-link"><a class="nav-link" href="http://www.maxifashionhouse.com/contact-us">Contact Us</a></li>
                    <li class="nav-item nav-link"><a class="nav-link" href="http://www.maxifashionhouse.com/login">Login</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;
