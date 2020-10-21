import React from "react";
import "./Styles/App.css";
import LandingPage from "./components/LandingPage";
import stuhome from "./components/stuhome"

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={stuhome} />
      <Route path="/StudentView" component={stuhome}/>
    </div>
  );
}

export default App;
