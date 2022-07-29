import React from "react";

const CountBtn = ({ handleCount }) => {
  console.log("3-CountBtn");
  return (
    <div>
      <button onClick={handleCount}>Increment the count</button>
    </div>
  );
};

export default CountBtn;
