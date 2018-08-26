import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './AppNavbar.css'

class AppNavbar extends React.Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Coding for fun</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="/app">
            Applications
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default AppNavbar;