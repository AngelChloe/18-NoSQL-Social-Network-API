const { Schema, model, Types } = require("mongoose");
const reactionSchema = require('./Reaction');
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema(
  {
    thoughtText: {
      // Mongoose's ObjectthoughtText: {
      type: String,
      required: 'Please leave a thought!',
      minlength: 1,
      maxlength: 280
    },

    // create time/date
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    
    // picks up user
    username: {
      type: String,
      required: true
    },
    // picks up reaction
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

schemaThought.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', schemaThought);

module.exports = Thought;
