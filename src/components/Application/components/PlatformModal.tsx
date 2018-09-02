import * as React from 'react'
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import { PlatformItem } from '../ApplicationModel'

interface PlatformModalProps {
  show: boolean;
  onHide: () => void;
  platform?: PlatformItem;
}

interface PlatfromModalState {
  name: string;
}

export default class PlatformModal extends React.Component<PlatformModalProps, PlatfromModalState> {

  constructor(props: PlatformModalProps) {
    super(props);
    this.state = {name: ''}

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleInputChange(e: React.FormEvent<FormControl & HTMLInputElement>) {
    this.setState({name: e.currentTarget.value })
  }

  handleHide() {
    this.setState({name: ''})
    this.props.onHide();
  }

  render() {

    const title = this.props.platform ? 'Modify Platform' : 'New Platform';
    const name = this.props.platform ? this.props.platform.name : '';
    const platformName =  this.state.name.length > 0 ? this.state.name : name;
    return (
      <Modal
        show={this.props.show}
        onHide={this.handleHide}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="conained-modal-title-lg">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup>
              <ControlLabel>name</ControlLabel>
              <FormControl
                type="text"
                value={platformName}
                placeholder="Enter platform name"
                onChange={this.handleInputChange}
              >
              </FormControl>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleHide}>Close</Button>
        </Modal.Footer>

      </Modal>
    );
  }
}