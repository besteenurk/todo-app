const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const NoteType = require('./note_type');
const Todo = mongoose.model('todo');

const TodoType = new GraphQLObjectType({
  name:  'TodoType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    note: {
      type: new GraphQLList(NoteType),
      resolve(parentValue) {
        return Todo.findNote(parentValue.id);
      }
    }
  })
});

module.exports = TodoType;
