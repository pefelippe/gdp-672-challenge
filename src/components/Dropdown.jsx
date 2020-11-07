
import React from 'react'

import { Select, FormControl, MenuItem } from '@material-ui/core'

import '../styles/Dropdown.css'

export default (props) => {

    const {countries, country, onCountryChange} = props

    return ( 

        <div className="container ">
            <FormControl className="dropdown">
            <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value = "world"> Worldwide </MenuItem>
            {countries.map(country => <MenuItem value = {country.value}> {country.name} </MenuItem>)}
            </Select>
            </FormControl>
        </div>
    )
}
