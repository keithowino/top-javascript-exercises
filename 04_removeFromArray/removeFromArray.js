const removeFromArray = function(arr, ...next) {
    return arr.filter(i => !next.includes(i));
};

console.log(removeFromArray(['one', 2, 3, 4, 'two'], 3, '2'));


// Do not edit below this line
module.exports = removeFromArray;
