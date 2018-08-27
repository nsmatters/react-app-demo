import * as React from 'react';
import { Link } from 'react-router-dom';
import './AppNavbar.css'

class AppNavbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Coding for fun</Link>
          </div>
          <ul className="nav navbar-nav">
            <li key={0}>
              <Link to="/app">Applications</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;