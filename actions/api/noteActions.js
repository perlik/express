const Note = require('../../db/models/note');

class NoteActions {
  getAllNotes(req, res) {
    res.send('ok');
  }

  getNote(req, res) {
    res.send('ok');
  }

  saveNote(req, res) {
    const newNote = new Note({ title: req.body.title, body: req.body.body });

    newNote.save().then(() => {
      console.log('saved');
    });

    res.send('ok');
  }

  updateNote(req, res) {
    res.send('ok');
  }

  deleteNote(req, res) {
    const id = req.params.id;

    res.send(`ok ${id}`);
  }
}

module.exports = new NoteActions();
