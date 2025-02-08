function reusableFunction() {
  console.log("Hey, World");
}

reusableFunction(); // Output "Hey, World".

function functionWithArgs(a, b) {
  console.log(a - b);
}

functionWithArgs(10, 5); // Output 5.

/* Global Scope and Function */
// It means they can be seen everywhere in js code.
const myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

/* Local Scope and Function */
function myLocalScope() {
  let myLet = 5;
 console.log("myLet :", myLet);
}
myLocalScope();

/* Global vs Local Scope in Functions */
let outerWear = "T-Shirt";

function myOutfit() {
  let outerWear = "sweater"; 
  // Local scope takes precedence over the gloabl scope.

  return outerWear;
}

console.log(myOutfit()); // Expect "sweater".
console.log(outerWear); // Expect "T-Shirt".

/* Return a Value from a Function with Return */
function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10)); // Expect 3.

function timesFive(num) {
  return num * 5;
}

console.log(timesFive(5)); // Expect 25.

/* Undefiend Value */
let sum = 0;
function addThree() {
  sum += 3;
}
console.log(addThree(2)); // Expect "undefined".

