import React from "react";
import { useAuth } from "react-use-auth";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </button>
  );
};

const Nav = () => {
  const { isAuthenticated, login, logout } = useAuth();
  return (
    <nav style={{ marginBottom: "20px" }}>
      <LoginButton>Login</LoginButton>
      <LogoutButton>Log Out</LogoutButton>
      <SignupButton>Sign Up</SignupButton>
    </nav>
  );
};

export default Nav;
