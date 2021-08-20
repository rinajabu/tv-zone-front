import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const DeleteShow = (props) => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)



    return (
        <>
            <Button class='btn btn-danger' onClick={ handleShow }>
                Delete Show
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to delete this show?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This action cannot be undone.</Modal.Body>
                <Modal.Footer>
                    <Button class='btn btn-secondary' onClick={ handleClose }>
                        Cancel
                    </Button>
                    <Button class='btn btn-danger' onClick={ handleClose }>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteShow
