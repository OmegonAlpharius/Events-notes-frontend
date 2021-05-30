import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.spacing(50),
    minWidth: theme.spacing(25),
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    backgroundColor: '#ffc',

    '&:hover': {},
  },

  cover: {
    height: 'auto',
    objectFit: 'cover',
    flexGrow: 1,
  },

  title: {
    fontWeight: 600,
    fontFamily: 'Bad Script',
  },
  caption: {
    marginRight: 'auto',
    textAlign: 'right',
    fontFamily: 'Bad Script',
  },
}));

const CardEvent = ({ title, dateTime, name, editable }) => {
  const classes = useStyles();
  return (
    <Card elevation={5} className={classes.root}>
      <CardContent>
        <Typography component='p' variant='h5'>
          {moment(dateTime).format('DD MMM ')}
        </Typography>{' '}
        <Typography component='p' variant='h5'>
          {moment(dateTime).format('hh:mm ')}
        </Typography>
        <Typography className={classes.title} component='p' variant='h4'>
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography className={classes.caption} component='p' variant='h6'>
          {name}
        </Typography>
        {editable && (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default CardEvent;
