import * as React from 'react'
import { PageHeader, Button, Glyphicon } from 'react-bootstrap'

interface AppPageHeaderProps {
  name: string;
  onClick: () => void;
}

export default class AppPageHeader extends React.Component<AppPageHeaderProps, object> {
  render() {
    return (
      <PageHeader>
        {this.props.name}
        <Button 
          className="add-right"
          onClick={this.props.onClick}
        >
          <Glyphicon glyph="plus" />
        </Button>
      </PageHeader>
    );
  }
}