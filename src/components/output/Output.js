import React, {Component} from 'react';
import './Output.css';
import base64 from 'base64-utf8'
import md5 from 'md5/md5';
import sha256 from 'sha256'
import SHA512 from 'js-sha512';

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
    MD5: () => 'Not Support',
    SHA256: () => 'Not Support',
    SHA512: () => 'Not Support'
};

export default class Output extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: ''
        }
    }

    componentDidMount() {
        this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    convertValue(convertType) {
        let input = this.props.inputValue;
        let result = '';

        if (convertType === 'encode') {
            try {
                result = ENCODING_STRATEGY[this.props.name](input);
            } catch (e) {
                result = 'Not Support';
            }
        } else {
            try {
                result = DECODING_STRATEGY[this.props.name](input);
            } catch (e) {
                result = 'Not Support';
            }
        }

        this.setState({result: result});
    }

    render() {
        return (
            <div className='output-wrapper'>
                <div className='output-title'>{this.props.name}</div>
                <textarea className='output-value' value={this.state.result}></textarea>
            </div>
        )
    }
}