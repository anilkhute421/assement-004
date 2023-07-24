import React from "react";

const ButtonComponent = ({ label, onClickHandler }) => {
  return (
    <button onClick={onClickHandler}>
      {label}
    </button>
    
  );
};

export default ButtonComponent;
