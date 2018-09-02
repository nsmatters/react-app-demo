import * as React from 'react'
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import { Platform } from './ApplicationModel'

interface PlatformModalProps {
  show: boolean;
  onHide: () => void;
  platform?: Platform;
}

export default class PlatformModal extends React.Component<PlatformModalProps, object> {
  render() {
    const title = this.props.platform ? 'Modify Platform' : 'New Platform';
    const platformName = this.props.platform ? this.props.platform.name : '';
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
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
              >
              </FormControl>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>

      </Modal>
    );
  }
}