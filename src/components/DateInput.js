import React, { useState } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const DateInput = ({ date, handleChange }) => {

  const [selectedDate, setSelectedDate] = React.useState(date);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    handleChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <KeyboardDatePicker
      disableToolbar
      variant="inline"
      format="MM/dd/yyyy"
      margin="normal"
      id="date-picker-inline"
      value={selectedDate}
      onChange={handleDateChange}
      KeyboardButtonProps={{
        "aria-label": "change date"
      }}
      fullWidth
    />
    </MuiPickersUtilsProvider>
  );
};

export default DateInput;
