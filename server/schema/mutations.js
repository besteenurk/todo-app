const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Todo = mongoose.model('todo');
const Note = mongoose.model('note');
const TodoType = require('./todo_type');
const NoteType = require('./note_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTodo: {
      type: TodoType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return (new Todo({ title })).save()
      }
    },
    addNoteToTodo: {
      type: TodoType,
      args: {
        content: { type: GraphQLString },
        todoId: { type: GraphQLID }
      },
      resolve(parentValue, { content, todoId }) {
        return Todo.addNote(todoId, content);
      }
    },
    doneNote: {
      type: NoteType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Note.done(id);
      }
    },
    deleteTodo: {
      type: TodoType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Todo.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
