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
        <Link to="/Addition" className="LndLink">
          Addition
        </Link>
        <Link to="/AdditionGame" className="LndLink">
          Addition Game
        </Link>
        <Link to="/TeacherView" className="LndLink">
          Teacher View Template
        </Link>
        <Link to="/StudentView" className="LndLink">
          Student View Template
        </Link>
      </div>
    );
  }
}
export default LandingPage;
