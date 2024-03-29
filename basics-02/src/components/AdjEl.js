import React from "react";
import { Link } from "react-router-dom";

const AdjEl = () => {
  const ids = [
    { id: "1", name: "Post 1" },
    { id: "2", name: "Post 2" },
    { id: "3", name: "Post 3" },
  ];
  // const list = ids.map((item) => (
  //   <span key={item.id}>
  //     <Link to={item.id}>{item.name}</Link>
  //   </span>
  // ));
  return [
    ids.map((item) => (
      <span key={item.id}>
        <Link to={item.id}>{item.name}</Link>
      </span>
    )),
  ];
};
export default AdjEl;
