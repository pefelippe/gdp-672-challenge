
import React, { useState, useEffect } from 'react';

import Card from '../components/Card';

import '../styles/CardContainer.css';

import Cases from '../api/Cases'

export default function CardContainer(props) {

    const { countryCode, countriesDict, periodStart, periodEnd } = props;

    const [cases, setCases] = useState([]);

    useEffect(() => {
        const getCases = async () => {
            Cases(countriesDict, countryCode, setCases, periodStart, periodEnd)

        }
        getCases();
    }, [countryCode, periodStart, periodEnd]);

    return (
        <div className="cardContainer">
            <Card name="Confirmed" Number={cases.TotalConfirmed} />
            <Card name="Recovered" Number={cases.TotalRecovered} />
            <Card name="Deaths" Number={cases.TotalDeaths} />
        </div>
    )
}

