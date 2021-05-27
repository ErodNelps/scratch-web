import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
const useStyles = makeStyles(() => ({
  input: {
    margin: '10%',
    width: '100%',
    boxSizing: 'border-box'
  }
}));

type InputFieldProps = {
  value: string;
  invalid: boolean;
  onInputChange: (value: string) => void;
  label: string;
};

const CustomInputField = ({
  value,
  invalid,
  onInputChange,
  label
}: InputFieldProps) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.input}
      error={invalid}
      id={label}
      label={label}
      defaultValue={value}
      helperText={!invalid ? null : 'Incorrect entry.'}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onInputChange(e.target.value)
      }
    />
  );
};

export default CustomInputField;
