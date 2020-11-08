
import React, { useState, useEffect } from "react";

import CountryDropdown from './CountryDropdown';

import DatePicker from './DatePicker';

import CardContainer from './CardContainer';

import CountriesList from '../api/CountriesList'

import '../styles/Content.css'

export default function Main() {

    const [countryCode, setCountryCode] = useState('world')

    const [countriesDict, setCountriesDict] = useState()

    const [startDate, setStartDate] = useState(new Date('2020-01-01T00:00:00'))

    const [endDate, setEndDate] = useState(new Date('2020-11-08T21:11:54'))

    // Get All Countries from API
    useEffect(() => {
        const getCountries = async () => {
            CountriesList(setCountriesDict)
        };
        getCountries();
    }, []);

    return (
        <div className="picker">
            <CountryDropdown countriesDict={countriesDict} country={countryCode} setCountryCode = {setCountryCode}/>
            <div className="datePickers">
                <DatePicker label="from" selectedDate={startDate} setSelectedDate={setStartDate} />
                <DatePicker label="to" selectedDate={endDate} setSelectedDate={setEndDate} />
            </div>
            <CardContainer countryCode={countryCode} countriesDict={countriesDict} startDate={startDate} endDate = {endDate} />
        </div>
    )
}

