import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppNavbar from './AppNavbar/AppNavbar'
import HomePage from './Home/HomePage';
import Application from './Application/Application';

class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <AppNavbar />
            <Route exact path="/" component={HomePage} />
            <Route path="/app" component={Application} />
          </div>
        </Router>
    );
  }
}

export default App;