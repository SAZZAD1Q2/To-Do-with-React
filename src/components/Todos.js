import React from 'react';
import Checkbox from './Checkbox';

class Todos extends React.Component {
  render() {
    const { tasks } = this.props;
    return (
      <div>
        {tasks.map((task, index) => (
          <Checkbox key={index} task={task} />
        ))}
      </div>
    );
  }
}

export default Todos;
