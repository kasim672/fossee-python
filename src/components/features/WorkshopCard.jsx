import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';
import styles from './WorkshopCard.module.css';

/**
 * WorkshopCard Component
 * Displays workshop information in a card format
 */
const WorkshopCard = ({ workshop }) => {
  const { id, title, description, date, duration, level } = workshop;

  return (
    <Card padding="large" hoverable>
      <div className={styles.card}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <span className={`${styles.badge} ${styles[level.toLowerCase()]}`}>
            {level}
          </span>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaIcon}>📅</span>
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaIcon}>⏱️</span>
            <span>{duration}</span>
          </div>
        </div>

        <div className={styles.actions}>
          <Link to={`/workshops/${id}`}>
            <Button variant="outline" fullWidth>
              View Details
            </Button>
          </Link>
          <Link to={`/workshops/${id}/book`}>
            <Button fullWidth>Book Now</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default WorkshopCard;
