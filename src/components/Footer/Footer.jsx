import React from 'react'
import {
    Link
} from "react-router-dom";

const Footer = () => {
    return(
        <div>
            <Link to="/">Home </Link>
            <Link to="/suggestion">Suggestion</Link>
            <Link to="/impressum">Impressum</Link>
        </div>
    )
}

export default Footer