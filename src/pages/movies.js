import React, { PureComponent } from 'react'
import MoviesComponent from '../components/movies/movies'

export class MoviesPage extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <MoviesComponent />
            </React.Fragment>
        )
    }
}

export default MoviesPage
