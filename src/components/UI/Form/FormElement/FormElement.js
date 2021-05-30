import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Grid, MenuItem } from '@material-ui/core';

const FormElement = (props) => {
  let inputChildren = null;
  if (props.select) {
    inputChildren = props.options?.map((option) => (
      <MenuItem key={option._id} value={option._id}>
        {option.title}
      </MenuItem>
    ));
  }

  return (
    <Grid item xs={12}>
      <TextField
        disabled={props.disabled}
        variant='outlined'
        fullWidth
        required={props.required}
        id={props.name}
        type={props.type}
        multiline={props.multiline}
        rows={props.rows}
        label={props.label}
        name={props.name}
        autoComplete={props.name}
        value={props.value}
        onChange={props.onChange}
        error={!!props.error}
        helperText={props.error}
        select={props.select}
        defaultValue={props.defaultValue}
        InputLabelProps={props.InputLabelProps}
      >
        {inputChildren}
      </TextField>
    </Grid>
  );
};

FormElement.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
  select: PropTypes.bool,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  InputLabelProps: PropTypes.object,
  rows: PropTypes.number,
};

export default FormElement;
