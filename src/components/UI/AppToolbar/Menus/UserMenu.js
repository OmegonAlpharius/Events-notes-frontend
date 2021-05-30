import { useDispatch } from 'react-redux';
import { Button, Typography, Grid } from '@material-ui/core';
import { logoutUser } from '../../../../store/actions/usersActions';

const UserMenu = ({ user }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUser());
  };

  return (
    <Grid container alignItems='center'>
      <Typography> Welcome, {user.username}</Typography>

      <Button
        aria-controls='fade-menu'
        aria-haspopup='true'
        onClick={logout}
        color='inherit'
      >
        Logout
      </Button>
    </Grid>
  );
};

export default UserMenu;
