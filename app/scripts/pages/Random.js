'use strict';

import React from 'react';

class Random extends React.Component {
  constructor(props) {
    super(props);
    console.log('Random');
  }
  render() {
    return ( <div>
              <h1>Random Page</h1>
            </div>
            )
  }
}

export default Random;
