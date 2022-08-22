"use strict";
console.clear();

// 1. It is a conceptual behavior of JavaScript, giving a function access to all the variables of its parent function.

// 2.a Closure is used in this code by allowing the argument passed in to the parent function (name) to be used by its inner function as well.

function personalDice(name) {
  return function () {
    // generate random number between 1 and 6
    const newRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`${name} rolled a ${newRoll}`);
  };
}

const dansRoll = personalDice("Dan");

const zoesRoll = personalDice("Zoe");

dansRoll();
dansRoll();

// 2.b The name argument is always the same, but the newRoll variable could have different results, since it generates random numbers.

// 2.c The lexical scope of newRoll is restricted to the inner function from our example (the one being returned, the function without a name).

// 3.
function createBase(num) {
  return function addSix(n) {
    console.log(num + n);
  };
}

const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
