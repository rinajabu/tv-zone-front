import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'

const Edit = (props) => {

    const [tvShow, setTvShow] = useState({...props.show})
    // edit show modal state
    const [show, setShow] = useState(false)

    // edit show modal functions
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleChange = (event) => {
        setTvShow({...tvShow, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(tvShow)
        props.handleUpdate(tvShow)
        handleClose()
    }

    return (
        <>
            <br />
            <Button variant="success" onClick={handleShow}>
                Edit Show
            </Button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Edit Show Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={ handleSubmit }>
                        <FloatingLabel label="Title" className="mb-3">
                            <Form.Control type="text" name='title' defaultValue={tvShow.title} onChange={handleChange} maxLength='50' />
                        </FloatingLabel>
                        <FloatingLabel label="Genre" className="mb-3">
                            <Form.Select onChange={handleChange} name='genre' defaultValue={tvShow.genre}>
                                <option value='Horror'>Horror</option>
                                <option value='Comedy'>Comedy</option>
                                <option value='Action'>Action</option>
                                <option value='Drama'>Drama</option>
                                <option value='Sci-fi'>Sci-Fi</option>
                                <option value='Feel-Good'>Feel-Good</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel label="Year" className="mb-3">
                            <Form.Control type="text" name='year' defaultValue={tvShow.year} onChange={handleChange} maxLength='20' />
                        </FloatingLabel>
                        <FloatingLabel label="Description" className="mb-3">
                            <Form.Control type="text" name='description' defaultValue={tvShow.description} onChange={handleChange} maxLength='100' />
                        </FloatingLabel>
                        <FloatingLabel label="Cast" className="mb-3">
                            <Form.Control type="text" name='cast' defaultValue={tvShow.cast} onChange={handleChange} maxLength='50' />
                        </FloatingLabel>
                        <FloatingLabel label="Average Rating" className="mb-3">
                            <Form.Select onChange={handleChange} name='avg_rating' defaultValue={tvShow.avg_rating}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel label="Video URL" className="mb-3">
                            <Form.Control type="url" name='video' defaultValue={tvShow.video} onChange={handleChange} maxLength='200' />
                        </FloatingLabel>
                        {/*///// HIDDEN INPUTS FOR NOW /////*/}
                        {/* <label htmlFor='added_by'>Added By: </label> */}
                        <input hidden type='text' name='added_by[]' defaultValue={tvShow.added_by} onChange={handleChange} />
                        {/* <label htmlFor='user_ratings'>User Ratings</label> */}
                        <input hidden type='text' name='user_ratings[]' defaultValue={tvShow.user_ratings} onChange={handleChange} />
                        {/* <label htmlFor='user_reviews'>User Reviews</label> */}
                        <input hidden type='text' name='user_reviews[]' defaultValue={tvShow.user_reviews} onChange={handleChange} />
                        <input class="edit-submit-btn btn btn-success" type='submit' value='Edit' />
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Edit
