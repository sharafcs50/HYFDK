var dogYearOfBirth = 2018;

var dogYearFuture = 2021;

var dogYear = (dogYearFuture - dogYearOfBirth)*7;

var humanYear = dogYearFuture - dogYearOfBirth;

var shouldShowResultsInDogYears = true;

if (shouldShowResultsInDogYears == true) {
    console.log(dogYear);
} else {
    console.log(humanYear);
}