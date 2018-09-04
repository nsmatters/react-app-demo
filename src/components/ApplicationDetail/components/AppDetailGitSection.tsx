import * as React from 'react';
import { Table } from 'react-bootstrap';
import AppPageHeader from '../../Common/AppPageHeader';

export default class AppDetailGitSection extends React.Component {

  handleAddButtonClick() {

  }

  render() {
    return (
      <div>
        <AppPageHeader name="Stash" onClick={this.handleAddButtonClick} />
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Stash</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>iOS</td>
              <td>
                <a href="https://github.com/CocoaPods/CocoaPods" target="blank">
                  https://github.com/CocoaPods/CocoaPods
                </a>
              </td>
            </tr>
            <tr>
              <td>Android</td>
              <td>
                <a href="https://github.com/Carthage/Carthage" target="blank">
                  https://github.com/Carthage/Carthage
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}