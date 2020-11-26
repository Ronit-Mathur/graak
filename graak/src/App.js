import React from "react";
import "./Styles/App.css";
import LandingPage from "./components/LandingPage";
import TeacherView from "./components/TeacherView";
import stuhome from "./components/stuhome";
import Login from "./components/Login";
import Addition from "./components/Addition";
import { AuthProvider } from "react-use-auth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth0CallbackPage from "./Pages/auth0_callback";

function App() {
  return (
    <AuthProvider
      navigate={Route}
      auth0_domain="dev-99m-5i6q.us.auth0.com"
      auth0_client_id="0qvOukTZiJyM74Hec6l5NzIxjbDshujc"
    >
      <div className="App">
        <Route path="/" component={LandingPage} />
        <Route path="/Login" component={Login} />
        <Route path="/StudentView" component={stuhome} />
        <Route path="/TeacherView" component={TeacherView} />
        <Route path="/AdditionGame" component={Addition} />
        <Route path="/auth0_callback" component={Auth0CallbackPage} />
      </div>
    </AuthProvider>
  );
}

export default App;
