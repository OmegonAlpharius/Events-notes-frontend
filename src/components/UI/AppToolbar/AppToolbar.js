import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import UserMenu from './Menus/UserMenu';
import AnonymousMenu from './Menus/AnonymousMenu';

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    mainLink: {
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        color: '#ccc',
      },
    },
  };
});

const AppToolbar = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.users.user);

  return (
    <>
      <AppBar className={classes.appBar} position='fixed'>
        <Toolbar>
          <Grid container justify='space-between' alignItems='center'>
            <Typography variant='h5'>
              <Link className={classes.mainLink} to='/'>
                EventNote
              </Link>
            </Typography>
            <Grid item>
              {user ? <UserMenu user={user} /> : <AnonymousMenu />}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppToolbar;
