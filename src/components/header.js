import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../components/styles/nav.scss"

const Header = ({ siteTitle }) => (
  <header className="navBar">
    <ul className="container">
      <li className="myName">
        <Link className="navLinks" to="/">
          {siteTitle}
        </Link>
      </li>
      <li><Link className="navLinks" activeStyle={{color: "rgb(51, 131, 180)"}} to={`/about/`}>about</Link></li>
      <li><Link className="navLinks" activeStyle={{color: "rgb(51, 131, 180)"}} to="/portfolio">portfolio</Link></li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
