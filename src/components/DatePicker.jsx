import 'date-fns';
import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import moment from "moment";

export default function MaterialUIPickers(props) {

  const setPeriod = props.setPeriod

  const [selectedDate, setSelectedDate] = useState(props.dateDefault);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("date", date);
  };

  const parseDate = (data => {
    data = data.toString()
    return (data.length == 1) ? '0' + data : data
  })

  const handlePeriod = () => {

    if (!selectedDate) return;

    var seconds = parseDate(selectedDate.getSeconds());

    var minutes = parseDate(selectedDate.getMinutes());

    var hour = parseDate(selectedDate.getHours());

    var year = parseDate(selectedDate.getFullYear());
    var month = parseDate(selectedDate.getMonth());
    var day = parseDate(selectedDate.getDate());

    let period = `${year}-${month}-${day}T${hour}:${minutes}:${seconds}Z` // tenho que mandar para a requisição

    return period;
  }

  useEffect(() => {
    const getPeriod = async () => {
      const newPeriod = handlePeriod();
      setPeriod(newPeriod);
    }
    getPeriod()
  }, [selectedDate])


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container direction="column" align-items-xs-center>
        <KeyboardDatePicker 
          disableToolbar
          variant="inline"
          format="MM-dd-yyyy"
          margin="normal"
          id="date-picker-inline"
          label={props.label}
          value={selectedDate}
          maxDate={moment()}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          variant="inline"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}