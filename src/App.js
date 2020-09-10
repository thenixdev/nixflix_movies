import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Homepage from './pages/home';
import MoviesPage from './pages/movies';
import Playing from './components/watch/playing';
import { Paper, Grid, Typography } from '@material-ui/core';



function App() {

  return (
      <React.Fragment>
        <Router>
          <Switch>
              <Route exact path="/" component={Homepage}/>
              <Route path="/movies" component={MoviesPage}/>
              <Route path="/watch/:title" component={Playing} />
          </Switch>
        </Router>
        <footer>
        <Grid container>
          <Grid item xs={12}>
            <Paper elevation={1} style={{padding: '10px', position: 'fixed', left: 0, bottom: 0, width: '100%'}}>
              <Typography align="center">NixFlix Movies</Typography>
            </Paper>
          </Grid>
        </Grid>
        </footer>
      </React.Fragment>
  );
}

export default App;
