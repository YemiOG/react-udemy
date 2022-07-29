import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import PureComp from "./components/PureComp";
import AdjEl from "./components/AdjEl";
import Profile from "./components/Profile";
import User from "./components/User";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/user" component={User} />
          <Route path="/adjel" component={AdjEl} />
          <Route path="/purecomp" component={PureComp} />
          <Route path="/" component={Home} />

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
