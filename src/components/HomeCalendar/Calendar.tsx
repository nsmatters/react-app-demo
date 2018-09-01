import * as React from 'react';
import BigCalendar from 'react-big-calendar';
import * as moment from 'moment';
import { ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem, Glyphicon } from 'react-bootstrap';

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
    this.handleTodayButtonClicked = this.handleTodayButtonClicked.bind(this);
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
    date.setDate(1)
    date.setMonth(date.getMonth() - 1)
    this.setState({ date: date })
  }

  handleTodayButtonClicked() {
    const date = new Date();
    this.setState({ date: date })
  }

  handleRightButtonClicked() {
    const date = this.state.date;
    date.setDate(1)
    date.setMonth(date.getMonth() + 1)
    this.setState({ date: date })
  }

  render() {
    return (
      <div className="calenader-container">
        <ButtonToolbar className="calendar-toolbar">
        <DropdownButton
          bsStyle='default'
          title={this.state.platform}
          key={0}
          id='dropdown-basic'
          onSelect={(eventKey: any, e?: React.SyntheticEvent<{}>) => this.handleDropdownClicked(eventKey)}
        >
          <MenuItem eventKey={0}>iOS</MenuItem>
          <MenuItem eventKey={1}>Android</MenuItem>
        </DropdownButton>
        <Button bsStyle="primary">订阅</Button>
        <Button>
          <Glyphicon glyph="cog" />
        </Button>
        <div className="calendar-title">{moment(this.state.date).format('MMMM YYYY')}</div>
        <ButtonGroup id="button-group-right">
          <Button onClick={this.handleLeftButtonClicked}>
            <Glyphicon glyph="menu-left" />
          </Button>
          <Button onClick={this.handleTodayButtonClicked}>Today</Button>
          <Button onClick={this.handleRightButtonClicked}>
            <Glyphicon glyph="menu-right" />
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
        <BigCalendar
          events={[]}
          views={["month"]}
          toolbar={false}
          date={this.state.date}
          onNavigate={(newDate: Date, action: String) => console.log('big calendar on navigate') }
        />
      </div>
    );
  }
}

export default Calendar;