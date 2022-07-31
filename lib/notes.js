const fs = require("fs");
const path = require("path");


function createNewNote(body, notes) {
    const note = body;
    notes.push(note);
    for (let i = 0; i < notes.length; i++) {
        notes[i].id = (i + 1).toString();
    };
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: notes }, null, 2)
    );
    return notes;
};

function deleteNote(id, notes) {
    notes.forEach((note, index) => {
        if (id == note.id) {
            notes.splice(index, 1);
            for (let i = 0; i < notes.length; i++) {
                notes[i].id = (i + 1).toString();
            }
        }
    });
    return notes;
};

module.exports = { createNewNote, deleteNote };