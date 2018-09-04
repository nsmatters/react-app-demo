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

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIconChange = this.handleIconChange.bind(this);

    this.clearState = this.clearState.bind(this);

    this.handleClose = this.handleClose.bind(this);
    this.handleNewApplication = this.handleNewApplication.bind(this);
  }

  handleNameChange(e: React.FormEvent<FormControl & HTMLInputElement>) {
    this.setState({ name: e.currentTarget.value });
  }

  handleIconChange(e: React.FormEvent<FormControl & HTMLInputElement>) {
    this.setState({ icon: e.currentTarget.value });
  }

  handleClose() {
    this.clearState()
    this.props.onHide();
  }

  handleNewApplication() {
    this.clearState()
    this.handleClose();
  }

  clearState() {
    this.setState({ name: '', icon: '' });
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.handleClose}
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
                onChange={this.handleNameChange}
              >
              </FormControl>
            </FormGroup>
            <FormGroup>
              <ControlLabel>icon url</ControlLabel>
              <FormControl
                type="text"
                value={this.state.icon}
                placeholder="Enter icon url"
                onChange={this.handleIconChange}
              >
              </FormControl>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.handleNewApplication}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}