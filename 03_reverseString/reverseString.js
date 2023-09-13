const reverseString = function(str) {
    let output = '';
    let len = str.length - 1;
    for(let i = len; i >= 0; i--){
        output += str[i];
    };
    return output;
};

console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;
