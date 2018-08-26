import * as React from 'react';
import AppNavbar from '../AppNavbar/AppNavbar';
import { Grid } from 'react-bootstrap'
import { AppItem } from '../AppItem/AppItem'

const applist = [1, 2, 3, 4, 5];

class Application extends React.Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Grid>
          { applist.map(x => <AppItem />)}
        </Grid>
      </div>
    );
  }
}

export default Application