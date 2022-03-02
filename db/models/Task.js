const Sequelize = require('sequelize');

const sequelize = require('../db');

const Task = sequelize.define('task', {
  name: {
    type: Sequelize.STRING
  }
});

Task.generateRandom = function(){
  return this.create({ name: `Task ${ Math.ceil(Math.random()*5000)}`});
}

module.exports = Task;