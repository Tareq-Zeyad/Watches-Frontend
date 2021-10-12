import React from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

class UpdateModal extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateWatch}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Watch Title</Form.Label>
                                <Form.Control type="text" placeholder="Write Title" name="watchTitle" defaultValue={this.props.watchTitle} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Watch Description</Form.Label>
                                <Form.Control type="text" placeholder="Write Text" name="watchDescription" defaultValue={this.props.watchDescription} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Watch Price</Form.Label>
                                <Form.Control type="number" placeholder="put price" name="watchtoUSD" defaultValue={this.props.watchtoUSD} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Watch Image</Form.Label>
                                <Form.Control type="text" placeholder="put photo" name="watchImage_URL" defaultValue={this.props.watchImage_URL} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default UpdateModal;