import React, { useState, useEffect } from "react";
const PagginationDemo = ({ showPerPage, onPaginationChange }) => {
  console.log({ showPerPage });
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);
  return (
    <>
      <div className="btnDiv">
        <button onClick={() => setCounter(counter + 1)} className="pageBtn">
          1
        </button>
        <button onClick={() => setCounter(counter + 1)} className="pageBtn">
          2
        </button>
      </div>
    </>
  );
};
export default PagginationDemo;
