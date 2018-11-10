import React, {Component} from 'react';
import './Output.css';
import base64 from 'base64-utf8'
import md5 from 'md5/md5';
import sha256 from 'sha256'
import SHA512 from 'js-sha512';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ReactTooltip from 'react-tooltip'

const NOT_SUPPROPT = 'Not Support';
const ENCODING_STRATEGY = {
    Base64: (value) => base64.encode(value),
    URL: (value) => encodeURIComponent(value),
    MD5: (value) => md5(value),
    SHA256: (value) => sha256(value),
    SHA512: (value) => SHA512.sha512(value),
};
const DECODING_STRATEGY = {
    Base64: (value) => base64.decode(value),
    URL: (value) => decodeURIComponent(value),
    MD5: () => NOT_SUPPROPT,
    SHA256: () => NOT_SUPPROPT,
    SHA512: () => NOT_SUPPROPT
};

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
            result = NOT_SUPPROPT;
        }
        return result;
    }

    decode(input) {
        let result = '';
        try {
            result = DECODING_STRATEGY[this.props.name](input);
        } catch (e) {
            result = NOT_SUPPROPT;
        }
        return result;
    }

    copyToClipboard(event) {
        if (event.target.value) {
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