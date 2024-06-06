function transformString(str) {
    const len = str.length;

    if (len % 15 === 0) {
        return str.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (len % 5 === 0) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (len % 3 === 0) {
        return str.split('').reverse().join('');
    }

    return str;
}

// Example usage:
console.log(transformString("Hamburger"));  // Output: "regrubmaH"
console.log(transformString("Pizza"));      // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));  // Output: "eikooCpihCetalocohC"
