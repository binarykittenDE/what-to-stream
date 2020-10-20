import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = props => {
    const {title, subtitle} = props
    return(
        <div className="sidebar">
            <div>{title}</div>
            <div>{subtitle}</div>
        </div>
    )
}
Sidebar.props = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

export default Sidebar