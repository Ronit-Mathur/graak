import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Auth0CallbackPage from "./auth0_callback";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Auth0CallbackPage />,
    })}
    {...args}
  />
);

export default ProtectedRoute;
