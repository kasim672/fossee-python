import styles from './LoadingSpinner.module.css';

/**
 * Loading Spinner Component
 * Accessible loading indicator
 */
const LoadingSpinner = ({ size = 'medium', centered = true }) => {
  const classNames = [
    styles.spinner,
    styles[size],
    centered && styles.centered,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} role="status" aria-live="polite">
      <div className={styles.spinnerCircle} aria-hidden="true" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
