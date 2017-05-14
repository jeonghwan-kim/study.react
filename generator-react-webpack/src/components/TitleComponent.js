'use strict';

import React from 'react';

require('styles//Title.css');

class TitleComponent extends React.Component {
  render() {
    return (
      <div className="title-component">TodoMVC</div>
    );
  }
}

TitleComponent.displayName = 'TitleComponent';

// Uncomment properties you need
// TitleComponent.propTypes = {};
// TitleComponent.defaultProps = {};

export default TitleComponent;
