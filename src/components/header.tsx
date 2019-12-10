import PropTypes from "prop-types"
import React from "react"
import Link from 'gatsby-link'

require('bootstrap/dist/css/bootstrap.min.css')

const agendaLink = "https://calendar.google.com/calendar/embed?src=6ugi0o6fa4ekj0ti78k1pjdt3k%40group.calendar.google.com&ctz=Europe%2FParis";

const Header = () => (
    <header
        style={{

            marginBottom: `1.45rem`,
        }}
    >
        <div>

            <h1>Gatsby the Robust</h1>
            <h2>Starter Kit</h2>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
