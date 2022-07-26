import React from "react";

const GenericButtonComponent = ({
  variant,
  buttonText,
  className,
  iconPositon,
  iconSrc,
  iconWidth,
  iconStyles,
  textStyle,
  isLoading,
  ...rootDOMAttributes
}) => {
  if (variant) {
  }
  return (
    <button
      {...rootDOMAttributes}
      className={`${className} border border-gray-900`}
    >
      {iconSrc && iconPositon === 0 ? (
        <img
          className={`w-${iconWidth} h-${iconWidth} ${iconStyles} `}
          src={iconSrc}
          alt="btn-icon"
        />
      ) : (
        ""
      )}
      {buttonText ? <p className={` ${textStyle} `}>{buttonText}</p> : ""}
      {iconSrc && iconPositon === 0 ? (
        <img
          className={`w-${iconWidth} h-${iconWidth} ${iconStyles} `}
          src={iconSrc}
          alt="btn-icon"
        />
      ) : iconSrc && isLoading ? (
        <img
          className={`w-${iconWidth} h-${iconWidth} ${iconStyles} animate-spin`}
          src={iconSrc}
          alt="btn-icon"
        />
      ) : (
        ""
      )}
    </button>
  );
};

export default GenericButtonComponent;
