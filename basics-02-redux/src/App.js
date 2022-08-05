import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
const App = () => {
  return (
    // HashRouter - Handles routes in a different way
    // MemoryRouter - Everything happens on memory
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
