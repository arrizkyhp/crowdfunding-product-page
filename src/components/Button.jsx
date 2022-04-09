import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const className = [props.className];
  if(props.isButton) className.push("font-medium text-white rounded-full");
  if(props.isPrimary) className.push("bg-blue-button-primary hover:bg-blue-button-hover  transition ease-in-out duration-300")
  if(props.isSmall) className.push("text-sm md:text-base py-4 px-10 ")
  if(props.isMedium) className.push("text-sm md:text-base py-3 px-6  md:py-3 md:px-8")
  if(props.isBig) className.push("text-base md:text-lg py-4 px-10")
  if(props.isDisabled) className.push("bg-slate-300  cursor-not-allowed")

  const onClick = () => {
    if(props.onClick) props.onClick()
  }

  return <button 
      className={`${className.join(" ")}`}
      onClick={onClick}
    >
      {props.children}
  </button>;
};

Button.propTypes = {
  onClick: PropTypes.func,
  isButton: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isBig: PropTypes.bool,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,

}

export default Button;
