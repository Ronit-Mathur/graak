import React from "react";
import Login from "./Login";
import { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  // LandingPage appears at the top of every rerender ->
  render() {
    return <Link to="/Login">To Login</Link>;
  }
}
export default LandingPage;
