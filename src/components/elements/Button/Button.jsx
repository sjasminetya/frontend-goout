import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, className }) => {
  return (
    <button className={[className, 'font-medium text-base rounded-[12px] px-6 py-3'].join(' ')} type="button">{title}</button>
  );
};

export default Button;

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};
