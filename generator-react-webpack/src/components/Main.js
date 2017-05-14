require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Title from './TitleComponent';
import TodoList from './TodoListComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Title />
        <TodoList />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
