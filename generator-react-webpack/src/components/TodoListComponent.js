'use strict';

import React from 'react';

require('styles//TodoList.css');

class TodoListComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   todos: [{id: 1, title: 'todo1', createdAt: new Date()}]
    // };
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div className="todolist-component">
        asdf{this.state.date}
      </div>
    );
  }
}

TodoListComponent.displayName = 'TodoListComponent';

// Uncomment properties you need
// TodoListComponent.propTypes = {};
// TodoListComponent.defaultProps = {};

export default TodoListComponent;
