import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import "../components/styles/index.scss"
import "../components/styles/portfolio.scss"
import PortfolioImage from "../components/portfolioImage"
import PortfolioImg2 from "../components/portfolioImg2"

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
          <span className="img"><a href="https://inspiring-archimedes-a3ab05.netlify.com/">{PortfolioImage()}</a></span>
          <span className="projText">
            <h3><a href="https://inspiring-archimedes-a3ab05.netlify.com/">Broomehill website</a></h3>
            <p>
              A project I worked on during my internship. A website with blog integration, built from the ground up using gatsby with react.
              Home page with banner, info and link to latest blog post. Blog page, with integrated tags and date filters, and a contact page that emails you directly. 
            </p>
          </span>
        </div>
        <div className="project2">
          <span className="img"><a href="https://sleepy-ravine-75565.herokuapp.com/">{PortfolioImg2()}</a></span>
          <span className="projText">
            <h3><a href="https://sleepy-ravine-75565.herokuapp.com/">Flashcard App</a></h3>
            <p>
              A project I worked on with the inspiration of language learning, but can be used for anything. A Flashcard app built with node.js, express, mongoose and ejs.
              Allows a user to add/edit/remove decks and their cards inside. Can share your decks to a community page that all users can see, where you, or other users can download another's deck.
              You can also learn your decks through a test where you have to guess the word, given the front of the card.
            </p>
          </span>
        </div>
      </div>
      <p className="github">More projects are on my github. View the code repositories at <a href="https://github.com/Camberbatch01"><i>https://github.com/Camberbatch01</i></a></p>
    </div>
  </Layout>
)

export default Port