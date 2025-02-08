function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

let testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/* Boolean Values */
function welcomeToBooleans() {
  return false;
}

/* If Statements */
function trueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

console.log(trueOrFalse(true));
