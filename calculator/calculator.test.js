import Calculator from './calculator.js';

test('Calculator object is created', () => {
    const calculator = new Calculator();

    expect(calculator).toEqual({});
});