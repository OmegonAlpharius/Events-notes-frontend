import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import CardEvent from '../../components/CardEvent/CardEvent';
import { GetNotes } from '../../store/actions/eventNotesActions';
import Preloader from '../../components/UI/Preloader/Preloader';

const EventNotes = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.eventNotes);
  const user = useSelector((state) => state.users.user);
  useEffect(() => {
    dispatch(GetNotes());
  }, [dispatch]);
  console.log(user);
  return (
    <Box display='flex' flexWrap='wrap'>
      <Preloader show={state.loading} />
      {state.eventNotes.map((item) => {
        const isCreator = user._id === item.creator._id;
        return (
          <CardEvent
            key={item._id}
            title={item.title}
            dateTime={item.dateTime}
            name={isCreator ? 'My' : item.creator.username}
            editable={isCreator}
          />
        );
      })}
    </Box>
  );
};

export default EventNotes;