import React, {Component} from 'react';
import './Input.css'

export default class Input extends Component {
    constructor(props) {
        super(props);

        this.onEncodeClick = this.onEncodeClick.bind(this);
        this.onDecodeClick = this.onDecodeClick.bind(this);
    }

    onEncodeClick() {
        this.props.onClickButton('encode');
    }

    onDecodeClick() {
        this.props.onClickButton('decode');
    }

    render() {
        return (
            <div className='input-wrapper'>
                <div className='button-wrapper'>
                    <button className='input-button' onClick={this.onEncodeClick}>
                        {this.props.encodeButtonTitle}
                    </button>
                    <button className='input-button' onClick={this.onDecodeClick}>
                        {this.props.decodeButtonTitle}
                    </button>
                </div>
                <textarea className='input-value' value={this.props.inputValue} onChange={this.props.setInputValue}/>
            </div>
        )
    }
}

