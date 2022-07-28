import React, { useState, useEffect } from "react";

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
  const [VariantBasedClass, setVariantBasedClass] = useState("");

  useEffect(() => {
    switch (variant) {
      case "primary":
        setVariantBasedClass(
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        );
        break;
      default:
        setVariantBasedClass(
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        );
    }
  }, []);

  return (
    <button
      {...rootDOMAttributes}
      className={`${className} ${VariantBasedClass} flex flex-row justify-center items-center rounded-2xl`}
    >
      {iconSrc && iconPositon === 0 ? (
        <img
          className={`w-${iconWidth} h-${iconWidth} ${iconStyles} mx-1`}
          src={iconSrc}
          alt="btn-icon"
        />
      ) : (
        ""
      )}
      {buttonText ? <p className={` ${textStyle} my-1 `}>{buttonText}</p> : ""}
      {iconSrc && iconPositon === 1 ? (
        <img
          className={`w-${iconWidth} h-${iconWidth} ${iconStyles} `}
          src={iconSrc}
          alt="btn-icon"
        />
      ) : iconSrc && isLoading ? (
        <img
          className={`w-${iconWidth} h-${iconWidth} ${iconStyles} animate-spin `}
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
