const express = require('express');
const NoteActions = require('../actions/api/noteActions');

const router = express.Router();
router.get('/notes', NoteActions.getAllNotes);
router.get('/notes/:id', NoteActions.getNote);
router.post('/notes', NoteActions.saveNote);
router.put('/notes/:id', NoteActions.updateNote);
router.delete('/notes/:id', NoteActions.deleteNote);

module.exports = router;
