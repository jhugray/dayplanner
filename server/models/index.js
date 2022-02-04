const User = require('./User');
const CalendarItem = require('./CalendarItem');

User.hasMany(CalendarItem, {
  foreignKey: 'user_id'
});

CalendarItem.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});


module.exports = { User, CalendarItem };