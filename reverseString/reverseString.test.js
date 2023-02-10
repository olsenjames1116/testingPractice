import test from 'node:test';
import reverseString from './reverseString.js';

test('Returns a string', () => {
    expect(reverseString('string')).toStrictEqual('string');
});

test('Converts a string to an array and back', () => {
    expect(reverseString('string')).toStrictEqual('string');
});