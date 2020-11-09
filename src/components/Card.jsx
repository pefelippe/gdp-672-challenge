
import React from 'react'

import CountUp from 'react-countup';

import '../styles/Card.css'

export default function Cards(props) {

    let { name, Number, label, country } = props

    return (
        <div className="card">
            <span className="type"> {name} </span>
            <span>{country}</span>
            <h2 className="numberCases">
                {Number &&
                    <CountUp
                        separator="."
                        end={Number} />
                }
            </h2>
            <span className="description">
                <i>{label}</i>
            </span>
        </div>
    )
}
