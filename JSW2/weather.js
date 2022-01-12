
function weatherToday(temp){
    if (temp > 0 && temp < 10) {
        console.log('wear an overhaul');
    } else if (temp > 9 && temp < 18) {
        console.log('wear a jacket');
    } else if (temp > 17) {
        console.log('no excuses, wear a tshirt');
    } else {
        console.log("set the right temperature");
    }
}
const weather = weatherToday(22);
