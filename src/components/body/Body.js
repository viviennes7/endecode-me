import React, {Component} from 'react';
import './Body.css'
import Input from "../input/Input";
import Output from "../output/Output";

const ENCODE_BUTTON_TITLE = ['Paste and Encode', 'Encode'];
const DECODE_BUTTON_TITLE = ['Paste and Decode', 'Decode'];
const ALGORITHMS = ['Base64', 'URL', 'MD5', 'SHA256', 'SHA512'];

export default class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            encodeButton: ENCODE_BUTTON_TITLE[0],
            decodeButton: DECODE_BUTTON_TITLE[0],
            inputValue: ''
        };

        this.setInputValue = this.setInputValue.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
        this.output = [];
    }

    onClickButton(convertType) {
        ALGORITHMS.forEach(algorithm =>
            this.output[algorithm].convertValue(convertType)
        );
    }

    setInputValue(event) {
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
            <div className='Body'>
                <div className='Input'>
                    <Input setInputValue={this.setInputValue}
                           onClickButton={this.onClickButton}
                           encodeButtonTitle={this.state.encodeButton}
                           decodeButtonTitle={this.state.decodeButton}/>
                </div>
                <div className='Output'>
                    {
                        ALGORITHMS.map((algorithm, i) =>
                            <Output inputValue={this.state.inputValue}
                                    onRef={ref => (this.output[algorithm] = ref)}
                                    name={algorithm}
                                    key={i}/>
                        )
                    }
                </div>
            </div>
        )
    }
}
