import React, {Component} from 'react';
import './Body.css'
import Input from "../input/Input";
import Output from "../output/Output";

export default class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue : ''
        };
    }

    render() {
        return (
            <div className='Body'>
                <div className='Input'>
                    <Input/>
                </div>
                <div className='Output'>
                    <Output name='Base64'/>
                    <Output name='URL'/>
                    <Output name='MD5'/>
                    <Output name='SHA256'/>
                    <Output name='SHA512'/>
                </div>
            </div>
        )
    }
}
