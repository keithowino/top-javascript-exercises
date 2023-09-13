const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let memory = 0;
  let len = arr.length - 1;
  for(let i = 0; i <= len; i++){
    memory += arr[i];
  };
  return memory;
};

const multiply = function(arr) {
  let memory = 1;
  let len = arr.length - 1;
  for(let i = 0; i <= len; i++){
    memory *= arr[i];
  };
  return memory;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	let numbers = 1;
  for(let i = 1; i <= n; i++){
    numbers *= i;
  };
  return numbers;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
