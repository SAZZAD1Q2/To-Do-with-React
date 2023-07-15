import React from 'react';

class Checkbox extends React.Component {
  render() {
    const { task } = this.props;
    return (
      <div>
        <input type="checkbox" /> {task}
      </div>
    );
  }
}

export default Checkbox;
