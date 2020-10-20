import React from 'react';
import "../Styles/Login.css"
import { Component } from 'react';

class Login extends Component {
    
    render() {
    return (
        <div className="Login">
        <p>Login</p>
        <div>
        <form action="/action_page.php">
        <label>Username</label>
        <input type="text" id="username" name="username" placeholder="Username ..." />
        <label>Password</label>
        <input type="text" id="password" name="password" placeholder="***********" />
        <input type="submit" value="Submit" />
        </form>
        </div>
        </div>
    );
    }
}

export default Login