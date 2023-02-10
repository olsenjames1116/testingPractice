import caesarCipher from './caesarCipher.js';

test('Returns a string', () => {
    expect(typeof caesarCipher('word')).toBe('string');
});

test('Converts a string to an array and back to a string', () => {
    expect(typeof caesarCipher('word')).toBe('string');
});

test('Returns a ciphered lowercase string shifted forwards by one letter', () => {
    expect(caesarCipher('abcd', 1)).toBe('bcde');
});

test('Returns a ciphered uppercase string shifted forwards by one letter', () => {
    expect(caesarCipher('ABCD', 1)).toBe('BCDE');
});

test('Returns a ciphered lowercase string shifted forwards by multiple letters', () => {
    expect(caesarCipher('abcd', 5)).toBe('fghi');
});

test('Returns a ciphered uppercase string shifted forwards by multiple letters', () => {
    expect(caesarCipher('ABCD', 5)).toBe('FGHI');
});

test('Returns a ciphered lowercase string shifted backwards by one letter', () => {
    expect(caesarCipher('wxyz', -1)).toBe('vwxy');
});

test('Returns a ciphered uppercase string shifted backwards by one letter', () => {
    expect(caesarCipher('WXYZ', -1)).toBe('VWXY');
});

test('Returns a ciphered lowercase string shifted backwards by multiple letters', () => {
    expect(caesarCipher('wxyz', -3)).toBe('tuvw');
});

test('Returns a ciphered uppercase string shifted backwards by multiple letters', () => {
    expect(caesarCipher('WXYZ', -3)).toBe('TUVW');
});

test('Returns a ciphered lowercase string looping to the front of the alphabet if the end is passed', () => {
    expect(caesarCipher('wxyz', 4)).toBe('abcd');
});

test('Returns a ciphered uppercase string looping to the front of the alphabet if the end is passed', () => {
    expect(caesarCipher('WXYZ', 4)).toBe('ABCD');
});

test('Returns a ciphered lowercase string looping to the back of the alphabet if the front is passed', () => {
    expect(caesarCipher('abcd', -4)).toBe('wxyz');
});

test('Returns a ciphered uppercase string looping to the back of the alphabet if the front is passed', () => {
    expect(caesarCipher('ABCD', -4)).toBe('WXYZ');
});