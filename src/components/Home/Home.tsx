import * as React from 'react';
import AppNavbar from '../AppNavbar/AppNavbar';
import { Grid } from 'react-bootstrap';
import Calendar from '../HomeCalendar/Calendar'

class Home extends React.Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Grid>
          <Calendar />
        </Grid>
      </div>
    );
  }
}

export default Home;
