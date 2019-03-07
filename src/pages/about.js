import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import "../components/styles/index.scss"

const SecondPage = () => (
  <Layout>
    <SEO title="about" />
    {Banner("Name", "2nd Desc")}
    <div className="content">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </div>
  </Layout>
)

export default SecondPage
