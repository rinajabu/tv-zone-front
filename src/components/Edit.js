import React, { useState } from 'react'

const Edit = (props) => {

    const [show, setShow] = useState({...props.show})

    const handleChange = (event) => {
        setShow({...show, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(show)
    
    }
}

export default Edit