import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import "../components/styles/index.scss"
import "../components/styles/about.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic, faMugHot, faDumbbell, faTv } from '@fortawesome/free-solid-svg-icons'


library.add(faMusic)
library.add(faMugHot)
library.add(faDumbbell)
library.add(faTv)

const infoObj = {
  name: "About",
  desc: "Just a little about me...",
  img: false
}

const SecondPage = () => (
  <Layout>
    <SEO title="about" />
    {Banner(infoObj)}
    <div className="content">
      <p>Hey! I'm Cameron, a graduate in Mathematics, looking to get into web development.</p><br></br>
      <p>I was introduced to programming when I was 16 in college, where I was taught visual basic. I did decide to do mathematics at university though as its a broader area and allowed me more career options, including programming.</p><br></br>
      <p>During university, I did some programming in R, Matlab etc. Mainly mathematical based languages, so you could say I haven't stopped programming since I was 16, however not in depth.</p><br></br>
      <p>After university, I decided I wanted a career as a developer and started learning in depth. My main areas of expertise are JS and React, although I have experience in projects using other technologies, such as node.js</p>
      <br></br>
      <h3>Interests</h3>
      <ul className="interests">
        <li><FontAwesomeIcon icon="music" className="icon" id="piano"/> Piano</li>
        <li><FontAwesomeIcon icon="mug-hot" className="icon" id="mug"/> Tea</li>
        <li><FontAwesomeIcon icon="tv" className="icon" id="anime"/> Anime</li>
        <li><FontAwesomeIcon icon="dumbbell" className="icon" id="gym"/> Gym</li>
      </ul>
    </div>
  </Layout>
)

export default SecondPage
