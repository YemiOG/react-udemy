import React, { Component } from "react";
import { MyContext } from "../context";
import UserItem from "./userItem";

class User extends Component {
  static contextType = MyContext;
  render() {
    return <UserItem />;
  }
}

export default User;
