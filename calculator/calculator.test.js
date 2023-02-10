import Calculator from './calculator.js';

const calculator = new Calculator();

test('Calculator object is created', () => {
    expect(calculator).toEqual({});
});

test('Calculator contains add method', () => {
    expect(calculator.add()).toBe('add');
});

test('Calculator contains subtract method', () => {
    expect(calculator.subtract()).toBe('subtract');
});

test('Calculator contains divide method', () => {
    expect(calculator.divide()).toBe('divide');
});