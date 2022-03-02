const express = require('express');
const app = express();
const path = require('path');

const tasks = require('./routes/tasks');

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

// app.use('/SOME URL', THE FILE FOR WHICH YOU WANT TO LINK);
app.use('/api/tasks', tasks);

const start = async()=> {
  const port = process.env.PORT || 3000;
  app.listen(port, ()=> console.log(`listening on port ${port}`));
};

start();
