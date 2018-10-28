import React, {Component} from 'react';
import './Input.css'

const ENCODE_BUTTON_TITLE = ['Paste and Encode', 'Encode'];
const DECODE_BUTTON_TITLE = ['Paste and Decode', 'Decode'];

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            encodeButton: ENCODE_BUTTON_TITLE[0],
            decodeButton: DECODE_BUTTON_TITLE[0],
            inputValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let inputValue = event.target.value;
        this.setState({inputValue: inputValue});
        this.changeButtonTitle(inputValue);
    }

    changeButtonTitle(inputValue) {
        if (inputValue === '') {
            this.setState({encodeButton: ENCODE_BUTTON_TITLE[0], decodeButton: DECODE_BUTTON_TITLE[0]});
        } else {
            this.setState({encodeButton: ENCODE_BUTTON_TITLE[1], decodeButton: DECODE_BUTTON_TITLE[1]});
        }
    }

    render() {
        return (
            <div className='input-wrapper'>
                <div className='button-wrapper'>
                    <button className='input-button'>{this.state.encodeButton}</button>
                    <button className='input-button'>{this.state.decodeButton}</button>
                </div>
                <textarea className='input-value' value={this.state.inputValue} onChange={this.handleChange}/>
            </div>
        )
    }
}

