// Capitalizes the first letter in a string
export default function capitalize(string) {
  const stringArray = string.split("");

  stringArray[0] = stringArray[0].toUpperCase();

  return stringArray.join("");
}
