const fs = require('fs');
const uniqueId = require('short-unique-id');
const notes = require('../db/db.json');
const path = require('path');

const uid = new uniqueId({ length: 10 })
/*note example {
    id: {}
    title:
    text:
}
*/
//get notes
function getNotes(){
    return notes;
};



//save notes
function addNote(noteObj) {
    //set temp array
    let noteArray = notes;
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

module.exports = {
    getNotes,
    addNote
}