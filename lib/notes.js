const fs = require('fs');
const uniqueId = require('short-unique-id');
const notes = require('../db/db.json');
const path = require('path');

//this faciliates dynamic tracking during the session
//making deletions possible
let noteArray = notes.notes

const uid = new uniqueId({ length: 10 })

/*note example {
    id:
    title:
    text:
}
*/

//get notes
function getNotes(){
    return noteArray;
};

//save notes
function addNote(noteObj) {
    //add unique id
    noteObj["id"] = uid();
    //push into note arrat
    noteArray.push(noteObj);
    //update db
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    );

    return  noteObj
}

function deleteNote(id) {
    noteArray = noteArray.filter((element) => {
        return element.id !== id;
    })

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    );
}

module.exports = {
    getNotes,
    addNote,
    deleteNote
}