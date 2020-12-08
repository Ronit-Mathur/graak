import React from "react";
import "./Styles/App.css";
import LandingPage from "./components/LandingPage";
import TeacherView from "./components/TeacherView";
import stuhome from "./components/stuhome";
import Login from "./components/Login";
import AdditionGame from "./components/AdditionGame";
import Subtraction from "./components/Subtraction";
import NumPlaceGame from "./components/NumPlaceGame";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import Auth0CallbackPage from "./Auth/auth0_callback";
import ProtectedRoute from "./Auth/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import SubtractionGame from "./components/SubtractionGame";
import PlacesGame from "./components/PlacesGame";

function App() {
  return (
    <div className="App">
      <Route path="/" component={LandingPage} />
      <Route path="/Login" component={Login} />
      <ProtectedRoute path="/StudentView" component={stuhome} />
      <ProtectedRoute path="/TeacherView" component={TeacherView} />
      <Route path="/AdditionGame" component={AdditionGame} />
      <ProtectedRoute path="/PlacesGame" component={PlacesGame} />
      <ProtectedRoute path="/SubtractionGame" component={SubtractionGame} />
      <ProtectedRoute path="/DecimalGame" component={NumPlaceGame} />
      <ProtectedRoute path="/auth0_callback" component={Auth0CallbackPage} />
    </div>
  );
}

export default App;
