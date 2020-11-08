
import React from 'react'

import '../styles/Card.css'

import CountUp from 'react-countup';

export default function Cards(props) {

    let { name, Number } = props

    return (
        <div className="card">
            <h1>{name}</h1>
            <h2>
                {Number &&
                    <CountUp
                        separator="."
                        end={Number} />
                }
            </h2>
        </div>
    )
}
