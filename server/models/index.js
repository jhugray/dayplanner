const User = require('./User');
const CalendarItem = require('./CalendarItem');
const Goal = require('./Goal');

User.hasMany(CalendarItem, {
  foreignKey: 'user_id'
});

User.hasMany(Goal, {
  foreignKey: 'user_id'
});

CalendarItem.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Goal.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});


module.exports = { User, CalendarItem, Goal };