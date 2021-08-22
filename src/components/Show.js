import React from 'react'

const Show = (props) => {
    return (
        <>
            <h4>Title: {props.show.title}</h4>
            <h5>Genre: {props.show.genre}</h5>
            <h5>Year: {props.show.year}</h5>
            <h5>Description: {props.show.description}</h5>
            <h5>Cast: {props.show.cast}</h5>
            <h5>Average Rating: {props.show.avg_rating}</h5>
            <iframe width="500" height="300" src={props.show.video}></iframe>
            {/* <h5>Added By: {show.added_by}</h5>
            <h5>User Ratings: {show.user_ratings}</h5>
            <h5>User Reviews: {show.user_reviews}</h5> */}
        </>
    )
}

export default Show
