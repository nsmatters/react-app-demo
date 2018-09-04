import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom'

interface ApplicationDetailPageParams {
  id: number;
}

interface ApplicationDetailPageProps extends RouteComponentProps<ApplicationDetailPageParams> {

}

export default class ApplicationDetailPage extends React.Component<ApplicationDetailPageProps> {
  render() {
    return (
      <div>ApplicationDetail Hello{this.props.match.params.id}</div>
    );
  }
}