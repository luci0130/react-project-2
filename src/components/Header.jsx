import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/images/logo.png";

class Header extends Component {
    render() {
        return (
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom align-items-center">
                <a className="d-flex mb-3 mb-md-0 me-md-auto text-dark text-decoration-none" href="#">
                    <img src={logo} height="70"
                         className="d-inline-block align-top" alt=""></img>
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item"><Link className="nav-link active" to="/">Home </Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About </Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login">Login </Link></li>
                </ul>
            </header>
        );
    }
}

export default Header;
