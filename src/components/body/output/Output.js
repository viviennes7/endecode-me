import React, {Component} from 'react';
import './Output.css'

export default class Output extends Component {
    render() {
        return (
            <div className='output-wrapper'>
                <div className='output-title'>{this.props.name}</div>
                <textarea className='output-value'></textarea>
            </div>
        )
    }
}