import React from "react";
import { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

class StudentHome extends Component {
  render() {
    return (
      <div>
        {/*  */}
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="./Styles/style.css" type="text/css" rel="stylesheet" />
        <nav id="temp">
          {" "}
          {/* Temporary, for dev use only */}
          <Link to="/Login"> Login </Link>
          <Link to="/StudentView"> Student Home </Link>
          <Link to="/TeacherView">Teacher View</Link>
          <p> this is just for developer's use </p>
        </nav>
        <div className="container-fluid">
          {" "}
          {/* For the header content, including logos, names, and avatar */}
          <div className="row">
            {" "}
            {/* Holds app name, username, and company name */}
            <div className="col-xs-10 col-md-3 text-center">
              {" "}
              {/* Software name */}
              <h1 style={{ color: "ForestGreen" }}>
                Arith<span style={{ color: "red" }}>mania</span>
              </h1>
            </div>
            <div className="col">
              {" "}
              {/* Student name, current total score */}
              <div className="row justify-content-center">
                <h1> Student Name </h1>
              </div>
              <div className="row justify-content-center">
                <h2> Current Score: </h2> <h3> #### </h3>
              </div>
            </div>
            <div className="col-xs-10 col-md-3 text-center">
              {" "}
              {/* company name */}
              <img
                className="icon"
                src="./Logos/GRAAK-logo-temp.png"
                alt="Graak Logo"
              />
            </div>
          </div>
          <div className="row"> {/* holds avatar picture */}</div>
        </div>
        <div className="container">
          {" "}
          {/* for the links to stuff */}
          <div className="row">
            <div className="col-xs-8 col-sm-6 tile bg-primary">
              {" "}
              {/* Addition */}
              <div className="row">
                <div className="col">
                  {/* intentionally left blank for formatting */}
                </div>
                <div className="col-3">
                  {" "}
                  {/* Icon */}
                  <img className="icon" src="./Icons/add.png" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1 className="text-light"> Addition </h1>
                </div>
              </div>
            </div>
            <div className="col-xs-8 col-sm-6 tile bg-primary">
              {" "}
              {/* Subtration */}
              <div className="row">
                <div className="col">
                  {/* intentionally left blank for formatting */}
                </div>
                <div className="col-3">
                  {" "}
                  {/* Icon */}
                  <img className="icon" src="./Icons/subtract.png" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1 className="text-light"> Subtraction </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-8 col-sm-6 tile bg-primary">
              {" "}
              {/* Matching game */}
              <div className="row">
                <div className="col">
                  {/* intentionally left blank for formatting */}
                </div>
                <div className="col-3">
                  {" "}
                  {/* Icon */}
                  <img className="icon" src="./Icons/search.png" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1 className="text-light"> Matching </h1>
                </div>
              </div>
            </div>
            <div className="col-xs-8 col-sm-6 tile bg-primary">
              {" "}
              {/* Avatar and profile */}
              <div className="row">
                <div className="col">
                  {/* intentionally left blank for formatting */}
                </div>
                <div className="col-3">
                  {" "}
                  {/* Icon */}
                  <img className="icon" src="./Icons/person-bow.png" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1 className="text-light"> My Profile </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          {" "}
          {/* For the legal stuff */}
          <div>
            {" "}
            {/* Icon attribution */}
            <p>
              Icons made by{" "}
              <a
                href="https://www.flaticon.local/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>
              from{" "}
              <a href="https://www.flaticon.local/" title="Flaticon">
                www.flaticon.local
              </a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default StudentHome;
