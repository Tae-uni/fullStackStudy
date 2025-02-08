function testEqual(let) {
  if (let == 12) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual("12")); // Expect Equal.

/* Strict Equality Operator */
function testStrict(lets) {
  if (lets === 8) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict("8")); // Expect "Not Equal".
console.log(testStrict(8)); // Expect "Equal".
// "==" change the type automatically, "===" does not change.

/* Inequality Operator */
// It work opposite way of the equality operator.
function notEqual(lets) {
  if (lets != 5) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(notEqual("5"));

