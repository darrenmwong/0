'use strict';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Random extends React.Component {
  constructor(props) {
    super(props);
    console.log('Random');
  }
  render() {
    return (
            <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionAppear={true} transitionAppearTimeout={500}>
            <div>
              <h1>Random Page</h1>
            </div>
            </ReactCSSTransitionGroup>
            )
  }
}

export default Random;
