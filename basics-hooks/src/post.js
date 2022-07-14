import React, { useEffect } from "react";

const Post = ({ item }) => {
  useEffect(() => {
    console.log("post created");

    return () => {
      console.log("component exit");
    };
  });
  return (
    <div>
      <div>Name: {item.name}</div>
      <div>Body: {item.body}</div>
      <hr />
    </div>
  );
};

export default Post;
