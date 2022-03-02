import React from 'react';

const Task = (props) => {
  const task = props.task;
  const destroy = props.destroy;
  return (
    <li>{ task.name } <button onClick={ ()=> destroy(task)}>x</button></li>
  );
};

export default Task;