import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import React from 'react';
import UnsubscribeIcon from '@material-ui/icons/Unsubscribe';

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

const UsersList = ({ users = [], onDelete }) => {
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
        <List
          subheader={<ListSubheader component='div'>Subscribers</ListSubheader>}
        >
          {users.map((item) => {
            return (
              <ListItem key={item._id}>
                <ListItemText primary={item.username} />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => onDelete(item._id)}
                    edge='end'
                    aria-label='delete'
                  >
                    <UnsubscribeIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
};

export default UsersList;
