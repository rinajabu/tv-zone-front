import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'



const Favorites = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Favorites
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Favorite Shows</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <ul>
                <li>Show 1</li>
                <li>Show 2</li>
                <li>Show 3</li>
            </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Favorites
