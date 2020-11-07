
import React from 'react'

import Card from '../components/Card'

import '../styles/CardContainer.css'

export default props => 
    <div className = "cardContainer"> 
        <Card name = "Confirmed"/>
        <Card name = "Recovered"/>
        <Card name = "Deaths"/>
    </div>