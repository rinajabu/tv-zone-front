import React, { useState } from 'react'

const Edit = (props) => {

    const [show, setShow] = useState({...props.show})

    const handleChange = (event) => {
        setShow({...show, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(show)
        props.handleUpdate(show)
    }

    return (
        <details>
            <summary>Edit Show</summary>
            <form onSubmit={ handleSubmit }>
                <label htmlFor='title'>Title: </label>
                <input type='text' name='title' defaultValue={show.title} onChange={handleChange} />

                <br />

                <label htmlFor='genre'>Genre: </label>
                <select onChange={handleChange} defaultValue={show.genre} name='genre'>
                    <option value='Horror'>Horror</option>
                    <option value='Comedy'>Comedy</option>
                    <option value='Action'>Action</option>
                    <option value='Drama'>Drama</option>
                    <option value='Sci-fi'>Sci-Fi</option>
                </select>

                <br />

                <label htmlFor='year'>Year: </label>
                <input type='text' name='year' defaultValue={show.year} onChange={handleChange} />

                <br />

                <label htmlFor='description'>Description: </label>
                <input type='text' name='description' defaultValue={show.description} onChange={handleChange} />

                <br />

                <label htmlFor='cast'>Cast: </label>
                <input type='text' name='cast' defaultValue={show.cast} onChange={handleChange} />

                <br />

                <label htmlFor='avg_rating'>Average Rating: </label>
                <select onChange={handleChange} defaultValue={show.avg_rating} name='avg_rating'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>

                <br />

                <label htmlFor='video'>Video: </label>
                <input type='url' name='video' defaultValue={show.video} onChange={handleChange} />

                <br />
                <br />

                {/* <label htmlFor='added_by'>Added By: </label> */}
                <input hidden type='text' name='added_by[]' defaultValue={show.added_by} onChange={handleChange} />
                {/* <label htmlFor='user_ratings'>User Ratings</label> */}
                <input hidden type='text' name='user_ratings[]' defaultValue={show.user_ratings} onChange={handleChange} />
                {/* <label htmlFor='user_reviews'>User Reviews</label> */}
                <input hidden type='text' name='user_reviews[]' defaultValue={show.user_reviews} onChange={handleChange} />

                <input type='submit' value='Edit' />
            </form>
        </details>
    )
}

export default Edit