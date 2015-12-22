'use strict';

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('about');
  }
  render() {
    return (
            <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300} transitionAppear={true} transitionAppearTimeout={500}>
            <div>
              <h1>About Page</h1>
            </div> 
            </ReactCSSTransitionGroup>
            )
  }
}

export default About;
