import React, {Component} from 'react';
import './Input.css'
import Button from 'react-bootstrap/lib/Button';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    onEncodeClick = () => {
        this.props.onClickButton('encode');
    };

    onDecodeClick = () => {
        this.props.onClickButton('decode');
    };

    render() {
        return (
            <div className='input-wrapper'>
                <div className='button-wrapper'>
                    <Button variant="dark" className='input-button' onClick={this.onEncodeClick}>
                        Encode
                    </Button>
                    <Button variant="dark" className='input-button' onClick={this.onDecodeClick}>
                        Decode
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

