import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | FOSSEE Workshop Booking</title>
        <meta
          name="description"
          content="Book workshops and training sessions with FOSSEE. Learn open source software for education and research."
        />
      </Helmet>

      <div className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            Learn Open Source Software with FOSSEE
          </h1>
          <p className={styles.heroSubtitle}>
            Join our workshops and training sessions to master free and open
            source tools for education and research
          </p>
          <div className={styles.heroActions}>
            <Link to="/workshops">
              <Button size="large">Browse Workshops</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="large">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <section className={styles.features}>
        <div className="container">
          <h2 className="text-center">Why Choose FOSSEE Workshops?</h2>
          <div className={styles.featureGrid}>
            <Card padding="large" hoverable>
              <div className={styles.featureIcon}>📚</div>
              <h3>Expert Instructors</h3>
              <p>
                Learn from experienced professionals passionate about open
                source education
              </p>
            </Card>
            <Card padding="large" hoverable>
              <div className={styles.featureIcon}>💻</div>
              <h3>Hands-on Learning</h3>
              <p>
                Practical workshops with real-world projects and exercises
              </p>
            </Card>
            <Card padding="large" hoverable>
              <div className={styles.featureIcon}>🎓</div>
              <h3>Free Access</h3>
              <p>
                All workshops are free for students and educators
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
