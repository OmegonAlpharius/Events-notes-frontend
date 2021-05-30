import React from 'react';

import AppToolbar from '../AppToolbar/AppToolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flexGrow: 1,
  },
}));

const Layer = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppToolbar />
      {children}
    </div>
  );
};

export default Layer;
