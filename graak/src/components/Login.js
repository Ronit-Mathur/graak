import React from "react";
import "../Styles/Login.css";
import axios from "axios";
import { Component, useState } from "react";
import { API_BASE_URL, ACCESS_TOKEN_NAME } from "../Constants/apiConstants";
import { Link } from "react-router-dom";

function Login(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();

    sendDetailsToServer();
  };

  const handleStViewClick = (e) => {
    e.preventDefault();
  };

  const sendDetailsToServer = () => {
    if (state.username.length && state.password.length) {
      // props.showError(null); // showError doesnt exist?? -- Figure out replacement
      const payload = {
        username: state.username,
        password: state.password,
      };
      axios
        .post(API_BASE_URL + "/user/login", payload)
        .then(function (response) {
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage: "Login successful. Redirecting..",
            }));
            redirectToLogin(); // Change for user page?
            props.showError(null);
          } else {
            props.showError("An Error Occured");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      props.showError("Please enter a valid username and password");
    }
  };

  // Future use - copy for registration page
  const redirectToHome = () => {
    props.updateTitle("LandingPage");
    props.history.push("/LandingPage");
  };

  const redirectToLogin = () => {
    props.updateTitle("Login");
    props.history.push("/login");
  };

  return (
    <div className="Login">
      <p>Login</p>
      <div>
        <form action="/action_page.php">
          <label>Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={state.username}
            placeholder="Username ..."
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="text"
            id="password"
            name="password"
            value={state.password}
            placeholder="***********"
            onChange={handleChange}
          />
          <input type="submit" value="Submit" onClick={handleSubmitClick} />
          <Link to="/StudentView"> Student Home </Link>
          <button
            type="studentview"
            value="Student View"
            onClick={handleStViewClick}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
