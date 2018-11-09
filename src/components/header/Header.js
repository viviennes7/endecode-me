import React, {Component} from 'react';
import './Header.css';
import logo from '../../logo.svg'

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img className="logo" src={logo}/>
                <h2 className="Title">endeCode Me</h2>
            </div>
        );
    }
}