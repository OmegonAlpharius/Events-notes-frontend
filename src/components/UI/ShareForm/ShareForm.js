import React, { useState } from 'react';
import {
  IconButton,
  Grid,
  makeStyles,
  Paper,
  fade,
  InputBase,
} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  search: {
    color: 'inherit',
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const ShareForm = ({ options = [], onSubmit }) => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState('');

  const submitHandler = (e) => {
    setValue('');
    setInputValue('');

    e.preventDefault();
    onSubmit(value);
  };
  return (
    <Grid item>
      <Paper
        component='form'
        className={classes.search}
        onSubmit={submitHandler}
      >
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <Autocomplete
          freeSolo
          disableClearable
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          style={{ width: 300, color: 'inherit' }}
          options={options}
          getOptionLabel={(option) => {
            return option.email || '';
          }}
          renderInput={(params) => {
            const { InputLabelProps, InputProps, ...rest } = params;

            return (
              <InputBase
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                {...InputLabelProps}
                {...InputProps}
                {...rest}
              />
            );
          }}
        />
        <IconButton
          disabled={!value}
          size='small'
          color='inherit'
          type={'submit'}
        >
          <ShareIcon />
        </IconButton>
      </Paper>
    </Grid>
  );
};

export default ShareForm;
