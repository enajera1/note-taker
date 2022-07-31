const router = require('express').Router();
const { notes } = require('../../data/db.json');
const { createNewNote, deleteNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  const note = createNewNote(req.body, notes);
  res.json(note);

});

router.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  const removeNote = deleteNote(id, notes);
  res.json(removeNote);
})

module.exports = router; 