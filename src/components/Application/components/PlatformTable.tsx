import * as React from 'react';
import { Table, Button } from 'react-bootstrap'
import { PlatformItem } from '../ApplicationModel'

interface PlatformTableProps {
  platfroms: PlatformItem[];
  onClick: (platform: PlatformItem) => void;
}

export default class PlatformTable extends React.Component<PlatformTableProps, object> {
  render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>operation</th>
          </tr>
        </thead>
        <tbody>
          {this.props.platfroms.map((platform: PlatformItem) => {
            return (
              <tr key={platform.id}>
                <td>{platform.id}</td>
                <td>{platform.name}</td>
                <td><Button bsStyle="link" onClick={() => this.props.onClick(platform)}>Modify</Button></td>
              </tr>);
          })}
        </tbody>
      </Table>
    );
  }
}