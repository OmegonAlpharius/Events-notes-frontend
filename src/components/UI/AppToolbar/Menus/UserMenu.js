import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DropDownMenu from './DropDownMenu/DropDownMenu';
import ShareNotes from '../../../../container/ShareNotes/ShareNotes';

const UserMenu = ({ users = [], user }) => {
  return (
    <Grid item>
      <Grid container alignItems='center'>
        <ShareNotes />
        <Button component={Link} to='/event-note/new' color='inherit'>
          Add new event
        </Button>

        <DropDownMenu user={user} />
      </Grid>
    </Grid>
  );
};

export default UserMenu;
