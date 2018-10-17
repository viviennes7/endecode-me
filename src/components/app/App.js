import React, {Component} from 'react';
import './App.css';
import Header from "../header/Header";
import Body from '../body/Body';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Body/>
            </div>
        );
    }
}