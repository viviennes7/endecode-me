import React, {Component} from 'react';
import './Body.css'
import Input from "../input/Input";
import Output from "../output/Output";

const ALGORITHMS = ['Base64', 'URL', 'MD5', 'SHA256', 'SHA512'];

export default class Body extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        };

        this.setInputValue = this.setInputValue.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
        this.output = {};
    }

    onClickButton(convertType) {
        ALGORITHMS.forEach(algorithm =>
            this.output[algorithm].convertValue(convertType)
        );
    }

    setInputValue(event) {
        let inputValue = event.target.value;
        this.setState({inputValue: inputValue});
    }

    render() {
        return (
            <div className='Body'>
                <div className='Input'>
                    <Input setInputValue={this.setInputValue}
                           onClickButton={this.onClickButton}/>
                </div>
                <div className='Output'>
                    <div className='output-space'></div>
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
