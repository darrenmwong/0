'use strict';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Work extends React.Component {
  constructor(props) {
    super(props);
    console.log('work');
  }
  render() {
    return (
            <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionAppear={true} transitionAppearTimeout={500}>
            <div>
              <h1>Work Page</h1>
            </div>
            </ReactCSSTransitionGroup>
            )
  }
}

export default Work;
