import React, { Fragment } from 'react'
import Nav from '../layout/shared/navBar'
import Footer from '../layout/shared/footer'

const common = props => {
    return (
        <Fragment>
            <Nav/>
                {props.children}
            <Footer/>
        </Fragment>
    )
}

export default common
