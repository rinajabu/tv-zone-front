import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

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
                <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={ handleSubmit }>
                        <label htmlFor='title'>Title: </label>
                        <input type='text' name='title' defaultValue={tvShow.title} onChange={handleChange} />
                        <br />
                        <label htmlFor='genre'>Genre: </label>
                        <select onChange={handleChange} defaultValue={tvShow.genre} name='genre'>
                            <option value='Horror'>Horror</option>
                            <option value='Comedy'>Comedy</option>
                            <option value='Action'>Action</option>
                            <option value='Drama'>Drama</option>
                            <option value='Sci-fi'>Sci-Fi</option>
                        </select>
                        <br />
                        <label htmlFor='year'>Year: </label>
                        <input type='text' name='year' defaultValue={tvShow.year} onChange={handleChange} />
                        <br />
                        <label htmlFor='description'>Description: </label>
                        <input type='text' name='description' defaultValue={tvShow.description} onChange={handleChange} />
                        <br />
                        <label htmlFor='cast'>Cast: </label>
                        <input type='text' name='cast' defaultValue={tvShow.cast} onChange={handleChange} />
                        <br />
                        <label htmlFor='avg_rating'>Average Rating: </label>
                        <select onChange={handleChange} defaultValue={tvShow.avg_rating} name='avg_rating'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                        <br />
                        <label htmlFor='video'>Video: </label>
                        <input type='url' name='video' defaultValue={tvShow.video} onChange={handleChange} />
                        <br />
                        <br />
                        {/* <label htmlFor='added_by'>Added By: </label> */}
                        <input hidden type='text' name='added_by[]' defaultValue={tvShow.added_by} onChange={handleChange} />
                        {/* <label htmlFor='user_ratings'>User Ratings</label> */}
                        <input hidden type='text' name='user_ratings[]' defaultValue={tvShow.user_ratings} onChange={handleChange} />
                        {/* <label htmlFor='user_reviews'>User Reviews</label> */}
                        <input hidden type='text' name='user_reviews[]' defaultValue={tvShow.user_reviews} onChange={handleChange} />

                        <input class="btn btn-success" type='submit' value='Edit' />
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Edit