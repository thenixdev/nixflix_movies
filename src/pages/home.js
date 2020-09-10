import React, { PureComponent } from 'react'
import HomeComponent from '../components/home/homeComponent'

export class Homepage extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <HomeComponent />
            </React.Fragment>
        )
    }
}

export default Homepage
