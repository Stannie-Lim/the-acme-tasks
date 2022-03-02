const router = require('express').Router();

const Task = require('../db/models/Task');

router.get('/', async(req, res, next) => {
  try {
    res.send(await Task.findAll());
  }
  catch(ex){
    next(ex);
  }
});

router.post('/', async(req, res, next)=> {
  try {
    res.status(201).send(await Task.generateRandom());
  }
  catch(ex){
    next(ex);
  }
});

router.delete('/:id', async(req, res, next) => {
  try {
    const task = await Task.findByPk(req.params.id);
    await task.destroy();
    res.sendStatus(204);
  }
  catch(ex){
    next(ex);
  }
});

module.exports = router;