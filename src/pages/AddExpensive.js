import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import AmountInput from "../components/NumberInput";
import DateInput from "../components/DateInput";

const AddExpensive = ({ handleAddClick, handleCancelClick }) => {
  const [expensive, setExpensive] = useState({
    value: null,
    date: new Date()
  });

  const handleSetValue = value => setExpensive({ ...expensive, value });

  const handleSetDate = date => setExpensive({ ...expensive, date });

  const onAddClick = () => {
    handleAddClick(expensive);
    setExpensive({ value: null, date: new Date() });
  };

  return (
    <>
      <h1>New Expense</h1>
      <Grid container spacing={3} justify="center">
        <Grid item xs={8}>
          <AmountInput value={expensive.value} handleChange={handleSetValue} />
        </Grid>
        <Grid item xs={8}>
          <DateInput value={expensive.date} handleChange={handleSetDate} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={onAddClick}>
            Add
          </Button>
          <Button
            variant="contained"
            color="default"
            onClick={handleCancelClick}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default AddExpensive;
