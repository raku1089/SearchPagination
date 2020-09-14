import React from "react";
import "../App.css";
const PrevAndNext = (props) => {
  return (
    <>
      <button
        onClick={props.handleClick}
        value={props.value}
        disabled={props.isDisabled}
        className={props.active}
      >
        {props.btnName}
      </button>
    </>
  );
};
PrevAndNext.defaultProps = {
  isDisabled: false,
};

export default PrevAndNext;
