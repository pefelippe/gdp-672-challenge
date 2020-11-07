import React, { useEffect, useState } from "react";

import Header from '../components/Header';

import CardContainer from '../components/CardContainer';

import Footer from '../components/Footer';

import Dropdown from '../components/Dropdown';

import 'fontsource-montserrat/latin.css';

import './App.css';

const urlSummary = "https://api.covid19api.com/summary";

const urlCountries = "https://api.covid19api.com/countries";

function App () {
    
    const [country, setCountry] = useState('world');
    
    const [countries, setCountries] = useState([]);
    
    const [cases, setCases] = useState([]);


    const onCountryChange = async (e) => {
        const countryCode = e.target.value;
        setCountry(countryCode);
    };

    useEffect(() => {

        const getCases = async () => {

            await fetch(urlSummary)
            .then(response => response.json())
            .then (data => 
                {
                    let countryPicker;

                    if (country === "world") {
                        countryPicker = data.Global
                    }

                    else {
                        for (var i in data.Countries) {
                            let picker = data.Countries[i]

                            if (picker.CountryCode === country){
                                countryPicker = picker;
                            }
                            
                        }

                        if (!countryPicker) return;
                    }

                    const cases = 
                    {
                        TotalConfirmed: countryPicker.TotalConfirmed,
                        TotalDeaths: countryPicker.TotalDeaths,
                        TotalRecovered: countryPicker.TotalRecovered
                    }

                    setCases(cases)
                });
            }
            getCases();
    }, [country]);

    useEffect(() => {
        const getCountries = async () => {
            await fetch(urlCountries)
            .then(response => response.json())
            .then(data => {
                const countries = data.map(country => ({
                    name: country.Country,
                    value: country.ISO2
                }));
                countries.sort((a, b) => a.name.localeCompare(b.name)); // alphabetically sort countries
                setCountries(countries); 
            });
        };
        getCountries();
    }, []);

    return (
            <div className="app">
            <Header />
            <Dropdown countries = {countries} country = {country} onCountryChange = {onCountryChange} />
            <CardContainer caseInfo = {cases}/>
            <Footer />
        </div>
    )
}

export default App

