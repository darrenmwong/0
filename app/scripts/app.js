import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import Navigation from './global/Navigation';
const mountNode = document.getElementById('app');


render((
      <Router>
        <Route path="/" component={ Navigation } />
      </Router>
      ), mountNode);

