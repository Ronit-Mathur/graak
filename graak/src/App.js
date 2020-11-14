import React from "react";
import "./Styles/App.css";
import LandingPage from "./components/LandingPage";
import TeacherView from "./components/TeacherView";
import stuhome from "./components/stuhome";
import Login from "./components/Login";
import Addition from "./components/Addition";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={LandingPage} />
      <Route path="/Login" component={Login} />
      <Route path="/StudentView" component={stuhome} />
      <Route path="/TeacherView" component={TeacherView} />
      <Route path="/AdditionGame" component={Addition} />
    </div>
  );
}

export default App;
