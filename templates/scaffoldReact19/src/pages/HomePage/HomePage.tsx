import React from 'react'
import PropTypes from 'prop-types'

const HomePage = (props) => {
    return (
        <>
            <h1>Home Page</h1>
            <p>{{ props }}</p>
        </>
    )
}

HomePage.propTypes = {}

export default HomePage
