import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import "../components/styles/index.scss"

const name = "About";
const desc = "Just a little about me...";

const SecondPage = () => (
  <Layout>
    <SEO title="about" />
    {Banner(name, desc)}
    <div className="content">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
    </div>
  </Layout>
)

export default SecondPage
