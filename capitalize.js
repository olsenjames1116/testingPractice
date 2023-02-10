export default function capitalize(string) {
    const capitalString = string.toUpperCase();
    
    const stringArray = capitalString.split('');

    return stringArray.join('');
}