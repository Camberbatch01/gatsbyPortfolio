import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Image from "../components/image"
import "../components/styles/index.scss"
import "../components/styles/portfolio.scss"

const name = "Portfolio";
const desc = "Some projects I've worked on...";

const Port = () => (
  <Layout>
    <SEO title="portfolio" />
    {Banner(name, desc)}
    <div className="content">
      <div className="portfolio">
        <div className="project1">
          <span className="img">{Image()}</span>
          <span className="projText">Text</span>
        </div>
        <div className="project2">
          <span className="img">{Image()}</span>
          <span className="projText">Text</span>
        </div>
      </div>
      <p className="github">More projects are on my github. View the code repositories at <a href="https://github.com/Camberbatch01"><i>https://github.com/Camberbatch01</i></a></p>
    </div>
  </Layout>
)

export default Port
