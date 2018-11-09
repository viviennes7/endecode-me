import React, {Component} from 'react';
import './Input.css'
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

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
                    <Button variant="dark" className='input-button' onClick={this.onEncodeClick}>
                        {this.props.encodeButtonTitle}
                    </Button>
                    <Button variant="dark" className='input-button' onClick={this.onDecodeClick}>
                        {this.props.decodeButtonTitle}
                    </Button>
                </div>
                <InputGroup>
                    <FormControl as="textarea"
                                 style = {{height: 500}}
                                 value={this.props.inputValue}
                                 onChange={this.props.setInputValue}/>
                </InputGroup>
            </div>
        )
    }
}

