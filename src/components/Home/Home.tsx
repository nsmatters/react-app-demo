import * as React from 'react';
import AppNavbar from '../AppNavbar/AppNavbar';
import Calendar from '../HomeCalendar/Calendar'

class Home extends React.Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <div className="container-fluid">
          <Calendar />
        </div>
      </div>
    );
  }
}

export default Home;
