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

test('Add method returns a number', () => {
    expect(typeof calculator.add()).toBe('number');
});

test('Subtract method returns a number', () => {
    expect(typeof calculator.subtract()).toBe('number');
});

test('Divide method returns a number', () => {
    expect(typeof calculator.divide()).toBe('number');
});

test('Multiply method returns a number', () => {
    expect(typeof calculator.multiply()).toBe('number');
});

test('Add method returns the sum of two numbers', () => {
    expect(calculator.add(1, 6)).toBe(7);
});

test('Subtract method returns the difference of two numbers', () => {
    expect(calculator.subtract(6, 1)).toBe(5);
});

test('Divide method returns the quotient of two numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
});

test('Multiply method returns the product of two numbers', () => {
    expect(calculator.multiply(2, 6)).toBe(12);
});