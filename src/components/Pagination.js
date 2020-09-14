import React from "react";
import "../App.css";
import PrevAndNext from "./PrevAndNext";

const Pagination = (props) => {
  const { current, total, maxVisiblePages, handlePageChange } = props;
  const clicked = (e) => {
    console.log(e, "e printed nav page");
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
      />

      {[...Array(Math.floor(total / maxVisiblePages))].map((pageNumber, i) => {
        const key = `${pageNumber} -${i}`;
        console.log(pageNumber, i, "pageNumber");
        return (
          <PrevAndNext
            value={i}
            key={key}
            handleClick={() => clicked(i + 1)}
            btnName={i + 1}
          />
        );
      })}
      <PrevAndNext
        handleClick={() => clicked(current + 1)}
        isDisabled={current === total.length}
        btnName="Next"
        value={current + 1}
      />
    </div>
  );
};
// counter needs to show based on data lensth and interval
export default Pagination;
