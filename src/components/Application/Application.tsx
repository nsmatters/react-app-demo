import * as React from 'react';

import { AppItem } from '../AppItem/AppItem'
import { Label, Table, Button, Glyphicon } from 'react-bootstrap';

import './Application.css'

const applist = [1, 2, 3, 4, 5];

interface Platform {
  id: number;
  name: string;
}

class Application extends React.Component {
  render() {
    const platforms: Platform[] = [{ id: 0, name: "iOS" }, { id: 1, name: "Android" }];
    return (
      <div className="container-fluid">
        <div>
          <h2>
            <Label bsStyle="primary">Platform</Label>
            <Button className="add-right"><Glyphicon glyph="plus" /></Button>
          </h2>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>operation</th>
              </tr>
            </thead>
            <tbody>
              {platforms.map((platform: Platform) => {
                return (
                  <tr key={platform.id}>
                    <td>{platform.id}</td>
                    <td>{platform.name}</td>
                    <td><Button bsStyle="link">Modify</Button></td>
                  </tr>);
              })}
            </tbody>
          </Table>
        </div>
        <div>
          <h2>
            <Label bsStyle="primary">Applications</Label>
            <Button className="add-right"><Glyphicon glyph="plus" /></Button>
          </h2>
          {applist.map(x => <AppItem key={x} />)}
        </div>
      </div>
    );
  }
}

export default Application