import React, { PureComponent } from 'react'
import {Grid, Typography} from '@material-ui/core'
import AppBarDesign from '../design/appbarDesign'

class HomeComponent extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <AppBarDesign />
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <Typography align="center">
                            <img src="media\cover\HOMEPAGE.jpg" height="auto" width="100%"/>
                        </Typography>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default HomeComponent
