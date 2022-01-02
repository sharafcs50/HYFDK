

let emails = "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com"

let myArray = emails.split("|");

console.log(myArray);
myArray.forEach(sendEmailTo);
function sendEmailTo(recepient) {

    console.log('email sent to ' + recepient);
}
