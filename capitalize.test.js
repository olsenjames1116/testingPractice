import capitalize from './capitalize.js';

test('Returns a string', () => {
    expect(capitalize('string')).toStrictEqual('string');
});