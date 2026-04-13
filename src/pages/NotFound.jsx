import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | FOSSEE Workshop Booking</title>
      </Helmet>

      <div className="container">
        <div className={styles.notFound}>
          <h1 className={styles.title}>404</h1>
          <h2>Page Not Found</h2>
          <p className={styles.message}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button size="large">Go to Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
