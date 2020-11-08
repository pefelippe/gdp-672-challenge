import React, { useEffect, useState } from "react";

import Header from '../components/Header';

import Picker from '../components/Picker';

import CardContainer from '../components/CardContainer';

import Footer from '../components/Footer';

import 'fontsource-montserrat/latin.css';

import './App.css';

export default function App () {
    
    const [country, setCountry] = useState('world')
    
    const [startDate, setStartDate] = useState(new Date());

    const [endDate, setEndDate] = useState(new Date());
    
    const onCountryChange = async (e) => {
        const countryCode = e.target.value;
        setCountry(countryCode);
    };

    return (
        <div className="app">
            <Header />
            <Picker country = {country} onCountryChange = { onCountryChange } />
            <CardContainer country = { country } />
            <Footer />
        </div>
    )
}

