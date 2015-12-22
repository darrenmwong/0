'use strict';

import React from 'react';

class Work extends React.Component {
  constructor(props) {
    super(props);
    console.log('work');
  }
  render() {
    return ( <div>
              <h1>Work Page</h1>
            </div>
            )
  }
}

export default Work;
