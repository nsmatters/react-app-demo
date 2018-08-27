import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home/Home';
import Application from './Application/Application';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/app" component={Application} />
        </div>
      </Router>
    );
  }
}

export default App;