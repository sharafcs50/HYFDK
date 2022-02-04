console.log("Loaded 5");

//CactusIO - Smartphone usage app

const activity = [];

function addActivity(typedate, typeactivity, typeduration) {
    const myObject = {Date:typedate,Activity:typeactivity,Duration:typeduration}; 
    activity.push(myObject);
    }

addActivity("May", "Swimming", 4);
addActivity("23 June", "Driving", 2);
addActivity("3 July", "Fest", 3);
addActivity("7 November", "Birthday", 2);

console.log(activity);
let totalHours = 0;
function showStatus() {
    if (activity.length == 0) {
        console.log("You have no activities");
    } else {
        
    for(i=0; i<activity.length; i++) {
        totalHours += activity[i].Duration;
     }
     console.log(`You have a total of ${activity.length} activities that amount to ${totalHours} hours of usage.`);
    }   
}

showStatus();
