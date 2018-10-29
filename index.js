/***
 *
 * Immutability
 *
 ***/

const arr = [1, 2, 3, 4];
const sameArr = arr;

const obj = { name: 'Jeff' };
const sameObj = obj;

// Array Copies
const arrSlice = arr.slice();
const arrSpread = [...arr];

arr === sameArr; // true
arrSlice === arr; // false
arrSpread === arr; // false
arrSlice === arrSpread; // false

// Object Copies
const objAssign = Object.assign({}, obj);
const objSpread = { ...obj };

obj === sameObj; // true
objAssign === obj; // false
objSpread === obj; // false
objAssign === objSpread; // false

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
const final = addTwenty(addTen(10)); // 40

/***
 *
 * Currying
 *
 ***/

function add(num1, num2) {
  return num1 + num2;
}

// We can curry functions that need to accept arguments at a later time, trimming down on the number of functions we need to write.

const curry = (fn, ...args) =>
  fn.length <= args.length
    ? fn(...args)
    : (...more) => curry(fn, ...args, ...more);

const addCurry = curry(add);

const added = addCurry(10)(10); // 20

/***
 *
 * Functional Purity
 *
 ***/

// impure functions

let globalArr = [];

function logger(value) {
  console.log(value);
}

function addToArray(item) {
  globalArr.push(item);
}

function random(min, max) {
  return Math.floor(Math.random() * min) + max;
}

// pure function

function pureAddToArray(arr, item) {
  return [...arr, item];
}
