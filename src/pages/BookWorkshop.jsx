import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import styles from './BookWorkshop.module.css';

const BookWorkshop = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setLoading(false);
    alert('Booking successful! You will receive a confirmation email.');
    navigate('/workshops');
  };

  return (
    <>
      <Helmet>
        <title>Book Workshop | FOSSEE Workshop Booking</title>
        <meta name="description" content="Register for a FOSSEE workshop" />
      </Helmet>

      <div className="container">
        <div className={styles.bookingContainer}>
          <Card padding="large">
            <h1>Book Workshop</h1>
            <p className={styles.subtitle}>
              Fill in your details to register for this workshop
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone Number <span className={styles.required}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="+91 1234567890"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="institution" className={styles.label}>
                  Institution/Organization
                </label>
                <input
                  type="text"
                  id="institution"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your college or organization"
                />
              </div>

              <div className={styles.formActions}>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate(-1)}
                >
                  Cancel
                </Button>
                <Button type="submit" loading={loading}>
                  Confirm Booking
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BookWorkshop;
