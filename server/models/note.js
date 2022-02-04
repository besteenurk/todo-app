const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  todo: {
    type: Schema.Types.ObjectId,
    ref: 'todo'
  },
  done: { type: Number, default: false },
  content: { type: String }
});

NoteSchema.statics.done = function(id) {
  const Note = mongoose.model('note');

  return Note.findById(id)
    .then(note => {
      note.done = true;
      return note.save();
    })
}

mongoose.model('note', NoteSchema);
