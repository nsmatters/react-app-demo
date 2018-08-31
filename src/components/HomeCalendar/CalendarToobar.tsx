import * as React from "react";
import { ButtonToolbar, Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import './CalendarToolbar.css'

interface CalendarToolbarProps {
  label: string;
  platform: string;
  onLeftButtonClicked: () => void;
  onTodayButtonClicked: () => void;
  onRightButtonClicked: () => void;
  onDropDownClicked: (eventKey: any) => void;
}

export class CalendarToolbar extends React.Component<CalendarToolbarProps, object> {

  render() {
    return (
      <ButtonToolbar className="calendar-toolbar">
        <DropdownButton
          bsStyle='default'
          title={this.props.platform}
          key={0}
          id='dropdown-basic'
          onSelect={(eventKey: any, e?: React.SyntheticEvent<{}>) => this.props.onDropDownClicked(eventKey)}
        >
          <MenuItem eventKey={0}>iOS</MenuItem>
          <MenuItem eventKey={1}>Android</MenuItem>
        </DropdownButton>
        <Button bsStyle="primary">订阅</Button>
        <div className="calendar-title">{this.props.label}</div>
        <ButtonGroup id="button-group-right">
          <Button onClick={this.props.onLeftButtonClicked}>
            <span className="glyphicon glyphicon-menu-left"></span>
          </Button>
          <Button onClick={this.props.onTodayButtonClicked}>Today</Button>
          <Button onClick={this.props.onRightButtonClicked}>
            <span className="glyphicon glyphicon-menu-right"></span>
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
  }
}