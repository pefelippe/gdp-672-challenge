
import React from 'react'

import { Select, FormControl, MenuItem } from '@material-ui/core'

import '../styles/CountryPicker.css'

const Dropdown = (props) => {

    const {countries, country, onCountryChange} = props

    return ( 
        <div className="container ">
            <FormControl className="dropdown">
            <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem key = "world"value = "world"> Worldwide </MenuItem>
            {countries.map(country => <MenuItem key = {country.value} value = {country.value}> {country.name} </MenuItem>)}
            </Select>
            </FormControl>
        </div>
    )
}

export default Dropdown;