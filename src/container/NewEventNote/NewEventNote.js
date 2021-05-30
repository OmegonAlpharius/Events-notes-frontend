import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import FormElement from '../../components/UI/Form/FormElement/FormElement';
import { useDispatch, useSelector } from 'react-redux';
import { createNote } from '../../store/actions/eventNotesActions';
import { DateTimePicker } from '@material-ui/pickers';

const NewEventNote = (props) => {
  const error = useSelector((state) => state.eventNotes.createError);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    dateTime: new Date(),
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    dispatch(createNote(state));
  };

  const getFieldError = (fieldName) => {
    try {
      return error.errors[fieldName].message;
    } catch (e) {
      return undefined;
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Grid container direction='column' spacing={2}>
        <FormElement
          fullWidth
          variant='outlined'
          label='Event title'
          name='title'
          onChange={inputChangeHandler}
          value={state.title}
          type='text'
          error={getFieldError('title')}
        />
        <Grid item xs={12}>
          <DateTimePicker
            disablePast
            ampm={false}
            fullWidth
            inputVariant='outlined'
            label='Date and time '
            name='dateTime'
            onChange={inputChangeHandler}
            value={state.datetime}
            helperText={getFieldError('dateTime')}
            error={!!getFieldError('dateTime')}
          />
        </Grid>
        <Grid item>
          <Button type='submit' color='primary'>
            Create
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default NewEventNote;
