/***
 *
 * Immutability
 *
 ***/

const arr = [1, 2, 3, 4];
const obj = { name: 'Jeff' };

// Array Copies
const arrSlice = arr.slice();
const arrSpread = [...arr];

// Object Copies
const objAssign = Object.assign({}, obj);
const objSpread = { ...obj };

/***
 *
 * Composition
 *
 ***/

function addTen(num) {
  return num + 10;
}

function addTwenty(num) {
  return num + 20;
}

// without composition
const num1 = addTen(10);
const num2 = addTwenty(num1);

// with composition
const final = addTwenty(addTen(10));
