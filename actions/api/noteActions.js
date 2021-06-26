const Note = require('../../db/models/note');

class NoteActions {
  async getAllNotes(req, res) {
    let doc;

    try {
      doc = await Note.find({});
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    res.status(200).json(doc);
  }

  async getNote(req, res) {
    const id = req.params.id;

    let doc;

    try {
      doc = await Note.findOne({ _id: id });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    res.status(200).json(doc);
  }

  async saveNote(req, res) {
    const { title, body } = req.body;

    const note = new Note({ title, body });

    try {
      await note.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    res.status(201).json(note);
  }

  async updateNote(req, res) {
    const { id } = req.params;
    const { title, body } = req.body;

    let note;

    try {
      note = await Note.findOne({ _id: id });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    note.title = title;
    note.body = body;

    try {
      await note.save();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    res.status(201).json(note);
  }

  async deleteNote(req, res) {
    const id = req.params.id;

    try {
      await Note.deleteOne({ _id: id });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }

    res.sendStatus(204);
  }
}

module.exports = new NoteActions();
