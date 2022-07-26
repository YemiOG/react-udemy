import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link> - <Link to="/posts">Posts</Link> -
          <Link
            to={{
              pathname: "/profile",
              hash: "#francis",
              search: "?true=enabled",
            }}
          >
            Profile
          </Link>
          <hr />
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/profile/:posts" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
