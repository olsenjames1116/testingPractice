import caesarCipher from "./caesarCipher.js";

test("Returns a string", () => {
  expect(typeof caesarCipher("word")).toBe("string");
});

test("Converts a string to an array and back to a string", () => {
  expect(typeof caesarCipher("word")).toBe("string");
});

// Tests for shifting by one letter
test("Returns a ciphered lowercase string shifted forwards by one letter", () => {
  expect(caesarCipher("abcd", 1)).toBe("bcde");
});

test("Returns a ciphered uppercase string shifted forwards by one letter", () => {
  expect(caesarCipher("ABCD", 1)).toBe("BCDE");
});

// Tests for shifting by multiple letters
test("Returns a ciphered lowercase string shifted forwards by multiple letters", () => {
  expect(caesarCipher("abcd", 5)).toBe("fghi");
});

test("Returns a ciphered uppercase string shifted forwards by multiple letters", () => {
  expect(caesarCipher("ABCD", 5)).toBe("FGHI");
});

// Tests for shifting backwards by a letter
test("Returns a ciphered lowercase string shifted backwards by one letter", () => {
  expect(caesarCipher("wxyz", -1)).toBe("vwxy");
});

test("Returns a ciphered uppercase string shifted backwards by one letter", () => {
  expect(caesarCipher("WXYZ", -1)).toBe("VWXY");
});

// Tests for shifting backwards by multiple letters
test("Returns a ciphered lowercase string shifted backwards by multiple letters", () => {
  expect(caesarCipher("wxyz", -3)).toBe("tuvw");
});

test("Returns a ciphered uppercase string shifted backwards by multiple letters", () => {
  expect(caesarCipher("WXYZ", -3)).toBe("TUVW");
});

// Tests for looping from back to front of array
test("Returns a ciphered lowercase string looping to the front of the alphabet if the end is passed", () => {
  expect(caesarCipher("wxyz", 4)).toBe("abcd");
});

test("Returns a ciphered uppercase string looping to the front of the alphabet if the end is passed", () => {
  expect(caesarCipher("WXYZ", 4)).toBe("ABCD");
});

// Tests for looping from front to back of array
test("Returns a ciphered lowercase string looping to the back of the alphabet if the front is passed", () => {
  expect(caesarCipher("abcd", -4)).toBe("wxyz");
});

test("Returns a ciphered uppercase string looping to the back of the alphabet if the front is passed", () => {
  expect(caesarCipher("ABCD", -4)).toBe("WXYZ");
});

// Case remains the same
test("Returns a ciphered string with the same case", () => {
  expect(caesarCipher("AbcDe", 1)).toBe("BcdEf");
});

// Tests for ignore cases
test("Ignores punctuation", () => {
  expect(caesarCipher("Hey!", 1)).toBe("Ifz!");
});

test("Ignores spaces", () => {
  expect(caesarCipher("ab c", 1)).toBe("bc d");
});

test("Ignores numbers in a string", () => {
  expect(caesarCipher("ab1", 1)).toBe("bc1");
});

// Error case
test("Returns error message if anything other than a string is passed", () => {
  expect(caesarCipher(1234, 1)).toBe("Error: please pass a string");
});
