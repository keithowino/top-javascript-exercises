const palindromes = function (str) {
    let output = '';
    let target =  str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let targetMirror = target.split('').reverse().join('');
    if(target === targetMirror){
        output = true;
    }else{
        output = false;
    };
    return output;
};
palindromes('Ddd');

// Do not edit below this line
module.exports = palindromes;
