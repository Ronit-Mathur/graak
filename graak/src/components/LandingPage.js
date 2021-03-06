import React from "react";
import Login from "./Login";
import { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/LandingPage.css";

class LandingPage extends Component {
  // LandingPage appears at the top of every rerender ->
  render() {
    return (
      <div>
        <Link to="/Login" className="LndLink">
          Login Page
        </Link>
        <Link to="/StudentView" className="LndLink">
          Homepage
        </Link>
        <Link to="/AdditionGame" className="LndLink">
          Addition Game
        </Link>
        <Link to="/SubtractionGame" className="LndLink">
          Subtraction Game
        </Link>
        <Link to="/PlacesGame" className="LndLink">
          Decimal Game
        </Link>
        {/* <Link to="/TeacherView" className="LndLink">
          Teacher View
        </Link> */}
        
      </div>
    );
  }
}
export default LandingPage;
