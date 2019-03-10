import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link} from "gatsby"
import Banner from "../components/banner"
import "../components/styles/404.scss"

const info = {
  name: "NOT FOUND",
  desc: "You just hit a route that doesn't exist... the sadness."
}
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    {Banner(info)}
    <div className="content">
      <h4>Perhaps you were looking for one of these?</h4>
      <ul>
        <li className="optionLink"><Link to="/">Home page: /</Link></li>
        <li className="optionLink"><Link to="/about">About page: /about</Link></li>
        <li className="optionLink"><Link to="/portfolio">Portfolio page: /portfolio</Link></li>
      </ul>
    </div>
  </Layout>
)

export default NotFoundPage
