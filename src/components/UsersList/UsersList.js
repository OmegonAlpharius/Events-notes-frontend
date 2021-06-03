import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',

    backgroundColor: theme.palette.background.paper,
  },
  drawer: {
    minWidth: theme.spacing(25),
    flexShrink: 0,
  },
  drawerPaper: {
    minWidth: theme.spacing(25),
  },
  drawerContainer: {
    overflow: 'auto',
  },
}));

const UsersList = ({ users = [] }) => {
  console.log(users);
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {users.map((item) => {
            return (
              <ListItem key={item._id}>
                <ListItemText primary={item.username} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
};

export default UsersList;
