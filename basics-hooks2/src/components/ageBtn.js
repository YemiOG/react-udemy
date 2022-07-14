import React from "react";

const AgeBtn = ({ handleAge }) => {
  console.log("5-age-BTN");
  return (
    <>
      <button onClick={handleAge}>Increment the age</button>
    </>
  );
};

export default AgeBtn;
