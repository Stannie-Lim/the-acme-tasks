// const sequelize = require('../db/db');
// const Task = require('../db/models/Task');

const { sequelize, Task } = require('../db');

const seed = async () => {
  try {
    await sequelize.sync({ force: true });
    await Promise.all([
      Task.generateRandom(),
      Task.generateRandom(),
      Task.generateRandom()
    ]);
  } catch (error) {
    console.log(error);
  }
};

seed();