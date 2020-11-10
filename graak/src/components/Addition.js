import React from "react";
import { Component } from 'react';
class Addition extends Component {
    
    render() { 
        return (
            <div className="Addition">
                <p>Additon Game</p>
                <div>
                <Link to="/Login"> Logout </Link>
                <Link to="/StudentView"> Student Home </Link>
                <Link to="/TeacherView">Teacher View</Link>
                </div>
            </div>
        );
    }
}
export default Addition;