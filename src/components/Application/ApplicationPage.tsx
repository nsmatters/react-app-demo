import * as React from 'react';
import { Grid } from 'react-bootstrap'

import PlatformModal from './components/PlatformModal';
import AppPageHeader from './components/AppPageHeader';
import PlatformTable from './components/PlatformTable';
import ApplicationTable from './components/ApplicationTable';
import ApplicationModal from './components/ApplicationModal';
import { PlatformItem, ApplicationItem } from './ApplicationModel';

import './ApplicationPage.css'


interface ApplicationPageState {
  platformModalShow: boolean;
  platfformInfo?: PlatformItem;
  applicationModalShow: boolean;
}

class ApplicationPage extends React.Component<object, ApplicationPageState> {
  constructor(props: object) {
    super(props);
    this.state = { platformModalShow: false, applicationModalShow: false }

    this.handlePlatformModalHide = this.handlePlatformModalHide.bind(this);
    this.handlePlatformModalShow = this.handlePlatformModalShow.bind(this);
    this.handleNewPlatform = this.handleNewPlatform.bind(this);

    this.handleNewApp = this.handleNewApp.bind(this);
    this.handleApplicationModalHide = this.handleApplicationModalHide.bind(this);
  }

  handlePlatformModalHide() {
    this.setState({ platformModalShow: false });
  }

  handlePlatformModalShow(platform?: PlatformItem) {
    this.setState({ platformModalShow: true, platfformInfo: platform });
  }

  handleNewPlatform() {
    this.handlePlatformModalShow()
  }

  handleNewApp() {
    this.setState({ applicationModalShow: true });
  }

  handleApplicationModalHide() {
    this.setState({ applicationModalShow: false });
  }

  render() {
    const platforms: PlatformItem[] = [{ id: 0, name: "iOS" }, { id: 1, name: "Android" }];

    const maoyanApp: ApplicationItem = {
      id: 1,
      name: '猫眼电影',
      desc: '移动应用',
      icon: 'https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/c1/e0/f3/c1e0f3cc-a30d-6562-8c5a-4220a60ae343/AppIcon-1x_U007emarketing-85-220-0-5.png/246x0w.jpg'
    }
    const meituanApp: ApplicationItem = {
      id: 2,
      name: '美团',
      desc: '移动应用',
      icon: 'https://is4-ssl.mzstatic.com/image/thumb/Purple128/v4/37/15/7e/37157e7e-edcc-65da-2a11-c8a2447fc047/source/512x512bb.jpg'
    }

    const dianpingApp: ApplicationItem = {
      id: 3,
      name: '大众点评',
      desc: '移动应用',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiMLYFUKf9hkSAH0E25KUDwDtbnLwcYQ4uviyFbgXwlb4H4Sa'
    }

    const gewaraApp: ApplicationItem = {
      id: 4,
      name: '格瓦拉',
      desc: '移动应用',
      icon: 'https://pic.cr173.com/up/2016-7/20167161011573202.png'
    }
    const applist = [maoyanApp, meituanApp, dianpingApp, gewaraApp];
    return (
      <Grid fluid>
        <div>
          <AppPageHeader name="Platform" onClick={this.handleNewPlatform} />
          <PlatformTable platfroms={platforms} onClick={this.handlePlatformModalShow} />
          <PlatformModal
            show={this.state.platformModalShow}
            onHide={this.handlePlatformModalHide}
            platform={this.state.platfformInfo}
          />
        </div>
        <div>
          <AppPageHeader name="Applications" onClick={this.handleNewApp} />
          <ApplicationTable list={applist} />
          <ApplicationModal show={this.state.applicationModalShow} onHide={this.handleApplicationModalHide} />
        </div>
      </Grid>
    );
  }
}

export default ApplicationPage;