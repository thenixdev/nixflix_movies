import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: 'white'
  },
  root: {
    flexGrow: 1,
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))