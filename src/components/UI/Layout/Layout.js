import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import AppToolbar from '../AppToolbar/AppToolbar';

const useStyles = makeStyles((theme) => ({
  root: { display: 'flex', flexDirection: 'column', height: '100vh' },
  container: {
    flexGrow: 1,
  },

  main: {
    width: `100%`,
    height: '100%',
    padding: theme.spacing(3),
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppToolbar />
      <Container maxWidth='lg' className={classes.container}>
        <main className={classes.main}>{children}</main>
      </Container>
    </div>
  );
};
export default Layout;
