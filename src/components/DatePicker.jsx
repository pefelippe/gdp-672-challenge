
// // https://material-ui.com/pt/components/pickers/

// import React, { useState } from 'react';

// import 'date-fns';

// import Grid from '@material-ui/core/Grid';

// import DateFnsUtils from '@date-io/date-fns';

// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

// import '../styles/DatePicker.css'

// export default () => {
//     const [selectedDateFrom, setSelectedDateFrom] = React.useState(new Date());

//     const [selectedDateTo, setSelectedDateTo] = React.useState(new Date());

//     const handleDateChangeTo = (date) => {
//         setSelectedDate(date);
//     };

//     const handleDateChangeFrom = (date) => {
//         setSelectedDate(date);
//     };

//     return (
//         <MuiPickersUtilsProvider utils={DateFnsUtils} className = "DatePicker">
//             <Grid container justify="space-around" className="fromDate">
//                 <KeyboardDatePicker
//                     disableToolbar
//                     variant="inline"
//                     format="MM/dd/yyyy"
//                     margin="normal"
//                     id="date-picker-inline"
//                     label="From"
//                     value={selectedDate}
//                     onChange={handleDateChangeFrom}
//                     KeyboardButtonProps={{
//                         'aria-label': 'change date',
//                 }}/>

//                 <KeyboardDatePicker className = "toDate"
//                     disableToolbar
//                     variant="inline"
//                     format="MM/dd/yyyy"
//                     margin="normal"
//                     id="date-picker-inline"
//                     label="To"
//                     value={selectedDate}
//                     onChange={handleDateChangeTo}
//                     KeyboardButtonProps={{
//                         'aria-label': 'change date',
//                 }}/>
//             </Grid>
//         </MuiPickersUtilsProvider>
//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DateAndTimePickers() {
  const classes = useStyles();
  const dateDefault = new Date()
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Starting date"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={"classes.textField"}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>,

    <form className={classes.container} noValidate>
    <TextField
    id="datetime-local"
    label="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    type="datetime-local"
    defaultValue="2017-05-24T10:30"
    className={"classes.textField"}
    InputLabelProps={{
        shrink: true,
    }}
    />
    </form>
  );
}