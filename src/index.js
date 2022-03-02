import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Task from './components/Task';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      tasks: []
    };
    this.create = this.create.bind(this);
    this.destroy = this.destroy.bind(this);
  }
  async componentDidMount(){
    const response = await axios.get('/api/tasks');
    const tasks = response.data;
    this.setState({ tasks });
  }
  async destroy(taskToDelete){
    await axios.delete(`/api/tasks/${taskToDelete.id}`);
    const tasks = this.state.tasks.filter(task => task.id !== taskToDelete.id);
    this.setState({ tasks });
  }
  async create(){
    const response = await axios.post('/api/tasks');
    const task = response.data;
    const tasks = [...this.state.tasks, task];
    this.setState({ tasks });
  }
  render(){
    const tasks = this.state.tasks;
    return (
      <div>
        <h1>Acme Tasks ({tasks.length})</h1>
        <button onClick={ this.create }>Create</button>
        <ul>
          {
            tasks.map( task => {
              return (
                <Task key={task.id} task={task} destroy={this.destroy} />
              );
            })
          }
        </ul>
      </div>
    );
  }
}
const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
