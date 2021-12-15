function doubleChar(str) {
    return str.split('').map(function(v) {
        return v + v;
    }).join('')
}

console.log(doubleChar('1337')); // --> 11333377
console.log(doubleChar('abcd')); // --> aabbccdd

