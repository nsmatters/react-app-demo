import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './AppNavbar.css'

class AppNavbar extends React.Component {

  render() {
    return (
      <Navbar inverse fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Coding for fun</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <LinkContainer to="/app">
            <NavItem eventKey={1}>Applications</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={2} title="Tools" id="basic-nav-dropdown" >
              <MenuItem eventKey={2.1}>Schemes</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
}

export default AppNavbar;