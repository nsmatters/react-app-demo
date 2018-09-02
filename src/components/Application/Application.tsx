import * as React from 'react';

import { AppItem } from './components/AppItem';
import { Row } from 'react-bootstrap';
import PlatformModal from './components/PlatformModal';
import AppPageHeader from './components/AppPageHeader';
import PlatformTable from './components/PlatformTable';
import { PlatformItem, ApplicationItem } from './ApplicationModel'

import './Application.css'



interface ApplicationState {
  platformModalShow: boolean;
  platfformInfo?: PlatformItem;
}

class Application extends React.Component<object, ApplicationState> {
  constructor(props: object) {
    super(props);
    this.state = {platformModalShow: false}

    this.handlePlatformModalHide = this.handlePlatformModalHide.bind(this);
    this.handlePlatformModalShow = this.handlePlatformModalShow.bind(this);
    this.handleNewPlatform = this.handleNewPlatform.bind(this);

    this.handleNewApp = this.handleNewApp.bind(this);
  }

  handlePlatformModalHide() {
    this.setState({platformModalShow: false});
  }

  handlePlatformModalShow(platform?: PlatformItem) {
    this.setState({platformModalShow: true, platfformInfo: platform});
  }

  handleNewPlatform() {
    this.handlePlatformModalShow()
  }

  handleNewApp() {

  }

  render() {
    const platforms: PlatformItem[] = [{ id: 0, name: "iOS" }, { id: 1, name: "Android" }];

    const maoyanApp: ApplicationItem  = { 
      id: 1,
      name: '猫眼电影',
      desc: '移动应用',
      icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535905479491&di=7b2fc5d82c5b5f8ed087419c21af2f80&imgtype=0&src=http%3A%2F%2Fimgs.ebrun.com%2Fresources%2F2017_04%2F2017_04_27%2F2017042763214932584558314_origin.png'
    };
    const meituanApp: ApplicationItem = {
      id: 2,
      name: '美团',
      desc: '移动应用',
      icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535905553787&di=4904c3bd4bd61288cf3392aa6c1582cd&imgtype=0&src=http%3A%2F%2Fwww.hlbrdaily.com.cn%2Fuploadfile%2F201708%2F16%2F948400969.jpg'
    }

    const dianpingApp: ApplicationItem = {
      id: 3,
      name: '点评',
      desc: '移动应用',
      icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535905600126&di=8bc94e8ad1c1c628f1445e87e0a50e3a&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140219%2F20140219205504-1294308152.jpg'
    }

    const gewaraApp: ApplicationItem = {
      id: 4,
      name: '格瓦拉',
      desc: '移动应用',
      icon: ''
    }
    const applist = [maoyanApp, meituanApp, dianpingApp, gewaraApp];
    return (
      <div className="container-fluid">
        <div>
          <AppPageHeader name="Platform" onClick={this.handleNewPlatform}/>
          <PlatformTable platfroms={platforms} onClick={this.handlePlatformModalShow}/>
          <PlatformModal 
            show={this.state.platformModalShow} 
            onHide={this.handlePlatformModalHide}
            platform={this.state.platfformInfo}
          />
        </div>
        <div>
          <AppPageHeader name="Applications" onClick={this.handleNewApp} />
          <Row>

          </Row>
          {applist.map((x, index) => <AppItem key={index} />)}
        </div>
      </div>
    );
  }
}

export default Application