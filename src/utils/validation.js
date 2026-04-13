/**
 * Validation utility functions
 */

export const validateEmail = email => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = phone => {
  // Basic phone validation (10 digits)
  const re = /^\+?[\d\s-]{10,}$/;
  return re.test(phone);
};

export const validateRequired = value => {
  return value && value.trim().length > 0;
};

export const validateMinLength = (value, minLength) => {
  return value && value.length >= minLength;
};

export const validateMaxLength = (value, maxLength) => {
  return value && value.length <= maxLength;
};

/**
 * Validate booking form
 */
export const validateBookingForm = values => {
  const errors = {};

  // Name validation
  if (!validateRequired(values.name)) {
    errors.name = 'Name is required';
  } else if (!validateMinLength(values.name, 2)) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!validateRequired(values.email)) {
    errors.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  if (!validateRequired(values.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(values.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  return errors;
};
