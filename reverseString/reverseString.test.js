import reverseString from './reverseString.js';

test('Returns a string', () => {
    expect(reverseString('s')).toStrictEqual('s');
});

test('Converts a string to an array and back', () => {
    expect(reverseString('s')).toStrictEqual('s');
});

test('Returns a string of one word reversed', () => {
    expect(reverseString('string')).toStrictEqual('gnirts');
});