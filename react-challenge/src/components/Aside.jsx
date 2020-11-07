
import React from 'react'

import { Select, FormControl, MenuItem } from '@material-ui/core'

import '../styles/Aside.css'

export default props => 
    <aside className ="aside">
        <FormControl className="dropdown">
            {/* <Select variant="outlined" value={country} onChange={onCountryChange}> */}
            <Select variant="outlined" value='TROCAR' >
                <MenuItem value = "world"> Worldwide </MenuItem>
                {/* {countries.map(country => <MenuItem value = {country.value}> {country.name} </MenuItem>)} */}
            </Select>
        </FormControl>

    </aside>