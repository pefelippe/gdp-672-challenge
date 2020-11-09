
import React, { useState, useEffect } from "react";

import CountryDropdown from './CountryDropdown';

import DatePicker from './DatePicker';

import CardContainer from './CardContainer';

import CountriesList from '../api/CountriesList'

import '../styles/Content.css'

export default function Main() {

    const [countryCode, setCountryCode] = useState('world')

    const [countriesDict, setCountriesDict] = useState()

    const [periodStart, setPeriodStart] = useState('0')

    const [periodEnd, setPeriodEnd] = useState('2020-11-08T21:11:54')

    let startDate = new Date('Jan 01 2020 00:00:00')

    let endDate = new Date('2020-11-08T00:00:00')

    // Get All Countries from API
    useEffect(() => {
        const getCountries = async () => {
            CountriesList(setCountriesDict)
        };
        getCountries();

    }, []);

    return (
        <div className="content">
            <div className="countryDropdown">
                <CountryDropdown countriesDict={countriesDict} country={countryCode} setCountryCode={setCountryCode} />
            </div>
            <div className="cardCardCountainer">
                <CardContainer countryCode={countryCode} countriesDict={countriesDict} periodStart={periodStart} periodEnd={periodEnd} className="cardContainer"/>
            </div>
            <div className="datepickers">
                <DatePicker label="Start"
                    dateDefault={startDate}
                    setPeriod={setPeriodStart} />
                <DatePicker label="End"
                    dateDefault={endDate}
                    setPeriod={setPeriodEnd} />
            </div>
        </div>
    )
}

