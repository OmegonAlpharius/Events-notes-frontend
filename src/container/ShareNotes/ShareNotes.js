import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, subscribeUser } from '../../store/actions/usersActions';
import ShareForm from '../../components/UI/ShareForm/ShareForm';

const ShareNotes = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const onSubmitHandler = (value) => {
    dispatch(subscribeUser(value._id));
  };

  return <ShareForm options={users} onSubmit={onSubmitHandler} />;
};

export default ShareNotes;
