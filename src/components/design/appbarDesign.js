import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useStyles} from '../../styles'
import { Link } from 'react-router-dom';

export default function AppBarDesign() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            <Link  to="/" className={classes.link}>
              NIXFLIX
            </Link>
          </Typography>
          <Link to="/movies" className={classes.link}>
          <Typography variant="button" className={classes.title}>
            BROWSE MOVIES
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
