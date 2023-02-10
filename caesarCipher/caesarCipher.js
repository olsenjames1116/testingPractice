export default function caesarCipher(string, unit) {
    let cipheredString = '';

    for(let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        charCode = charCode + unit;

        cipheredString += String.fromCharCode(charCode);
    }

    return cipheredString;
}