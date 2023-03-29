const User = require('./User');
const Project = require('./Project');
const Post = require('./Post')
const Comment = require('./Comment')

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: "user_id", onDelete: "CASCADE"
})

Comment.belongsTo(User, {
  foreignKey: "user_id", onDelete: "CASCADE"
})

Post.hasMany(Comment, {
  foreignKey: "post_id", onDelete: "CASCADE"
})
module.exports = { User, Project, Post, Comment };
