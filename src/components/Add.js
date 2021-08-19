import React, { useState } from 'react'

// CREATE component
const Add = (props) => {

    let emptyShow = { title: '', genre: '', year: '', description: '', cast: '', avg_rating: '', video: '', added_by: [], user_ratings: [], user_reviews: []}
    let [show, setShow] = useState(emptyShow)

    const handleChange = (event) => {
        setShow({ ...show, [event.target.name]:
        event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(show)
        event.target.reset()
    }

    return (
        <>

            <br />
            <br />

            <form onSubmit={ handleSubmit }>
                <label htmlFor='title'>Title: </label>
                <input type='text' name='title' onChange={handleChange} />

                <br />

                <label htmlFor='genre'>Genre: </label>
                <input type='text' name='genre' onChange={handleChange} />

                <br />

                <label htmlFor='year'>Year: </label>
                <input type='text' name='year' onChange={handleChange} />

                <br />

                <label htmlFor='description'>Description: </label>
                <input type='text' name='description' onChange={handleChange} />

                <br />

                <label htmlFor='cast'>Cast: </label>
                <input type='text' name='cast' onChange={handleChange} />

                <br />

                <label htmlFor='avg_rating'>Average Rating: </label>
                <input type='text' name='avg_rating' onChange={handleChange} />

                <br />

                <label htmlFor='video'>Video: </label>
                <input type='url' name='video' onChange={handleChange} />

                <br />
                <br />

                {/* <label htmlFor='added_by'>Added By: </label> */}
                <input hidden type='text' name='added_by[]' onChange={handleChange} />
                {/* <label htmlFor='user_ratings'>User Ratings</label> */}
                <input hidden type='text' name='user_ratings[]' onChange={handleChange} />
                {/* <label htmlFor='user_reviews'>User Reviews</label> */}
                <input hidden type='text' name='user_reviews[]' onChange={handleChange} />

                <input type='submit' />

            </form>
        </>
    )
}
 export default Add
