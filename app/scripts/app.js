import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import Navigation from './global/Navigation';
import About from './pages/About';
import Work from './pages/Work';
import Random from './pages/Random';
const mountNode = document.getElementById('app');

class App extends React.Component {
  render() {
    return (
        <div>
          <Navigation />
          <div className="content">
            {this.props.children}
          </div>
        </div>

        );
  }
}

render((
      <Router>
        <Route path="/" component={ App } >
          <Route path="about" component={ About }/>
          <Route path="work" component={ Work }/>
          <Route path="random" component={ Random }/>
        </Route>
      </Router>
      ), mountNode);

