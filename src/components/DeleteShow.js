import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const DeleteShow = (props) => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button className='btn btn-danger' onClick={ handleShow }>
                Delete Show
            </Button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete this show?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This action cannot be undone.</Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-secondary' onClick={ handleClose }>
                        Cancel
                    </Button>
                    <Button className='btn btn-danger' onClick={ props.handleDelete } value={props.show.id}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteShow
