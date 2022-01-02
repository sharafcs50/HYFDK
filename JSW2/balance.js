const balance = 500;

if(balance <1) {
    console.log("Please deposit some money")
} else if (balance >0 && balance <1001) {
    console.log("Your balance is looking ok")
} else if (balance >1000 && balance <3001) {
    console.log("Your balance is looking good")
} else if (balance > 3000 && balance <10001) {
    console.log("Your balance is fantastic")
} else {
    console.log("Your Balance is amazing")
}