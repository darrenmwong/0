'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
  }
  toggleNav(e) {
    e.preventDefault();
    let currentState = this.state.active;
    this.setState({active: !currentState});
  }
  render() {
    return (
      <nav className={this.state.active ? 'navigation active' : 'navigation'} onClick={this.toggleNav.bind(this)} >
        <div className="fill"></div>
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <NavList />
      </nav>
      )
  }
}

class NavList extends Navigation {
  render() {
    return (
        <ul>
          {this.props.items.map((item) => {
            return (
                <li key={item.id} data={item}>
                  <Link to={item}>{item}</Link>
                </li>
                   )
          })}
        </ul>
        );
  }
};

NavList.defaultProps = { items: ["Work", "Random", "About"] };
export default Navigation;
