import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'

// CREATE component
const Add = (props) => {

    let emptyShow = { title: '', genre: 'Horror', year: '', description: '', cast: '', avg_rating: '1', video: '', added_by: [], user_ratings: [], user_reviews: []} // default values for genre and avg_rating dropdowns
    let [tvShow, setTvShow] = useState(emptyShow)
    // create show modal state
    const [show, setShow] = useState(false)

    // create show functions
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleChange = (event) => {
        setTvShow({ ...tvShow, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(tvShow)
        event.target.reset()
        setTvShow(emptyShow) // resets create form field
        handleClose()
    }

    return (
        <>
            <Button className="create-modal-btn" variant="success" onClick={handleShow}>
                Create!
            </Button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Add A New Show</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={ handleSubmit }>
                        <FloatingLabel label="Title" className="mb-3">
                            <Form.Control type="text" name='title' onChange={handleChange} />
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
                            <Form.Control type="text" name='year' onChange={handleChange} />
                        </FloatingLabel>
                        <FloatingLabel label="Description" className="mb-3">
                            <Form.Control type="text" name='description' onChange={handleChange} />
                        </FloatingLabel>
                        <FloatingLabel label="Cast" className="mb-3">
                            <Form.Control type="text" name='cast' onChange={handleChange} />
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
                            <Form.Control type="url" name='video' onChange={handleChange} />
                        </FloatingLabel>
                        {/*///// HIDDEN INPUTS FOR NOW /////*/}
                        {/* <label htmlFor='added_by'>Added By: </label> */}
                        <input hidden type='text' name='added_by[]' onChange={handleChange} />
                        {/* <label htmlFor='user_ratings'>User Ratings</label> */}
                        <input hidden type='text' name='user_ratings[]' onChange={handleChange} />
                        {/* <label htmlFor='user_reviews'>User Reviews</label> */}
                        <input hidden type='text' name='user_reviews[]' onChange={handleChange} />
                        <input class="create-submit-btn btn btn-dark" type='submit' />
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
 export default Add
