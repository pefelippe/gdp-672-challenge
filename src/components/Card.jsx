
import React from 'react'

import '../styles/Card.css'

import CountUp from 'react-countup';

const Cards = (props) => {
    
    const {name, Number} = props

    return(

        <div className = "card">
            <h1>
                {name}
            </h1>
            <h2>
                {Number && <CountUp
                end = {Number}/>}
            </h2>
            
        </div>
    )
}

export default Cards