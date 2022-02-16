console.log("loaded");

const myFriends = ["ahmed", "bart", "furqan", "saad", "this", "that"];
console.log(myFriends);

var form = document.getElementById("form");
var newButton = document.getElementById("newButton");
var newUl = document.createElement('ul');

newUl.id = "formList";
form.appendChild(newUl);

newButton.addEventListener("click", function(){
    for(i=0;i<myFriends.length;i++){
    var newLi = document.createElement('li');
    newLi.textContent = myFriends[i];
    newUl.appendChild(newLi);
    newButton.remove();
    }
})

console.log(window.document);