import React from "react";

const Title = () => {
  console.log("1-title");
  return (
    <>
      <div>My app</div>
      <hr />
    </>
  );
};

export default React.memo(Title);
