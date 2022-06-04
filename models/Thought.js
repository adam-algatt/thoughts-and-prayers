/*

Thought

thoughtText

String
Required
Must be between 1 and 280 characters
createdAt

Date
Set default value to the current timestamp
Use a getter method to format the timestamp on query
username (The user that created this thought)

String
Required
reactions (These are like replies)

Array of nested documents created with the reactionSchema
Schema Settings

Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
 
*/
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'Thought text is Required',
    min: [1, "You are required to input at least one character for a valid thought"],
    max: 280,
    created_at: Date.now
  },

});

module.exports = Thought;