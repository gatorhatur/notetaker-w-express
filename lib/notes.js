const fs = require('fs');
const uniqueId = require('short-unique-id');
const notes = require('../db/db.json');

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
function addNote(note) {
    return
}

module.exports = {
    getNotes,
    addNote
}