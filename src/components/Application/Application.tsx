import * as React from 'react';
import AppNavbar from '../AppNavbar/AppNavbar';
import { AppItem } from '../AppItem/AppItem'

const applist = [1, 2, 3, 4, 5];

class Application extends React.Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <div className="container-fluid">
          {applist.map(x => <AppItem key={x} />)}
        </div>
      </div>
    );
  }
}

export default Application