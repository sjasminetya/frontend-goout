import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  title, className, variant, icon,
}) => {
  if (variant === 'icon') {
    return (
      <button className={[className, 'font-medium text-base rounded-[12px] px-6 py-3 flex items-center gap-[10px]'].join(' ')} type="button">
        <img src={icon} alt={title} width={16} height={16} />
        {title}
      </button>
    );
  }

  return (
    <button className={[className, 'font-medium text-base rounded-[12px] px-6 py-3'].join(' ')} type="button">{title}</button>
  );
};

export default Button;

Button.defaultProps = {
  className: '',
  icon: '',
  variant: 'full',
};

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
  icon: PropTypes.string,
};
