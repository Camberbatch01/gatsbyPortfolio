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
      <p>
        I was introduced to programming when I was 16, in college, where I was taught visual basic and introduced to some of the concepts related to the field.
      </p>
      <br></br>
      <p>
        I love solving problems and thinking analytically. For this reason, I studied mathematics at university where I sharpened my analytical
        mindset as well as being introduced to multiple programming languages.
        I did some programming in R, Matlab etc. Mainly mathematical based languages, 
        solving high level problems whilst learning new technology and new techniques.
      </p>
      <br></br>
      <p>
        I started learning more in depth after university. My main areas of expertise are JS and React, although I have experience in projects using other technologies, such as node.js.
        I am now looking for an opportunity to develop these skills in a professional environment and enhance my level of understanding.
      </p>
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
