import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import "../components/styles/index.scss"

const Port = () => (
  <Layout>
    <SEO title="portfolio" />
    {Banner("Name", "3rd Desc")}
    <div className="content">
      <h1>Hi from the portfolio page</h1>
      <p>Welcome to portfolio</p>
    </div>
  </Layout>
)

export default Port
