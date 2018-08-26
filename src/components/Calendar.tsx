import * as React from 'react';
import BigCalendar from 'react-big-calendar';
import * as moment from 'moment';
import { CalendarToolbar } from './CalendarToobar'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import './Calendar.css'

BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {
  render() {
    return (
      <div className="calenader">
        <BigCalendar
          events={[]}
          views={["month"]}
          components = { { toolbar: CalendarToolbar } }
        />
      </div>
    );
  }
}

export default Calendar;