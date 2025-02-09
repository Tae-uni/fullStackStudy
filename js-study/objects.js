// Basic object syntax
var object = {
  key: "value"
};

/* The diff between object and array
  - The object have key and value, pair.
  - The array has a value.
*/
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

/* Accessing Object Properties */
/* With Dot Notation */
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
}

const hatValue = testObj.hat;  // Expect "ballcap".
const shirtValue = testObj.shirt;  // Expect "jersey".

/* Change value */
testObj.shirt = "white-shirt";
/* Add new value */
testObj.pants = "jean";
console.log(testObj.shirt, testObj.pants);

/* With Bracket Notation */
const testObja = {
  "an entree": "hamburger",
  "the drink": "water"
};

const entreeValue = testObja["an entree"];  // Expect "hamburger".
const drinkValue = testObja['the drink'];  // Expect "water".

testObja["the desert"] = "cupcake";  // Add the new value.
delete testObja["an entree"]; // Delete "an entree" field.

console.log(testObja);

/* Using Objects for Lookups */
function lookupValue(val) {
  let result = "";

  let lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "frank"
  };
  result = lookup[val];
  return result;
}

console.log(lookupValue("delta"));

/* Testing Objects for Properties */
let myObjb = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObjb.hasOwnProperty(checkProp)) {
    return myObjb[checkProp];
  } else {
    return "Not Found"
  }
}

console.log(checkObj("gift"));
console.log(checkObj("hello"));
