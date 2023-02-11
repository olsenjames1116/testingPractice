// Reverses a given string
export default function reverseString(string) {
    const stringArray = string.split('');
    let reversedArray = [];

    for(let i = 0; stringArray.length > 0; i++) {
        reversedArray[i] = stringArray.pop();
    }

    return reversedArray.join('');
}