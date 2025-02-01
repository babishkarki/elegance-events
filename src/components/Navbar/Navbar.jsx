import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import "../../styles/theme.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", target: "hero" },
    { name: "Services", target: "services" },
    { name: "Gallery", target: "gallery" },
    { name: "Contact", target: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to close menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <span className={styles.logoPrimary}>Elegance</span>
          <span className={styles.logoSecondary}>Events</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className={`${styles.menuToggle} ${isMenuOpen ? styles.active : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburger}></span>
        </button>

        {/* Navigation Links */}
        <div
          className={`${styles.navWrapper} ${isMenuOpen ? styles.active : ""}`}
        >
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.target}>
                <ScrollLink
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={styles.navLink}
                  activeClass={styles.active}
                  onClick={closeMenu} // Close menu when a link is clicked
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={styles.ctaButton}
            onClick={closeMenu} // Close menu when clicking CTA
          >
            Book Now
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
