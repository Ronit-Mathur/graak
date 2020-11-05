import React from "react";
import "./Styles/App.css";
import LandingPage from "./components/LandingPage";
import TeacherView from "./components/TeacherView";
import stuhome from "./components/stuhome";
import Login from "./components/Login";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={LandingPage} />
      <Route path="/Login" component={Login} />
      <Route path="/StudentView" component={stuhome} />
      <Route path="/TeacherView" component={TeacherView} />
    </div>
  );
}

export default App;
