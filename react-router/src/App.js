import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Posts from "./components/posts";
import Profile from "./components/profile";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact component={Home} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/profile" component={Profile} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
