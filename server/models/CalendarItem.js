const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const calendarItemSchema = new Schema (
  {
    calendarText: {
      type: String,
      minlength: 1,
      maxlength: 280
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
)

const CalendarItem = model ('CalendarItem', calendarItemSchema);

module.exports = CalendarItem;