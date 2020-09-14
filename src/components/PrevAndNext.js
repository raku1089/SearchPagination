import React from "react";

const PrevAndNext = (props) => {
  return (
    <div>
      <button
        onClick={props.handleClick}
        value={props.value}
        disabled={props.isDisabled}
      >
        {props.btnName}
      </button>
    </div>
  );
};
PrevAndNext.defaultProps = {
  isDisabled: false,
};

export default PrevAndNext;
