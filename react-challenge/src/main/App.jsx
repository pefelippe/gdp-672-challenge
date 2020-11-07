import React, { useEffect, useState } from "react";

import { Select, FormControl, MenuItem } from '@material-ui/core'

import Header from '../components/Header'

import CardContainer from '../components/CardContainer'

import Footer from '../components/Footer'

import Aside from '../components/Aside';

import'./App.css'

function App () {
    
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState(['world']);
    
    // The code inside here run once when the component loads 
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
    }

    return (
        <div className="app">
            
            {/* <div className="app__header ">
                <FormControl className="app_dropdown">
                <Select variant="outlined" value={country} onChange={onCountryChange}>
                <MenuItem value = "world"> Worldwide </MenuItem>
                {countries.map(country => <MenuItem value = {country.value}> {country.name} </MenuItem>)}
                </Select>
                </FormControl>
            </div> */}

            <Header />
            <Aside />
            <CardContainer />
            <Footer />

        </div>
    )
}

export default App