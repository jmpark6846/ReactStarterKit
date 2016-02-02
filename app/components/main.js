import React from "react";
import { render } from 'react-dom';
import Navbar from './navbar';

export default class Main extends React.Component{
    render(){
        return <div>
            <Navbar />
            { this.props.children }
        </div>
    }
}