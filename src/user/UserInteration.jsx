import React, {Component} from 'react'

import axios from 'axios'


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

export default class UserCrud extends Component {


    getCountries = async () => {
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
    
    onCountryChange = async (e) => {
        const countryCode = e.target.value;
        setCountry(countryCode)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}