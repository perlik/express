const Note = require('../../db/models/note');

module.exports = {
  saveNote: (req, res) => {
    const newNote = new Note({ title: 'a', body: 'b' });

    newNote.save().then(() => {
      console.log('saved');
    });
  },
};
