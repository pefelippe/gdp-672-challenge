
import React from 'react';

import { Select, FormControl, MenuItem } from '@material-ui/core';

import '../styles/CountryDropdown.css';

export default function Dropdown(props) {

    const { countriesDict, country, setCountryCode } = props;

    const onCountryChange = async (e) => {
        const countryCode = e.target.value;
        setCountryCode(countryCode);
    };

    const createMenuItem = (prop) => {
        const countryCode = prop[0]
        const countryName = prop[1]
        return <MenuItem key={countryCode} value={countryCode}> {countryName} </MenuItem>
    }

    return (
        <div className="container ">
            <FormControl className="dropdown">
                <Select variant="outlined" value={country} onChange={onCountryChange}>
                    <MenuItem key="world" value="world"> Worldwide </MenuItem>
                    {countriesDict && Object.entries(countriesDict).map(countryCode => createMenuItem(countryCode))}
                </Select>
            </FormControl>
        </div>
    )
}
