const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  note: [{
    type: Schema.Types.ObjectId,
    ref: 'note'
  }]
});

TodoSchema.statics.addNote = function(id, content) {
  const Note = mongoose.model('note');

  return this.findById(id)
    .then(todo => {
      const note = new Note({ content, todo })
      todo.note.push(note)
      return Promise.all([note.save(), todo.save()])
        .then(([note, todo]) => todo);
    });
}

TodoSchema.statics.findNote = function(id) {
  return this.findById(id)
    .populate('note')
    .then(todo => todo.note);
}

mongoose.model('todo', TodoSchema);
