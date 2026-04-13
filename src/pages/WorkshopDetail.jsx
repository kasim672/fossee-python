import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import styles from './WorkshopDetail.module.css';

const WorkshopDetail = () => {
  const { id } = useParams();

  // Mock data - replace with API call
  const workshop = {
    id,
    title: 'Python for Data Science',
    description: 'Learn Python programming and data analysis with pandas, numpy, and matplotlib',
    fullDescription: 'This comprehensive workshop covers Python fundamentals and data science libraries. You will learn data manipulation, visualization, and basic statistical analysis.',
    date: '2026-05-15',
    duration: '3 days',
    level: 'Beginner',
    instructor: 'Dr. Jane Smith',
    prerequisites: 'Basic computer skills',
    topics: [
      'Python basics and syntax',
      'Data structures and algorithms',
      'Pandas for data manipulation',
      'NumPy for numerical computing',
      'Matplotlib for visualization',
    ],
  };

  return (
    <>
      <Helmet>
        <title>{workshop.title} | FOSSEE Workshop Booking</title>
        <meta name="description" content={workshop.description} />
      </Helmet>

      <div className="container">
        <Link to="/workshops" className={styles.backLink}>
          ← Back to Workshops
        </Link>

        <div className={styles.workshopDetail}>
          <div className={styles.mainContent}>
            <h1>{workshop.title}</h1>
            <p className={styles.description}>{workshop.fullDescription}</p>

            <Card padding="large">
              <h2>What You'll Learn</h2>
              <ul className={styles.topicsList}>
                {workshop.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </Card>
          </div>

          <aside className={styles.sidebar}>
            <Card padding="large">
              <h3>Workshop Details</h3>
              <dl className={styles.detailsList}>
                <dt>Date</dt>
                <dd>{new Date(workshop.date).toLocaleDateString()}</dd>
                <dt>Duration</dt>
                <dd>{workshop.duration}</dd>
                <dt>Level</dt>
                <dd>{workshop.level}</dd>
                <dt>Instructor</dt>
                <dd>{workshop.instructor}</dd>
                <dt>Prerequisites</dt>
                <dd>{workshop.prerequisites}</dd>
              </dl>
              <Link to={`/workshops/${id}/book`}>
                <Button fullWidth size="large">
                  Book This Workshop
                </Button>
              </Link>
            </Card>
          </aside>
        </div>
      </div>
    </>
  );
};

export default WorkshopDetail;
