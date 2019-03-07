import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Banner from "../components/banner"
import "../components/styles/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {Banner("Name", "Desc")}
    <div className="content">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <p>Mollit incididunt laboris consequat magna fugiat aliqua nostrud sunt. Consequat cupidatat ad ad sint. Laboris duis reprehenderit aute proident esse aute anim do sit enim sit. Fugiat cupidatat proident irure laboris exercitation ut magna.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
