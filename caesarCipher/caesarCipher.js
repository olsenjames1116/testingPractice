function convertCode(charCode, unit) {
    let cipheredCode = charCode + unit;

    if(cipheredCode > 122) {
        cipheredCode = cipheredCode - 122;
        cipheredCode = 96 + cipheredCode;
        return cipheredCode;
    }

    return cipheredCode;
}

export default function caesarCipher(string, unit) {
    let cipheredString = '';

    for(let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        charCode = convertCode(charCode, unit);

        cipheredString += String.fromCharCode(charCode);
    }

    return cipheredString;
}