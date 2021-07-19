import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import './button.css'

const Phase = (props) => {
    const [joke, setJoke] = useState([]);

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(Response => {
                setJoke(Response.data.value)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    function handleClick(e){
        e.preventDefault()
        axios.get('https://api.chucknorris.io/jokes/random')
            .then(Response => {
                setJoke(Response.data.value)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return ( 
        <>
            <p>{joke}</p>
            <button className="main-button" onClick={handleClick}>give me a joke Chuck!</button>
        </>
     );
}
 
export default Phase;