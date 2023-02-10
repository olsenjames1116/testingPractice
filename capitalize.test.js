import capitalize from './capitalize.js';

test('Returns a string', () => {
    expect(capitalize('STRING')).toStrictEqual('STRING');
});

test('Returns a capital letter', () => {
    expect(capitalize('s')).toStrictEqual('S');
});