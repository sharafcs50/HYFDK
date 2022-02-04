console.log("4 loaded");

const notes = []

function saveNote(content,id){
    const contentId = {Note: content,
    Number: id};
    notes.push(contentId);
    console.log(notes);
}

saveNote("first note",1);
saveNote("sort out accounts format",2);  
saveNote("hey third one comes here",3);
saveNote("time for tea",4);

function getNote(id){
    console.log(notes[id]);
}

getNote(1);

function allNotes(){
    for(i=0; i<notes.length; i++){
console.log(notes[i].Note);
    }
}

allNotes();