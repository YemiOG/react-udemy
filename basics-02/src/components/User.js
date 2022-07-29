import React from "react";

import UserHoc from "../hoc/userHoc";

const User = (props) => {
  console.log(props);
  return <>User</>;
};

export default UserHoc(User, "Hello Vietnam");
