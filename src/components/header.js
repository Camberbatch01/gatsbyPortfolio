import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../components/styles/nav.scss"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'


library.add(faBars)

const toggleOptions = () =>{
  const menu = document.getElementById("toggleOpt");

  if (menu.className === "small-screen-nav"){
    return menu.className = "small-screen-nav-on";
  } 
  if (menu.className === "small-screen-nav-on"){
    return menu.className = "small-screen-nav";
  }
}

const Header = ({ siteTitle }) => (
  <header className="navBar">
    <div className="topBar">
      <ul className="container">
        <li className="myName">
          <Link className="navLinks" to="/">
            {siteTitle}
          </Link>
        </li>
        <div className="large-screen-nav">
          <li><Link className="navLinks" activeStyle={{color: "rgb(51, 131, 180)"}} to={`/about/`}>about</Link></li>
          <li><Link className="navLinks" activeStyle={{color: "rgb(51, 131, 180)"}} to="/portfolio">portfolio</Link></li>
        </div>
        <button className="options-toggle" onClick={()=>toggleOptions()}><FontAwesomeIcon icon="bars"/></button>
      </ul>
    </div>
    <div className="bottomBar">
      <div className="small-screen-nav" id="toggleOpt">
        <ul>
          <li><Link className="navLinks" activeStyle={{color: "rgb(51, 131, 180)"}} to={`/about/`}>about</Link></li>
          <li><Link className="navLinks" activeStyle={{color: "rgb(51, 131, 180)"}} to="/portfolio">portfolio</Link></li>
        </ul>
      </div>
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
