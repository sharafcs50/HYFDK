console.log("script loaded");

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const cars = [];
function generateCars(numberOfCars){


    const carMakes = ['Honda','BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','green','coral','pink'];

    for (let i=0; i<numberOfCars; i++){
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0,carMakes.length-1);
        const randomColorIndex = randomIntFromInterval(0,carColors.length-1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0,100);

        cars.push(car);
    }
    return cars;
}


const carsGen = generateCars(10);
console.log(carsGen);


const filteredCars = cars.filter(function(car){
    return (car.speed > 30 && car.speed <60)
});
console.log(filteredCars);

const otherColor = cars.filter(function(car){
    return(car.color !== 'coral');
})
console.log(otherColor);

//METHOD 1

const makesArray = [];
const otherMakes = otherColor.filter(function(car){
    makesArray.push(car.make);
});
console.log(makesArray);

//METHOD 2 - Return array of make using MAP
// MAP creates a new array (copy) and applies the action.
const makesArray2 = otherColor.map(function(car){
    return (car.make);
});
console.log(makesArray2);

console.log(cars);

const danishCars = cars.map(function(cars){
    const danishCar = {};
    danishCar.maerke = cars.make;
    danishCar.fart = cars.speed;
    danishCar.farve = cars.color;
    return danishCar;
})

console.log(danishCars);