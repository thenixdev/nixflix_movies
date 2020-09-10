import React, { PureComponent } from 'react'
import AppBarDesign from '../design/appbarDesign'
import { Grid } from '@material-ui/core'
import CardDesign from '../design/cardDesign'
import {moviesList} from '../moviesList'
export class MoviesComponent extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <AppBarDesign />
                <Grid container style={{padding: '15px'}}>
                    {moviesList.map(movies => <Grid item md={3} xs={6} style={{ justifyContent: 'center',display: 'flex'}}>
                        <CardDesign image={movies.imageURL} movieTitle={movies.movieTitle} movieDescription={movies.movieDescription}/>
                    </Grid>)}
                    
                   
                </Grid>
            </React.Fragment>
        )
    }
}

export default MoviesComponent
