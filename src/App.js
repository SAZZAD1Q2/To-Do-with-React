import React from 'react';
import TaskForm from './components/TaskForm';
import Todos from './components/Todos';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: []
    };
  }

  addTask = (task) => {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
  }

  render() {
    return (
      <div>
        <h1>Simple To-Do List</h1>
        <TaskForm addTask={this.addTask} />
        <Todos tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
