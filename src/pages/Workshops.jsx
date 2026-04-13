import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import styles from './Workshops.module.css';

// Mock data - replace with API call
const workshops = [
  {
    id: 1,
    title: 'Python for Data Science',
    description: 'Learn Python programming and data analysis with pandas, numpy, and matplotlib',
    date: '2026-05-15',
    duration: '3 days',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Web Development with React',
    description: 'Build modern web applications using React and related technologies',
    date: '2026-05-20',
    duration: '5 days',
    level: 'Intermediate',
  },
  {
    id: 3,
    title: 'Machine Learning Basics',
    description: 'Introduction to machine learning concepts and practical implementations',
    date: '2026-06-01',
    duration: '4 days',
    level: 'Intermediate',
  },
];

const Workshops = () => {
  return (
    <>
      <Helmet>
        <title>Workshops | FOSSEE Workshop Booking</title>
        <meta
          name="description"
          content="Browse and book available FOSSEE workshops on various open source technologies"
        />
      </Helmet>

      <div className="container">
        <h1>Available Workshops</h1>
        <p className={styles.subtitle}>
          Explore our upcoming workshops and register for free
        </p>

        <div className={styles.workshopGrid}>
          {workshops.map(workshop => (
            <Card key={workshop.id} padding="large" hoverable>
              <div className={styles.workshopCard}>
                <div className={styles.workshopHeader}>
                  <h2 className={styles.workshopTitle}>{workshop.title}</h2>
                  <span className={styles.levelBadge}>{workshop.level}</span>
                </div>
                <p className={styles.workshopDescription}>
                  {workshop.description}
                </p>
                <div className={styles.workshopMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Date:</span>
                    <span>{new Date(workshop.date).toLocaleDateString()}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Duration:</span>
                    <span>{workshop.duration}</span>
                  </div>
                </div>
                <div className={styles.workshopActions}>
                  <Link to={`/workshops/${workshop.id}`}>
                    <Button variant="outline" fullWidth>
                      View Details
                    </Button>
                  </Link>
                  <Link to={`/workshops/${workshop.id}/book`}>
                    <Button fullWidth>Book Now</Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Workshops;
