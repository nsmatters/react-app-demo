import * as React from 'react';
import { ApplicationItem } from '../ApplicationModel'
import './AppItem.css';

export default class AppItem extends React.Component<ApplicationItem, object> {

  constructor(props: ApplicationItem) {
    super(props);
    this.handleAppItemClick = this.handleAppItemClick.bind(this);
  }

  handleAppItemClick() {

    console.log('Hi');
  }
  render() {
    return (
      <div className="appitem">
        <div className="thumbnail">
          <img src={this.props.icon} alt=""/>
          <div className="caption">
            <h3>{this.props.name}</h3>
          </div>
        </div>
      </div>
    );
  }
}