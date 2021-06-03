import React, { useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import CardEvent from '../../components/CardEvent/CardEvent';
import { GetNotes, deleteNote } from '../../store/actions/eventNotesActions';
import Preloader from '../../components/UI/Preloader/Preloader';
import UsersList from '../../components/UsersList/UsersList';
import {
  getSubscribers,
  unsubscribeUser,
} from '../../store/actions/usersActions';

const EventNotes = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.eventNotes);
  const user = useSelector((state) => state.users.user);
  useEffect(() => {
    dispatch(GetNotes());
    dispatch(getSubscribers());
  }, [dispatch]);

  const onDeleteHandler = (id) => {
    dispatch(deleteNote(id));
  };
  const onUnsubscribeHandler = (id) => {
    dispatch(unsubscribeUser(id));
  };

  return (
    <Grid container direction='row' wrap='nowrap'>
      <Preloader show={state.loading} />
      <UsersList users={user.subscribers} onDelete={onUnsubscribeHandler} />
      <Box display='flex' flexWrap='wrap'>
        {state.eventNotes.map((item) => {
          const isCreator = user._id === item.creator._id;
          return (
            <CardEvent
              key={item._id}
              title={item.title}
              dateTime={item.dateTime}
              name={isCreator ? 'Me' : item.creator.username}
              editable={isCreator}
              duration={item.duration}
              onDelete={() => onDeleteHandler(item._id)}
            />
          );
        })}
      </Box>
    </Grid>
  );
};

export default EventNotes;
