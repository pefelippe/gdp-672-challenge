
import React, {useState, useEffect} from 'react'

import Card from '../components/Card'

import '../styles/CardContainer.css'

const urlSummary = "https://api.covid19api.com/summary";

const urlWIP = 'https://api.covid19api.com/world?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z'

const CardContainer = (props) => {

    const [cases, setCases] = useState([]);


    const country = props.country;
    
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

                    const cases = {
                        TotalConfirmed: countryPicker.TotalConfirmed,
                        TotalDeaths: countryPicker.TotalDeaths,
                        TotalRecovered: countryPicker.TotalRecovered
                    }
                    setCases(cases)
                });
            }
            getCases();
    }, [country]);
    
    return (
        <div className = "cardContainer"> 
            <Card name = "Confirmed" Number = {cases.TotalConfirmed} />
            <Card name = "Recovered" Number = {cases.TotalRecovered}/>
            <Card name = "Deaths" Number = {cases.TotalDeaths} />
        </div>
    )
}

export default CardContainer