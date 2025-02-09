/* While Loops */
var myArray = [];

var i = 0;
// Repeat this until false.
while(i < 5) {
  myArray.push(i);
  i++;
}

console.log(myArray);

/* For Loops */
var ourArray = [];

// Initialize; condition; end of iteration;
for (var i = 1; i < 6; i++) {
  ourArray.push(i);
}

console.log(ourArray);

/* Even Numbers */
var evenArray = [];

for (var i = 0; i < 10; i += 2) {
  evenArray.push(i)
}
console.log(evenArray);

var addArr = [9, 10, 11, 12];
var addTotal = 0;

for (var i = 0; i < addArr.length; i++) {
  addTotal += addArr[i];
}
// Expect 9+10+11+12 = 42.
console.log(addTotal);

/* Nesting For Loops */
function multiplyAll(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);


