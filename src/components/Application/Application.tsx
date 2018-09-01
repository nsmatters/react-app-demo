import * as React from 'react';
import AppNavbar from '../AppNavbar/AppNavbar';
import { AppItem } from '../AppItem/AppItem'
import { Label, Table } from 'react-bootstrap';

const applist = [1, 2, 3, 4, 5];


interface Platform {
  id: number;
  name: string;
}

class Application extends React.Component {
  render() {
    const platforms: Platform[] = [ { id: 0, name: "iOS"}, {id: 1, name: "Android"}];
    return (
      <div>
        <AppNavbar />
        <div className="container-fluid">
          <div>
            <h2><Label bsStyle="primary">Platform</Label></h2>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>name</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map((platform: Platform) => {
                  return (
                  <tr>
                    <td>{platform.id}</td>
                    <td>{platform.name}</td>
                  </tr>);
                })}
              </tbody>
            </Table>
          </div>
          <div>
            <h2><Label bsStyle="primary">Applications</Label></h2>
            {applist.map(x => <AppItem key={x} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default Application