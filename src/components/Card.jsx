
import React from 'react'

import '../styles/Card.css'

import CountUp from 'react-countup';

export default function Cards(props) {

    let { name, Number, label } = props

    return (
        <div className="card">
            <h1 className= "type">{name}</h1>
            <h2 className="numberCases">
                {Number &&
                    <CountUp
                        separator="."
                        end={Number} />
                }
            </h2>
            <h2 className = "description">
                {label}
            </h2>
        </div>
    )
}
