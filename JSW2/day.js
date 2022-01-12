// Get day and print out day.

// var today = new Date();
// var check = today.getDay();
// // let added = (today.setDate(today.getDate() + 8));
// // console.log(added);
// console.log(check);
// console.log(today.toLocaleDateString());

// let day = today.getDay();
// console.log(day);


// switch (day) {
//     case 0: 
//         day = "Sunday"; 
//     break;
//     case 1:
//         day = "Monday";
//     case 2:
//         day = "Tuesday";
//     break;
//     case 3:
//         day = "Wednesday";
//     break
//     case 4:
//         day = "Thursday";
//     break
//     case 5:
//         day = "Friday";
//     break
//     case 6:
//         day = "Saturday";
//     break
// }

// console.log(day2);
// let day = today.getDay();
// switch (day) {
//     case 0: 
//         day = "Sunday"; 
//     break;
//     case 1:
//         day = "Monday";
//     case 2:
//         day = "Tuesday";
//     break;
//     case 3:
//         day = "Wednesday";
//     break
//     case 4:
//         day = "Thursday";
//     break
//     case 5:
//         day = "Friday";
//     break
//     case 6:
//         day = "Saturday";
//     break
// }

function getday(addDays){
    var today = new Date();
    let added = (today.setDate(today.getDate() + addDays));
    // let daytoprint = today.getDay();
    // console.log(daytoprint);
    today == added;
    // day == today.getDay();
    console.log(today);
    // console.log(day);
   
    return today;
}

// console.log(today);
let day = (getday(13).getDay());
console.log(day);
switch (day) {
        case 0: 
            day = "Sunday"; 
        break;
        case 1:
            day = "Monday";
        break;
        case 2:
            day = "Tuesday";
        break;
        case 3:
            day = "Wednesday";
        break
        case 4:
            day = "Thursday";
        break;
        case 5:
            day = "Friday";
        break;
        case 6:
            day = "Saturday";
        break;
}

console.log(day);