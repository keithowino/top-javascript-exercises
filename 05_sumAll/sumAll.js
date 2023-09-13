const sumAll = function(num1, num2) {
    let output = 0;

    if(num1 < 0 || num2 < 0 || typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        output = 'ERROR';
    }else if(num1 > num2){
        for(let i = num1; i >= num2; i--){
            output += i;
        };
    }else{
        for(let i = num1; i <= num2; i++){
            output += i;
        };
    };

    return output;
};

console.log(sumAll(1, [5, 1]));

// Do not edit below this line
module.exports = sumAll;
