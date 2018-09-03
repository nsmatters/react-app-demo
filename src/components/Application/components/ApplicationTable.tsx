import * as React from 'react';
import AppItem from './AppItem'
import { ApplicationItem } from '../ApplicationModel'

interface ApplicationTableProps {
  list: ApplicationItem[];
}

export default class ApplicationTable extends React.Component<ApplicationTableProps, object> {
  render() {
    return (
      <div className="row">
        {this.props.list.map((x, index) => {
          return <AppItem key={index} {...x} />
        })}
      </div>
    );
  }
}