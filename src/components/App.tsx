import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppNavbar from './AppNavbar/AppNavbar'
import HomePage from './Home/HomePage';
import Application from './Application/Application';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/app" component={Application} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;