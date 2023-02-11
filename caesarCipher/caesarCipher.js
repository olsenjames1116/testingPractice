/* Returns a ciphered lowercase character. This block only 
accepts lowercase characters from the caesarCipher function */
function convertLowercase(charCode, unit) {
  let cipheredCode = charCode + unit;

  /* Using the ASCII decimal value for a letter, if it goes past 
    122, we must loop to the front of the lowercase alphabet */
  if (cipheredCode > 122) {
    cipheredCode = cipheredCode - 122;
    cipheredCode = 96 + cipheredCode;
    return cipheredCode;
  }

  /* Using the ASCII decimal value for a letter, if it goes past 
    97, we must loop to the back of the lowercase alphabet */
  if (cipheredCode < 97) {
    cipheredCode = 97 - cipheredCode;
    cipheredCode = 123 - cipheredCode;
    return cipheredCode;
  }

  return cipheredCode;
}

/* Returns a ciphered uppercase character. This block only 
accepts uppercase characters from the caesarCipher function */
function convertUppercase(charCode, unit) {
  let cipheredCode = charCode + unit;

  /* Using the ASCII decimal value for a letter, if it goes past 
    90, we must loop to the front of the uppercase alphabet */
  if (cipheredCode > 90) {
    cipheredCode = cipheredCode - 90;
    cipheredCode = 64 + cipheredCode;
    return cipheredCode;
  }

  /* Using the ASCII decimal value for a letter, if it goes past 
    65, we must loop to the front of the uppercase alphabet */
  if (cipheredCode < 65) {
    cipheredCode = 65 - cipheredCode;
    cipheredCode = 91 - cipheredCode;
    return cipheredCode;
  }

  return cipheredCode;
}

// Ciphers a string by shifting the number of characters in the alphabet passed in the unit parameter
export default function caesarCipher(string, unit) {
  // Only accepts strings
  if (typeof string !== "string") return "Error: please pass a string";

  let cipheredString = "";

  // Continue ciphering until the end of the string is reached
  for (let i = 0; i < string.length; i++) {
    // Only ciphers letters, will keep symbols in their original form
    if (!/^[A-Za-z]*$/.test(string.charAt(i))) {
      cipheredString += string.charAt(i);
      continue;
    }

    // Get the ACII decimal code for a character
    let charCode = string.charCodeAt(i);

    // If the character is lowercase, pass it to the correct method
    if (/^[a-z]*$/.test(string.charAt(i)))
      charCode = convertLowercase(charCode, unit);

    // If the character is uppercase, pass it to the correct method
    if (/^[A-Z]*$/.test(string.charAt(i)))
      charCode = convertUppercase(charCode, unit);

    cipheredString += String.fromCharCode(charCode);
  }

  return cipheredString;
}
