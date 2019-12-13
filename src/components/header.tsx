import PropTypes from "prop-types"
import React from "react"
import '../styles/home.scss'

const Header = () => (
    <header
        style={{

            marginBottom: `1.45rem`,
        }}
    >
        <div>

            <h1 className="title">Gatsby the Robust</h1>
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
