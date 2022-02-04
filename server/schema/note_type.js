const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const Note = mongoose.model('note');

const NoteType = new GraphQLObjectType({
  name:  'NoteType',
  fields: () => ({
    id: { type: GraphQLID },
    done: { type: GraphQLInt },
    content: { type: GraphQLString },
    todo: {
      type: require('./todo_type'),
      resolve(parentValue) {
        return Note.findById(parentValue).populate('todo')
          .then(note => {
            console.log(note)
            return note.todo
          });
      }
    }
  })
});

module.exports = NoteType;
