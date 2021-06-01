import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const AnonymousMenu = () => {
  return (
    <Grid item>
      <Button component={Link} to='/register' color='inherit'>
        Sign Up
      </Button>
      <Button component={Link} to='/login' color='inherit'>
        Sign In
      </Button>
    </Grid>
  );
};

export default AnonymousMenu;
