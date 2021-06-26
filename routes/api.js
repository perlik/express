const express = require('express');
const notesActions = require('../actions/api/notes');

const router = express.Router();
router.get('/', notesActions.saveNote);

module.exports = router;
