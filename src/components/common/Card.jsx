import styles from './Card.module.css';

/**
 * Card Component
 * Flexible container for content with optional hover effects
 */
const Card = ({
  children,
  variant = 'default',
  hoverable = false,
  padding = 'medium',
  className = '',
  onClick,
  ...props
}) => {
  const classNames = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    hoverable && styles.hoverable,
    onClick && styles.clickable,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const Component = onClick ? 'button' : 'div';

  return (
    <Component className={classNames} onClick={onClick} {...props}>
      {children}
    </Component>
  );
};

export default Card;
