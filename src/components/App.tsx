import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppNavbar from './AppNavbar/AppNavbar'
import HomePage from './Home/HomePage';
import ApplicationPage from './Application/ApplicationPage';
import ApplicationDetailPage from './ApplicationDetail/ApplicationDetailPage'
import SchemePage from './SchemePage/SchemePage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route exact path="/app" component={ApplicationPage} />
            <Route path="/app/:id" component={ApplicationDetailPage} />
            <Route path="/scheme" component={SchemePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;