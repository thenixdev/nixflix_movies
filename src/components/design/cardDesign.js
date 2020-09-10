import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: '5px',
    marginLeft: '5px',
  },
  media: {
    height: 140,
  },
  link: {
    textDecoration: 'none',
    color: 'white'
  }
});

export default function CardDesign(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.movieTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.movieTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.movieDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained">
          <Link to={`/watch/${props.movieTitle}`} className={classes.link}>Watch Now</Link>
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
