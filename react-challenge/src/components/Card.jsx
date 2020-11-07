
import React from 'react'

import '../styles/Card.css'

export default (props) => {

    const {name} = props

    return(
        <div className = "card">
            <h1>
                {name}
            </h1>

            
        </div>
    )
}