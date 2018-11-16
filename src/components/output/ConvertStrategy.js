import base64 from 'base64-utf8'
import md5 from 'md5/md5';
import sha256 from 'sha256'
import SHA512 from 'js-sha512';

export const NOT_SUPPORT = 'Not Support';
export const ENCODING_STRATEGY = {
    Base64: (value) => base64.encode(value),
    URL: (value) => encodeURIComponent(value),
    MD5: (value) => md5(value),
    SHA256: (value) => sha256(value),
    SHA512: (value) => SHA512.sha512(value),
};
export const DECODING_STRATEGY = {
    Base64: (value) => base64.decode(value),
    URL: (value) => decodeURIComponent(value),
    MD5: () => NOT_SUPPORT,
    SHA256: () => NOT_SUPPORT,
    SHA512: () => NOT_SUPPORT
};
