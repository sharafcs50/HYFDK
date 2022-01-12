let firstName = "Sharaf";
let lastName = "Anees";   
let gender = "male"


function fullName(first,last) {
    const fullname = console.log(first + ' ' + last);
    return fullname;
}

fullName(firstName,lastName);

function fullNameFormal(first,last,formal=false) {
    if(first == "" && last == "") {
        console.log("Please enter a name");
    }
    else if (formal == true && gender == "male") {
        console.log("Lord" + " " + first + " " + last);
    } else if (formal == true && gender == "female") {
        console.log("Lady" + " " + first + " " + last);
    } else { console.log(first + " " + last)};
}

fullNameFormal(firstName,lastName,true);

