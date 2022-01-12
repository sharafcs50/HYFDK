// Exercise 1
for (let i=74; i<99; i++) {
    console.log(i);
}

// Exercise 2

// String to Log & No. of Times to log

function stingify(stringToLog,numberOfTimesToLog) {

    for (let i=0; i<numberOfTimesToLog; i++){
    console.log(stringToLog);
    }
}
stingify("sharaf is typing",13);


// Exercise Class 4 - Find Highest Number (shopping list)

// 1) Array:

let myMaxArray = [134,45,58,20,48];

function findMax (array){
    let max = 0;
    let a = array.length;
    for (i=0;i<a;i++){
        if(array[i] > max)
            {
                max = array[i];
            }
    }
    return max
}
console.log(findMax(myMaxArray));

function findMin (array) {
    let min = array[0]; // important to set first value of array.
    for (i=0;i<array.length;i++){
        if (array[i]<min) {
            min = array[i];
        }
    }
    return min
}
console.log(findMin(myMaxArray));


function minmax (array) {
let max = 0;
let min = array[0];

for (i=0;i<array.length;i++){
    if (array[i]>max) {
        max = array[i];
    } else if (array[i]<min) {
        min = array[i];
    }
}
console.log(min);
console.log(max);

}

minmax(myMaxArray);


// RUNNING FOR LOOP ON AN ARRAY OF OBJECTS.
const myObject = [ {price: 30}, {price:460}, {price:50}]
console.log(myObject[0].price);
function greatObject (array) {
    let max = 0

    for (i=0;i<array.length;i++) {
        if (array[i].price > max) {
            max = array[i].price;
        }
      }
      console.log(max);
    return max
}

greatObject(myObject);