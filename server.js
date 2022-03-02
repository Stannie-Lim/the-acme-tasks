const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/the-acme-task-db');

const Task = sequelize.define('task', {
  name: {
    type: Sequelize.STRING
  }
});

Task.generateRandom = function(){
  return this.create({ name: `Task ${ Math.ceil(Math.random()*5000)}`});
}

const start = async()=> {
  try {
    await sequelize.sync({ force: true });
    await Promise.all([
      Task.generateRandom(),
      Task.generateRandom(),
      Task.generateRandom()
    ]);
  }
  catch(ex){
    console.log(ex);
  }
};

start();
