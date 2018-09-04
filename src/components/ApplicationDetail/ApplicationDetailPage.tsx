import * as React from 'react';
import { Grid } from 'react-bootstrap';
import { ApplicationItem } from '../Application/ApplicationModel';
import { RouteComponentProps } from 'react-router-dom';
import AppDetailGitSection from './components/AppDetailGitSection';
import AppDetailCrashSection from './components/AppDetailCrashSection'

interface ApplicationDetailPageParams {
  id: number;
}

interface ApplicationDetailPageProps extends RouteComponentProps<ApplicationDetailPageParams> {

}

export default class ApplicationDetailPage extends React.Component<ApplicationDetailPageProps> {
  render() {
    const maoyan: ApplicationItem = {
      id: 1,
      name: '猫眼电影',
      desc: '移动应用',
      icon: 'https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/c1/e0/f3/c1e0f3cc-a30d-6562-8c5a-4220a60ae343/AppIcon-1x_U007emarketing-85-220-0-5.png/246x0w.jpg'
    }
    return (
      <Grid fluid>
        ApplicationDetail Hello{this.props.match.params.id}
        <h1>{maoyan.name}</h1>
        <AppDetailGitSection />
        <AppDetailCrashSection />
      </Grid>
    );
  }
}