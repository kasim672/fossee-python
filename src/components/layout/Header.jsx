import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

/**
 * Header Component
 * Responsive navigation with mobile menu
 */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav} aria-label="Main navigation">
          <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
            <span className={styles.logoText}>FOSSEE</span>
            <span className={styles.logoSubtext}>Workshops</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={styles.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          {/* Navigation links */}
          <ul
            className={`${styles.navList} ${
              mobileMenuOpen ? styles.navListOpen : ''
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/workshops"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
                onClick={closeMobileMenu}
              >
                Workshops
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
                onClick={closeMobileMenu}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
