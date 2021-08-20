import React, { useState } from 'react'

// CREATE component
const Add = (props) => {

    let emptyShow = { title: '', genre: 'Horror', year: '', description: '', cast: '', avg_rating: '1', video: '', added_by: [], user_ratings: [], user_reviews: []} // default values for genre and avg_rating dropdowns
    let [show, setShow] = useState(emptyShow)

    const handleChange = (event) => {
        setShow({ ...show, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(show)
        event.target.reset()
        setShow(emptyShow) // resets create form field
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
                <select onChange={handleChange} name='genre'>
                    <option selected value='Horror'>Horror</option>
                    <option value='Comedy'>Comedy</option>
                    <option value='Action'>Action</option>
                    <option value='Drama'>Drama</option>
                    <option value='Sci-fi'>Sci-Fi</option>
                </select>

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
                <select onChange={handleChange} name='avg_rating'>
                    <option selected value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>

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
