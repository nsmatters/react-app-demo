import * as React from 'react';
import BigCalendar from 'react-big-calendar';
import * as moment from 'moment';
import { CalendarToolbar } from './CalendarToobar'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import './Calendar.css'

BigCalendar.momentLocalizer(moment);

interface ClendarState {
  platform: string;
  date: Date;
}

class Calendar extends React.Component<object, ClendarState> {
  constructor(props: object) {
    super(props);
    this.state = { platform: 'iOS', date: new Date() }

    this.handleDropdownClicked = this.handleDropdownClicked.bind(this);
    this.handleLeftButtonClicked = this.handleLeftButtonClicked.bind(this);
    this.handleTodayClicked = this.handleTodayClicked.bind(this);
    this.handleRightButtonClicked = this.handleRightButtonClicked.bind(this);
  }

  handleDropdownClicked(eventkey: any) {
    const index = eventkey as number;
    if (index === 0) {
      this.setState({ platform: 'iOS' })
    } else {
      this.setState({ platform: 'Android' })
    }
  }

  handleLeftButtonClicked() {
    const date = this.state.date;
    date.setMonth(date.getMonth() - 1)
    this.setState({ date: date })
  }

  handleTodayClicked() {
    const date = new Date();
    this.setState({ date: date })
  }

  handleRightButtonClicked() {
    const date = this.state.date;
    date.setMonth(date.getMonth() + 1)
    this.setState({ date: date })
  }

  render() {
    return (
      <div className="calenader-container">
        <CalendarToolbar
          label={'Hello world'}
          platform={this.state.platform}
          onDropDownClicked={this.handleDropdownClicked}
          onLeftButtonClicked={this.handleLeftButtonClicked}
          onTodayButtonClicked={this.handleTodayClicked}
          onRightButtonClicked={this.handleRightButtonClicked}
        />
        <BigCalendar
          events={[]}
          views={["month"]}
          toolbar={false}
          date={this.state.date}
        />
      </div>
    );
  }
}

export default Calendar;