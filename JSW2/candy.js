const candyArray = [];

var amountToSpend = Math.random() * 100;
console.log(amountToSpend);

function addPrice(type, weight) {
    if (type == "sweet") {
        candyArray.push(weight * 0.5);
    } else if (type == "chocolate") {
        candyArray.push(weight * 0.7);
    } else if (type == "toffee") {
        candyArray.push(weight * 1.1);
    } else if (type == "gum") {
        candyArray.push(weight * 0.03);
    } else (console.log("enter a valid type"));
}
addPrice("sweet",100);
addPrice("gum",10)
console.log(candyArray);

function moreCandy() {
    let sum = 0;
   for(i= 0; i<candyArray.length; i++)
   sum += candyArray[i];
   console.log(sum);
   return sum
} 
const totalCandy = moreCandy();
console.log(totalCandy);

function leftAmount () {
    let spend = (amountToSpend - totalCandy);
    console.log(spend);
    if (spend > 0) {
        console.log("Yay, You can buy more candy");
    }
    if(spend <1) {
        console.log("No More Candy FOr YOu, GO HOME");
    }
    return spend
}
leftAmount();