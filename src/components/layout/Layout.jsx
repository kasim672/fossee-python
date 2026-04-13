import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

/**
 * Layout Component
 * Main layout wrapper with header and footer
 */
const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
