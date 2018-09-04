import * as React from 'react';
import { Link } from 'react-router-dom'
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
      <Link to={'/app/' + this.props.id.toString()} className="appitem">
        <div className="thumbnail">
          <img src={this.props.icon} alt="" />
          <div className="caption">
            <h3>{this.props.name}</h3>
          </div>
        </div>
      </Link>
    );
  }
}