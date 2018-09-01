import * as React from 'react';
import Calendar from '../HomeCalendar/Calendar'

class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Calendar />
      </div>
    );
  }
}

export default HomePage;
