import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import "../components/styles/index.scss"

const name = "Cameron Moore"
const desc = "Maths graduate, aspiring software developer"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {Banner(name, desc)}
    <div className="content">
      <h3>Contact Me</h3>
      <p>07999 999 999</p>
      <p>cameron-moore@outlook.com</p>
    </div>
  </Layout>
)

export default IndexPage
