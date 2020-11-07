
import React from 'react'

import Card from '../components/Card'

import '../styles/CardContainer.css'

const CardContainer = (props) => {

    const { TotalConfirmed, TotalDeaths, TotalRecovered} = props.caseInfo;
    
    return (
        <div className = "cardContainer"> 
            <Card name = "Confirmed" Number = {TotalConfirmed} />
            <Card name = "Recovered" Number = {TotalDeaths}/>
            <Card name = "Deaths" Number = {TotalRecovered} />
        </div>
    )
}

export default CardContainer