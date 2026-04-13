import { Helmet } from 'react-helmet-async';
import Card from '../components/common/Card';
import styles from './About.module.css';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | FOSSEE Workshop Booking</title>
        <meta
          name="description"
          content="Learn about FOSSEE and our mission to promote free and open source software in education"
        />
      </Helmet>

      <div className="container">
        <h1>About FOSSEE</h1>

        <div className={styles.content}>
          <Card padding="large">
            <h2>Our Mission</h2>
            <p>
              FOSSEE (Free and Open Source Software for Education) is a project
              promoting the use of FOSS tools to improve the quality of
              education in our country. We aim to reduce dependency on
              proprietary software in educational institutions.
            </p>
          </Card>

          <Card padding="large">
            <h2>What We Do</h2>
            <p>
              We conduct workshops, create learning resources, and provide
              support for students and educators transitioning to open source
              software. Our workshops cover a wide range of topics including
              programming, data science, web development, and more.
            </p>
          </Card>

          <Card padding="large">
            <h2>Why Open Source?</h2>
            <ul className={styles.benefitsList}>
              <li>Free to use and distribute</li>
              <li>Transparent and secure</li>
              <li>Community-driven development</li>
              <li>Encourages learning and innovation</li>
              <li>No vendor lock-in</li>
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;
