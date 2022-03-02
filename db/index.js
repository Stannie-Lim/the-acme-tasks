const sequelize = require('./db');
const Task = require('./models/Task');

module.exports = {
  sequelize,
  Task,
};


/*

A.js
require('./b');

B.js
require('./a');

*/