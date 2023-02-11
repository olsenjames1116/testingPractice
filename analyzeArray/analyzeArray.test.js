import { AnalyzeArray } from "./analyzeArray.js";

const array = AnalyzeArray([1, 8, 3, 4, 2, 6]);

test('Returns an object', () => {
    expect(typeof array).toBe('object');
});

test('Average is a function', () => {
    expect(typeof array['average']).toBe('function');
});

test('Min is a function', () => {
    expect(typeof array['min']).toBe('function');
});