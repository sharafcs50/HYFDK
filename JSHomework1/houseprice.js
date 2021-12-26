function volumeInMeters (wide, deep,high) {
    return (wide * deep * high)
};

function gardenSizeInM2 (number){
    return(number * 1)
};

var housePricePeter = volumeInMeters(8,10,10) * 2.5 * 1000 + gardenSizeInM2(100) * 300;
var housePriceJulia = volumeInMeters(5,11,8) * 2.5 * 1000 + gardenSizeInM2(70) * 300;

console.log(housePriceJulia);
console.log(housePricePeter);   