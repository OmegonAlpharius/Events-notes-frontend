import {
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../../../store/actions/usersActions';

const DropDownMenu = ({ children, user }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <Grid item>
      <Grid style={{ marginLeft: 20 }} container alignItems='center'>
        <Typography>{user && user.username}</Typography>
        <IconButton
          aria-label='account of current user'
          aria-controls='menu-appbar'
          aria-haspopup='true'
          onClick={handleMenu}
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
      </Grid>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleLogout}>LogOut</MenuItem>
      </Menu>
    </Grid>
  );
};

export default DropDownMenu;
