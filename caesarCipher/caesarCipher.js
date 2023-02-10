function convertLowercase(charCode, unit) {
    let cipheredCode = charCode + unit;

    if(cipheredCode > 122) {
        cipheredCode = cipheredCode - 122;
        cipheredCode = 96 + cipheredCode;
        return cipheredCode;
    }

    if(cipheredCode < 97) {
        cipheredCode = 97 - cipheredCode;
        cipheredCode = 123 - cipheredCode;
        return cipheredCode;
    }

    return cipheredCode;
}

function convertUppercase(charCode, unit) {
    let cipheredCode = charCode + unit;

    if(cipheredCode > 90) {
        cipheredCode = cipheredCode - 90;
        cipheredCode = 64 + cipheredCode;
        return cipheredCode;
    }

    if(cipheredCode < 65) {
        cipheredCode = 65 - cipheredCode;
        cipheredCode = 91 - cipheredCode;
        return cipheredCode;
    }

    return cipheredCode;
}

export default function caesarCipher(string, unit) {
    if(typeof string !== 'string') return 'Error: please pass a string';
    
    let cipheredString = '';

    for(let i = 0; i < string.length; i++) {
        if(!/^[A-Za-z0-9]*$/.test(string.charAt(i))) {
            cipheredString += string.charAt(i);
            continue;
        }

        let charCode = string.charCodeAt(i);

        if(/^[a-z]*$/.test(string.charAt(i))) charCode = convertLowercase(charCode, unit);

        if(/^[A-Z]*$/.test(string.charAt(i))) charCode = convertUppercase(charCode, unit);

        cipheredString += String.fromCharCode(charCode);
    }

    return cipheredString;
}