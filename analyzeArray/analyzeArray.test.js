import AnalyzeArray from "./analyzeArray.js";

const array = new AnalyzeArray([1, 8, 3, 4, 2, 6]);

test('Returns an object', () => {
    expect(typeof array).toBe('object');
});

test('Average getter method exists', () => {
    expect(Object.getPrototypeOf(array).hasOwnProperty('average')).toBe(true);
});

test('Average returns a number', () => {
    expect(typeof array.average).toBe('number');
});

test('Min getter method exists', () => {
    expect(Object.getPrototypeOf(array).hasOwnProperty('min')).toBe(true);
});

test('Min returns a number', () => {
    expect(typeof array.min).toBe('number');
});

test('Max getter method exists', () => {
    expect(Object.getPrototypeOf(array).hasOwnProperty('max')).toBe(true);
});

test('Max returns a number', () => {
    expect(typeof array.max).toBe('number');
});

test('Length getter method exists', () => {
    expect(Object.getPrototypeOf(array).hasOwnProperty('length')).toBe(true);
});