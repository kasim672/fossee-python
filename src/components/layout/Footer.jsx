import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

/**
 * Footer Component
 * Site footer with links and information
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>FOSSEE Workshops</h3>
            <p className={styles.footerText}>
              Free and Open Source Software for Education and Research
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/workshops">Workshops</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Contact</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a href="mailto:contact@fossee.in">contact@fossee.in</a>
              </li>
              <li>
                <a
                  href="https://fossee.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fossee.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} FOSSEE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
