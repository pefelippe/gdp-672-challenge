import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import moment from "moment";

export default function MaterialUIPickers(props) {
  
  const {selectedDate, setSelectedDate, selectTime, setSelectTime} = props

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    var seconds = time.getSeconds();
    var minutes = time.getMinutes();
    var hour = time.getHours();

    var year = time.getFullYear();
    var month = time.getMonth(); // beware: January = 0; February = 1, etc.
    var day = time.getDate();

    selectTime = `${year}-${month}-${day}-T${hour}:${minutes}:${seconds}Z`
    console.log(selectTime)
    setSelectTime(selectTime)
  } 

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
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
         value={selectTime}
         onChange={handleTimeChange}
         />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}