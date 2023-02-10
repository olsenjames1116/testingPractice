import capitalize from "./capitalize.js";

test("Returns a string", () => {
  expect(capitalize("STRING")).toBe("STRING");
});

test("Returns a capital letter", () => {
  expect(capitalize("s")).toBe("S");
});

test("Converts a string to an array and back", () => {
  expect(capitalize("STRING")).toBe("STRING");
});

test("Capitalizes only the first letter", () => {
  expect(capitalize("string")).toBe("String");
});
