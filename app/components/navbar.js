import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from 'react-router';


export default class Navbar extends React.Component{

    render(){
        return <nav className="navbar navbar-default">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    Github Issue Viewer
                </Link>
                <ul className="nav navbar-nav navbar-right">
                    <li><a>Viewer</a></li>
                </ul>

            </div>
        </nav>
    }
}
/*
                <a href="/" className="navbar-brand">
                    Github Issue Viewer
                </a>
*/