import AnalyzeArray from "./analyzeArray.js";

const array = new AnalyzeArray([8, 1, 3, 4, 2, 6]);

test('Returns an object', () => {
    expect(typeof array).toBe('object');
});

test('Average getter method exists', () => {
    expect(Object.getPrototypeOf(array).hasOwnProperty('average')).toBe(true);
});

test('Average returns a number', () => {
    expect(typeof array.average).toBe('number');
});

test('Average returns the average of an array', () => {
    expect(array.average).toBe(4);
});

test('Min getter method exists', () => {
    expect(Object.getPrototypeOf(array).hasOwnProperty('min')).toBe(true);
});

test('Min returns a number', () => {
    expect(typeof array.min).toBe('number');
});

test('Min returns the min of an array', () => {
    expect(array.min).toBe(1);
});

test('Max getter method exists', () => {
    expect(Object.getPrototypeOf(array).hasOwnProperty('max')).toBe(true);
});

test('Max returns a number', () => {
    expect(typeof array.max).toBe('number');
});

test('Max returns the max of an array', () => {
    expect(array.max).toBe(8);
});

test('Length getter method exists', () => {
    expect(Object.getPrototypeOf(array).hasOwnProperty('length')).toBe(true);
});

test('Length returns a number', () => {
    expect(typeof array.length).toBe('number');
});

test('Length returns the length of an array', () => {
    expect(array.length).toBe(6);
});