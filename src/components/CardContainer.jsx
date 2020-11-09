
import React, { useState, useEffect } from 'react';

import Card from '../components/Card';

import Cases from '../api/Cases'

import '../styles/CardContainer.css';

export default function CardContainer(props) {

    const { countryCode, countriesDict, periodStart, periodEnd } = props;

    const [cases, setCases] = useState([]);

    useEffect(() => {
        const getCases = async () => {
            Cases(countriesDict, countryCode, setCases, periodStart, periodEnd)

        }
        getCases();
    }, [countryCode, periodStart, periodEnd]);

    const checkCountry = countryCode == "world" ? "Worldwide" : countriesDict[countryCode]
    
    return (
        <div className="cardContainer">
            <Card name="Confirmed" Number={cases.TotalConfirmed} label="Number of infected by covid-19" country = {checkCountry} />
            <Card name="Recovered" Number={cases.TotalRecovered} label="Number of recovered from covid-19" country = {checkCountry}/>
            <Card name="Deaths" Number={cases.TotalDeaths} label="Number of deaths caused by covid-19" country = {checkCountry }/>
        </div>
    )
}

