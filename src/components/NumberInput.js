import React from "react";
import { FormControl, InputAdornment, Input } from "@material-ui/core";
import NumberFormat from "react-number-format";

const NumberFormatCustom = props => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
};

const AmountInput = ({ value, handleChange }) => (
  <>
    <FormControl fullWidth>
      <Input
        id="standard-adornment-amount"
        placeholder="Amount"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        onChange={event => handleChange(event.target.value)}
        inputComponent={NumberFormatCustom}
        value={value}
      />
    </FormControl>
  </>
);

export default AmountInput;
