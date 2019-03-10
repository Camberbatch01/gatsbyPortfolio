import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import Image from "../components/image"
import "../components/styles/index.scss"
import "../components/styles/portfolio.scss"

const infoObj = {
  name: "Portfolio",
  desc: "Some projects I've worked on...",
  img: false
}

const Port = () => (
  <Layout>
    <SEO title="portfolio" />
    {Banner(infoObj)}
    <div className="content">
      <div className="portfolio">
        <div className="project1">
          <span className="img"><a href="https://inspiring-archimedes-a3ab05.netlify.com/">{Image()}</a></span>
          <span className="projText">
            <h3><a href="https://inspiring-archimedes-a3ab05.netlify.com/">Broomehill website</a></h3>
            <p>
              A project I worked on during my internship. A simple website, with blog integration, built from the ground up using gatsby with react.
              It was designed more as a template with generic information that would be changed later.
            </p>
          </span>
        </div>
        <div className="project2">
          <span className="img"><a href="https://sleepy-ravine-75565.herokuapp.com/">{Image()}</a></span>
          <span className="projText">
            <h3><a href="https://sleepy-ravine-75565.herokuapp.com/">Flashcard App</a></h3>
            <p>
              A project I worked on to get to grips with back-end. A Flashcard app built with node.js, express, mongoose and ejs.
              Allows a user to add/edit/remove decks and their cards inside. A quiz also tests your knowledge of a particular deck.
            </p>
          </span>
        </div>
      </div>
      <p className="github">More projects are on my github. View the code repositories at <a href="https://github.com/Camberbatch01"><i>https://github.com/Camberbatch01</i></a></p>
    </div>
  </Layout>
)

export default Port
