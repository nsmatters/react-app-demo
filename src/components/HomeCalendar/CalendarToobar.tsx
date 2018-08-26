import * as React from "react";
import { ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import './CalendarToolbar.css'

enum CalendarAction {
  prev = 'prev',
  next = 'next',
  current = 'current'
}

interface CalendarToolbarProps {
  label: string;
  date: Date;
  onNavigate: (action: string, newDate: Date) => void;
}

interface CalendarToolbarState {
  platform: string;
}

export class CalendarToolbar extends React.Component<CalendarToolbarProps, CalendarToolbarState> {
  constructor(props: CalendarToolbarProps) {
    super(props);
    this.handleNextEvent = this.handleNextEvent.bind(this);
    this.handlePreviousEvent = this.handlePreviousEvent.bind(this);
    this.handleTodayEvent = this.handleTodayEvent.bind(this);
    this.handleDropdownSelected = this.handleDropdownSelected.bind(this);
    this.state = { platform: 'iOS' }
  }

  handleNextEvent() {
    const date = this.props.date;
    date.setMonth(date.getMonth() + 1);
    this.props.onNavigate(CalendarAction.next, date);
  }

  handleTodayEvent() {
    const date = new Date();
    this.props.onNavigate(CalendarAction.current, date);
  }

  handlePreviousEvent() {
    const date = this.props.date;
    date.setMonth(date.getMonth() - 1);
    this.props.onNavigate('prev', this.props.date);
  }

  handleDropdownSelected(eventKey: any) {
    const index = eventKey as number;
    this.setState({ platform : index == 0 ? 'iOS' : 'Android' })
  }

  render() {
    const platform = this.state.platform
    return (
      <ButtonToolbar className="calendar-toolbar">
          <DropdownButton
            bsStyle='default'
            title={platform}
            key={0}
            id='dropdown-basic'
            onSelect={(eventKey: any, e?: React.SyntheticEvent<{}>) => this.handleDropdownSelected(eventKey)}
          >
            <MenuItem eventKey={0}>iOS</MenuItem>
            <MenuItem eventKey={1}>Android</MenuItem>
          </DropdownButton>
          <Button bsStyle="primary">订阅</Button>
          <span>{this.props.label}</span>
          <ButtonGroup id="button-group-right">
            <Button onClick={this.handlePreviousEvent}>Previouse</Button>
            <Button onClick={this.handleTodayEvent}>Today</Button>
            <Button onClick={this.handleNextEvent}>Next</Button>
          </ButtonGroup>
        </ButtonToolbar>
    );
  }
}