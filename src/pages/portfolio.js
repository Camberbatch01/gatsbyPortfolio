import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import "../components/styles/index.scss"

const name = "Portfolio";
const desc = "Some projects I've worked on...";

const Port = () => (
  <Layout>
    <SEO title="portfolio" />
    {Banner(name, desc)}
    <div className="content">
      <h1>Hi from the portfolio page</h1>
      <p>Welcome to portfolio</p>
    </div>
  </Layout>
)

export default Port
