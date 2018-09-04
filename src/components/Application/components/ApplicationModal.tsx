import * as React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'


interface ApplicationModalProps {
  show: boolean;
  onHide: () => void;
}

interface ApplicationModalState {
  name: string;
  icon: string;
}

export default class ApplicationModal extends React.Component<ApplicationModalProps, ApplicationModalState> {
  constructor(props: ApplicationModalProps) {
    super(props);
    this.state = { name: '', icon: '' };
  }
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="conained-modal-title-lg">New Application</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>name</ControlLabel>
              <FormControl
                type="text"
                value={this.state.name}
                placeholder="Enter platform name"
              >
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>icon url</ControlLabel>
              <FormControl
                type="text"
                value={this.state.icon}
                placeholder="Enter icon url"
              >
              </FormControl>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.props.onHide}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}