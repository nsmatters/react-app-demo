import * as React from 'react';
import NavBar from './NavBar';
import { Grid } from 'react-bootstrap';
import Calendar from './Calendar'

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Grid>
          <Calendar />
        </Grid>
      </div>
    );
  }
}

export default Home;
