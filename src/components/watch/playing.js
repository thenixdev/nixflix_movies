import React from 'react'
import AppBarDesign from '../design/appbarDesign'
import { Grid, Typography, Paper, Divider } from '@material-ui/core'
import {moviesList} from '../moviesList'

function Playing(props) {
    const [details, setDetails] = React.useState();

    React.useEffect(() => {
        moviesList.map(movies => {
            if(movies.movieTitle === props.match.params.title) {
                setDetails(movies.movieDescription)
            }
        })
    }, [])

    return (
        <React.Fragment>
            <AppBarDesign />
            <Grid container>
      
                <Grid item xs={12} >
                    <Paper elevation={2} style={{padding: '15px'}}>
                        <Typography variant="h4" align="center">
                            {props.match.params.title}
                        </Typography>
                        <Divider />
                        <Typography  align="center">
                            {details}
                        </Typography>
                    </Paper>
                </Grid>
       
               
                <Grid item xs={12} style={{padding: '15px', marginTop: '5px'}}>
                <Typography align="center">
                    <video width="90%" height="70%" controls controlsList="nodownload" autoPlay>
                        <source src={`\\movies\\${props.match.params.title}.mp4`} type="video/mp4" />
                        <Typography>Your browser does not support the video tag.</Typography>
                    </video>
                </Typography>
                </Grid>
                
               
            </Grid>
        </React.Fragment>
    )
}

export default Playing
