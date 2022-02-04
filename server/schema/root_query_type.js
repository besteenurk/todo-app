const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const TodoType = require('./todo_type');
const NoteType = require('./note_type');
const Note = mongoose.model('note');
const Todo = mongoose.model('todo');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    todos: {
      type: new GraphQLList(TodoType),
      resolve() {
        return Todo.find({});
      }
    },
    todo: {
      type: TodoType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Todo.findById(id);
      }
    },
    note: {
      type: NoteType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Note.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
