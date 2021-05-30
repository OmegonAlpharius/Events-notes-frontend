import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import AnonymousMenu from './Menus/AnonymousMenu';
import UserMenu from './Menus/UserMenu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    // backgroundColor: theme.palette.common.black,
  },
  mainLink: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: '#ccc',
    },
  },
  staticToolbar: {
    marginBottom: theme.spacing(2),
  },
}));

export default function AppToolbar() {
  const user = useSelector((state) => state.users.user);

  const classes = useStyles();

  return (
    <div>
      <AppBar position='fixed' className={classes.appBar}>
        <Container maxWidth='xl'>
          <Toolbar>
            <Grid container justify='space-between' alignItems='center'>
              <Grid item>
                <Typography variant='h6' className={classes.title}>
                  <Link className={classes.mainLink} to='/'>
                    Event Notes
                  </Link>
                </Typography>
              </Grid>
              {user ? <UserMenu user={user} /> : <AnonymousMenu />}
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      <Toolbar className={classes.staticToolbar} />
    </div>
  );
}
