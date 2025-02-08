/* Arrays */
let ourArray = [18,73,21];
ourArray[1] = 45;
console.log(ourArray);

const myArray = [1,2,3];
myArray[1] = 78;
console.log(myArray);
  
/* Access Multi-Dimensional Arrays */
let myArraya = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
  
let myDataa = myArraya[3][2]; // Expect:14
let myDatab = myArraya[3][0][2]; // Expect:12
console.log(myDataa);
console.log(myDatab);

/* Push */
// Add the varient at the end.
let myArrayPush = [["happy","joy"],["sad","cry"]];
myArrayPush.push(["angry","mad"]);
console.log(myArrayPush);

/* Pop */
// Remove the varient at the end.
let myArrayPop = [["happy","joy"],["sad","cry"]];
myArrayPop.pop();
console.log(myArrayPop);

/* Shift */
let myShiftArray = ["Stimpson","J","cat"];
// Remove the varient at the beginning.
myShiftArray.shift(); // myShiftArray now.. ["J","cat"]
console.log(myShiftArray);
// Add the varient at the beginning.
myShiftArray.unshift("Happy"); // myShiftArray now.. ["Happy","J","cat"]
console.log(myShiftArray);
