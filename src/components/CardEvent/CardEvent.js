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
    maxWidth: theme.spacing(60),
    minWidth: theme.spacing(35),
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    backgroundColor: '#ffc',
  },

  cover: {
    height: 'auto',
    objectFit: 'cover',
    flexGrow: 1,
  },

  title: {
    fontWeight: 600,
    fontFamily: 'Bad Script',
    lineHeight: 1.7,
  },
  content: {
    flexGrow: 1,
  },
  duration: {
    fontFamily: 'Bad Script',
  },
  caption: {
    marginRight: 'auto',
    textAlign: 'right',
    fontFamily: 'Bad Script',
    lineHeight: 1.7,
  },
}));

const CardEvent = ({ title, dateTime, name, editable, duration }) => {
  const classes = useStyles();
  return (
    <Card elevation={5} className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} component='p' variant='h4'>
          {moment(dateTime).format('DD MMM ')}
        </Typography>
        <Typography className={classes.title} component='p' variant='h4'>
          {moment(dateTime).format('hh:mm ')}
        </Typography>
        <Typography className={classes.title} component='p' variant='h4'>
          {title}
        </Typography>
        <Typography className={classes.duration} component='p' variant='h5'>
          {duration}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography className={classes.caption} component='span' variant='h5'>
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
