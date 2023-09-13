const repeatString = function(string, num) {
    let output = '';

    if(num < 0){
        output = 'ERROR';
    }else{
        for(let i = 1; i <= num; i++){
            output += string;
        };
    };

    return output;
};

console.log(repeatString('', 5));

// Do not edit below this line
module.exports = repeatString;
