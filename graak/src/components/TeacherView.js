import React, { Component } from "react";
import { Link } from "react-router-dom";

class TeacherView extends Component {
  render() {
    return (
      <div>
        {/*  */}
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="Styles/style.css" type="text/css" rel="stylesheet" />
        <nav id="temp">
          {" "}
          {/* Temporary, for dev use only */}
          <Link to="/Login"> Login </Link>
          <Link to="/StudentHome"> Student Home </Link>
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
                <h1> Teacher Name </h1>
              </div>
              <div className="row justify-content-center">
                <h2> Class Score: </h2> <h3> #### </h3>
              </div>
            </div>
            <div className="col-xs-10 col-md-3 text-center">
              {" "}
              {/* company name */}
              <img className="icon" src="Logos/GRAAK-logo-temp.png" />
            </div>
          </div>
        </div>
        <div className="container">
          {" "}
          {/* for the links to stuff */}
          <div className="row">
            <div className="col-xs-8 col-sm-6 tile bg-primary">
              {" "}
              {/* Students' Progress */}
              <div className="row">
                <div className="col">
                  {/* intentionally left blank for formatting */}
                </div>
                <div className="col-3">
                  {" "}
                  {/* Icon */}
                  <img className="icon" src="Icons/progress.png" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1 className="text-light"> Students' Progress </h1>
                </div>
              </div>
            </div>
            <div className="col-xs-8 col-sm-6 tile bg-primary">
              {" "}
              {/* Edit Problems */}
              <div className="row">
                <div className="col">
                  {/* intentionally left blank for formatting */}
                </div>
                <div className="col-3">
                  {" "}
                  {/* Icon */}
                  <img className="icon" src="Icons/pencil.png" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1 className="text-light"> Edit Problems </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-8 col-sm-6 tile bg-primary">
              {" "}
              {/* Create Student */}
              <div className="row">
                <div className="col">
                  {/* intentionally left blank for formatting */}
                </div>
                <div className="col-3">
                  {" "}
                  {/* Icon */}
                  <img className="icon" src="Icons/add-person.png" />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h1 className="text-light"> Create Student </h1>
                </div>
              </div>
            </div>
            <div className="col-xs-8 col-sm-6 tile bg-primary">
              {" "}
              {/* Profile */}
              <div className="row">
                <div className="col">
                  {/* intentionally left blank for formatting */}
                </div>
                <div className="col-3">
                  {" "}
                  {/* Icon */}
                  <img className="icon" src="Icons/person-bow.png" />
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
              </a>{" "}
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

export default TeacherView;
