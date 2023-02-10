import capitalize from './capitalize.js';

test('Returns a string', () => {
    expect(capitalize('STRING')).toStrictEqual('STRING');
});

test('Returns a capital letter', () => {
    expect(capitalize('s')).toStrictEqual('S');
});

test('Converts a string to an array and back', () => {
    expect(capitalize('string')).toStrictEqual('STRING');
});