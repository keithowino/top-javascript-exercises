const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num === 0) return 0;

    let entryOne = 1;
    let entryTwo = 0;
    let sum;

    for(let i = 2; i <= num; i++){

        sum = entryOne + entryTwo;
        entryTwo = entryOne;
        entryOne = sum;

    };

    return entryOne;
};

fibonacci(10);

// Do not edit below this line
module.exports = fibonacci;
