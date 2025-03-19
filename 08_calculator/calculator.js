const add = function(a, b) {
	return parseInt(a) + parseInt(b);
};

const subtract = function(a, b) {
	return parseInt(a) - parseInt(b);
};

const sum = function(arr) {
	return arr.reduce((sum, addend) => sum + addend, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, factor) => factor * product, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let ans = 1;
	for (let i = 1; i <= num; i++) {
    ans = ans * i;
  };
  return ans;
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
