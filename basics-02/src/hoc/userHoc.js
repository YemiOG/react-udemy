import React from "react";

const UserHoc = (WrappedComponent, arg1) => {
  return (props) => (
    <>
      {arg1}
      <WrappedComponent {...props} />
    </>
  );
};

export default UserHoc;
