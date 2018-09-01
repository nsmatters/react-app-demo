import * as React from 'react';
import { Link } from 'react-router-dom';
import './AppNavbar.css'

class AppNavbar extends React.Component {
  render() {
    const paths = ['/app'];
    const names = ['Applications'];

    const list = paths.map((path: string, index: number) => {
      return (<li key={index}>
                <Link to={path}>{names[index]}</Link>
              </li>);
    });

    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Coding for fun</Link>
          </div>
          <ul className="nav navbar-nav">
            { list }
          </ul>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;