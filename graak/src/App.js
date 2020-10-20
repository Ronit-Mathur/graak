import React from "react";
import "./Styles/App.css";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" component={LandingPage} />
    </div>
  );
}

export default App;
