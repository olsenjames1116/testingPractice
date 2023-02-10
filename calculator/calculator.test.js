import Calculator from './calculator.js';

const calculator = new Calculator();

test('Calculator object is created', () => {
    expect(calculator).toEqual({});
});

test('Calculator contains add method', () => {
    expect(typeof calculator['add']).toBe('function');
});

test('Calculator contains subtract method', () => {
    expect(typeof calculator['subtract']).toBe('function');
});

test('Calculator contains divide method', () => {
    expect(typeof calculator['divide']).toBe('function');
});

test('Calculator contains multiply method', () => {
    expect(typeof calculator['multiply']).toBe('function');
});