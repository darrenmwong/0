'use strict';

import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log('about');
  }
  render() {
    return ( <div>
              <h1>About Page</h1>
            </div> 
            )
  }
}

export default About;
