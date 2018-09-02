import * as React from 'react';

import { AppItem } from '../AppItem/AppItem'
import { Label, Table, Button, Glyphicon } from 'react-bootstrap';
import PlatformModal from './PlatformModal'
import { Platform } from './ApplicationModel'

import './Application.css'

const applist = [1, 2, 3, 4, 5];

interface ApplicationState {
  platformModalShow: boolean;
  platfformInfo?: Platform;
}

class Application extends React.Component<object, ApplicationState> {
  constructor(props: object) {
    super(props);
    this.state = {platformModalShow: false}

    this.handlePlatformModalHide = this.handlePlatformModalHide.bind(this);
    this.handlePlatformModalShow = this.handlePlatformModalShow.bind(this);
    this.handleNewPlatform = this.handleNewPlatform.bind(this);
  }

  handlePlatformModalHide() {
    this.setState({platformModalShow: false});
  }

  handlePlatformModalShow(platform?: Platform) {
    this.setState({platformModalShow: true, platfformInfo: platform});
  }

  handleNewPlatform() {
    this.handlePlatformModalShow()
  }

  render() {
    const platforms: Platform[] = [{ id: 0, name: "iOS" }, { id: 1, name: "Android" }];
    return (
      <div className="container-fluid">
        <div>
          <h2>
            <Label bsStyle="primary">Platform</Label>
            <Button className="add-right" onClick={this.handleNewPlatform}><Glyphicon glyph="plus" /></Button>
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
                    <td><Button bsStyle="link" onClick={() => this.handlePlatformModalShow(platform)}>Modify</Button></td>
                  </tr>);
              })}
            </tbody>
          </Table>
          <PlatformModal 
            show={this.state.platformModalShow} 
            onHide={this.handlePlatformModalHide}
            platform={this.state.platfformInfo}
          />
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