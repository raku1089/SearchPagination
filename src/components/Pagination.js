import React from "react";
import "../App.css";
import PrevAndNext from "./PrevAndNext";

const Pagination = (props) => {
  const { current, total, maxVisiblePages, handlePageChange } = props;
  const clicked = (e) => {
    if (handlePageChange) {
      handlePageChange(e);
    }
  };
  return (
    <div className="pageination">
      <PrevAndNext
        handleClick={() => clicked(current - 1)}
        isDisabled={current <= 1}
        btnName="Prev"
        value={1}
        active={current === 1 && "btnActive"}
      />

      {[...Array(Math.floor(total / maxVisiblePages))].map((pageNumber, i) => {
        const key = `${pageNumber} -${i}`;
        return (
          <PrevAndNext
            value={i}
            key={key}
            handleClick={() => clicked(i + 1)}
            btnName={i + 1}
            active={current - 1 === i ? "btnActive" : ""}
          />
        );
      })}
      <PrevAndNext
        handleClick={() => clicked(current + 1)}
        isDisabled={current === total.length}
        btnName="Next"
        value={current + 1}
        active={current === total.length && "btnActive"}
      />
    </div>
  );
};
export default Pagination;
