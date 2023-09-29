const User = require('./User');
const Recipe = require('./recipe');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Recipe };