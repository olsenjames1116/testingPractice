import caesarCipher from './caesarCipher.js';

test('Returns a string', () => {
    expect(typeof caesarCipher('word')).toBe('string');
});

test('Converts a string to an array and back to a string', () => {
    expect(typeof caesarCipher('word')).toBe('string');
});

test('Returns a ciphered lowercase string shifted by one letter', () => {
    expect(caesarCipher('abcd', 1)).toBe('bcde');
});