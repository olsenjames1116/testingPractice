import caesarCipher from './caesarCipher.js';

test('Caesar cipher returns a string', () => {
    expect(typeof caesarCipher('string')).toBe('string');
})