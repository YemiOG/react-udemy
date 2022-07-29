import React, { useState, useEffect } from "react";
import Post from "./post";

function App({ initialCount }) {
  const [state, setState] = useState({
    count: initialCount,
    user: "Yemi",
  });

  let [posts, setPosts] = useState([
    { name: "Hello world", body: "First thing a programmer writes" },
    { name: "JS is alright", body: "I do not deal with snakes" },
  ]);

  const addOnePost = () => {
    let newPost = {
      name: "PHP is alright",
      body: "Somrthing about PHP",
    };

    setPosts([...posts, newPost]);
  };

  const removePost = () => {
    setPosts([]);
  };
  useEffect(() => {
    console.log("change on state");
  }, [state]);

  useEffect(() => {
    console.log("change on post");
  }, [posts]);
  useEffect(() => {
    console.log("MOUNTED");
  }, []);
  return (
    <>
      <h1>{state.user}</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={() => setState({ ...state, count: state.count + 1 })}>
        Add One +1
      </button>
      <button onClick={() => setState({ ...state, count: state.count - 1 })}>
        Reduce -1
      </button>
      <button onClick={() => setState({ ...state, count: initialCount })}>
        Reset
      </button>

      <hr />

      {posts.map((item, i) => (
        <Post item={item} key={i} />
      ))}

      <button onClick={addOnePost}>Add Post</button>
      <button onClick={removePost}>Remove Post</button>
    </>
  );
}

export default App;
