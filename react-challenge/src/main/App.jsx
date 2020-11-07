import React, { useEffect, useState } from "react";

import Header from '../components/Header'

import CardContainer from '../components/CardContainer'

import Footer from '../components/Footer'

import Dropdown from '../components/Dropdown';


import 'fontsource-montserrat/latin.css'

import'./App.css'

function App () {
    
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState(['world']);
    
    useEffect(() => {

        const getCountries = async () => {
            await fetch("https://api.covid19api.com/countries")
            .then(response => response.json())
            .then(data => {
                const countries = data.map(country => ({
                    name: country.Country,
                    value: country.ISO2
                }))
                countries.sort((a, b) => a.name.localeCompare(b.name)) // alphabetically sort countries
                setCountries(countries); 
            });
        };

        getCountries();   

    }, []);

    const onCountryChange = async (e) => {
        const countryCode = e.target.value;
        setCountry(countryCode)
    };

    return (
            <div className="app">
            <Header />
            <Dropdown countries = {countries} country = {country} onCountryChange = {onCountryChange} />
            <CardContainer countries = {countries} country = {country}/>
            <Footer />
        </div>
    )
    
}

export default App

