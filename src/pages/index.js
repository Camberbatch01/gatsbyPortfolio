import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import "../components/styles/index.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faPhoneSquare)
library.add(faEnvelope)

const infoObj = {
  name: "Cameron Moore",
  desc: "Maths graduate, aspiring software developer",
  img: true
}


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {Banner(infoObj)}
    <div className="content">
      <h3>Contact Me</h3>
      <p><FontAwesomeIcon icon="phone-square" className="icon" id="tel"/> 07999 999 999</p>
      <p><FontAwesomeIcon icon="envelope" className="icon" id="mail"/> cameron-moore@outlook.com</p>
    </div>
  </Layout>
)

export default IndexPage
