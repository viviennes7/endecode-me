import React, {Component} from 'react';
import './Output.css';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ReactTooltip from 'react-tooltip'
import {ENCODING_STRATEGY, DECODING_STRATEGY, NOT_SUPPORT} from "./ConvertStrategy";

export default class Output extends Component {
    constructor(props) {
        super(props);
        this.outputValue = {};
        this.outputValue[this.props.name] = React.createRef();
        this.state = {result: ''};

        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    componentDidMount() {
        this.props.onRef(this);
    }

    componentWillUnmount() {
        this.props.onRef(undefined);
    }

    convertValue(convertType) {
        let input = this.props.inputValue;
        let result = convertType === 'encode' ?
            this.encode(input) : this.decode(input);

        this.setState({result: result});
    }

    encode(input) {
        let result = '';
        try {
            result = ENCODING_STRATEGY[this.props.name](input);
        } catch (e) {
            result = NOT_SUPPORT;
        }
        return result;
    }

    decode(input) {
        let result = '';
        try {
            result = DECODING_STRATEGY[this.props.name](input);
        } catch (e) {
            result = NOT_SUPPORT;
        }
        return result;
    }

    copyToClipboard(event) {
        let value = event.target.value;
        if (value && value!== NOT_SUPPORT) {
            event.currentTarget.select();
            document.execCommand("copy");
            this.showTooltip();
        }
    }

    showTooltip() {
        let tooltip = this.outputValue[this.props.name].current;
        ReactTooltip.show(tooltip);
    }

    render() {
        return (
            <div className='output-wrapper'>
                <div className='output-title'>{this.props.name}</div>
                <InputGroup>
                    <FormControl ref={this.outputValue[this.props.name]}
                                 className='output-value'
                                 value={this.state.result}
                                 onClick={this.copyToClipboard}
                                 readOnly={true}
                                 data-tip="Copied"
                                 data-event='{click focus}'
                                 as="textarea">
                    </FormControl>
                </InputGroup>
                <ReactTooltip place="bottom"
                              globalEventOff='click'
                              type="dark"
                              delayHide={1000}
                              effect='float'/>
            </div>

        )
    }
}