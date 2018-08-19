import * as React from 'react';
import NavBar from './NavBar';
import { Grid } from 'react-bootstrap'

class Application extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid>
          application
        </Grid>
      </div>
    );
  }
}

export default Application