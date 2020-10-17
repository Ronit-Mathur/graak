import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>WebPage Title</h1>
      <Route path="/" component={LandingPage} />
    </div>
  );
}

export default App;
