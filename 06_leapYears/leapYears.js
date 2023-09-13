const leapYears = function(year) {
    /*
    
    TODO:   PSEUDOCODE
    *:  They are years divisible by 4 & 400
    *:  They are years !divisible by 100 but divisible 400
    
    */
   let output = '';

   if(year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)){
    output = true;
   }else{
    output = false;
   };

   return output;

};

console.log(leapYears(1600));

// Do not edit below this line
module.exports = leapYears;
