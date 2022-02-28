import React from 'react';

const Button = (props) => {
  const className = [props.className];
  if(props.isButton) className.push("font-medium text-white rounded-full");
  if(props.isPrimary) className.push("bg-blue-button-primary hover:bg-blue-button-hover  transition ease-in-out duration-300")
  if(props.isMedium) className.push("text-sm md:text-base py-4 px-8 ")
  if(props.isBig) className.push("text-base md:text-lg py-4 px-10")
  if(props.isDisabled) className.push("bg-slate-300  cursor-not-allowed")

  return <button 
      className={`${className.join(" ")}`}
    >
      {props.children}
  </button>;
};

export default Button;
