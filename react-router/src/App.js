import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import PostItem from "./components/PostItem";

const App = () => {
  return (
    // HashRouter - Handles routes in a different way
    // MemoryRouter - Everything happens on memory
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          {/* <Redirect from="/profile" to='/'/> */}
          <Route path="/posts/:id" exact component={PostItem} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/" exact component={Home} />
          <Route
            render={() => {
              <h3>Oops page not found</h3>;
            }}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
