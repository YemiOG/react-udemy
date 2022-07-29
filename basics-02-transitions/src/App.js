import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// COMPONENTS
import Header from './components/header';
import CssTr from './components/CSStransition';
import Tgroup from './components/Tgroup';
import TransitionComp from './components/Transition';


const App = () => {
  return(
    <BrowserRouter>
      <Header/>
      <div className="container">
        <Switch>
          <Route path="/transition" component={TransitionComp}></Route>
          <Route path="/csstransition" component={CssTr}></Route>
          <Route path="/tgroup" component={Tgroup}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
