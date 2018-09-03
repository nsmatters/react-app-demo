import * as React from 'react';
import Calendar from '../HomeCalendar/Calendar'
import { Grid } from 'react-bootstrap'

class HomePage extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Calendar />
      </Grid>
    );
  }
}

export default HomePage;
