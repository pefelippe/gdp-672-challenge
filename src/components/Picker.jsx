import React, {useState, useEffect} from "react";

import CountryPicker from '../components/CountryPicker';

import DatePicker from '../components/DatePicker';

const url = "https://api.covid19api.com/countries";

const Picker = (props) => {

    const { country, onCountryChange} = props;

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            await fetch(url)
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
        <div className = "picker">
            <CountryPicker countries = {countries} country = {country} onCountryChange = {onCountryChange}/>
            <div className = "datePicker">
                <DatePicker />
                <DatePicker />
            </div>
        </div>
    )
}

export default Picker;