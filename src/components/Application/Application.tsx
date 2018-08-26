import * as React from 'react';
import AppNavbar from '../AppNavbar/AppNavbar';
import { Grid } from 'react-bootstrap'

class Application extends React.Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Grid>
          application
        </Grid>
      </div>
    );
  }
}

export default Application