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

      <div className="contact-container">
          <form  
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" />
              </label>
            </div>
            <div>
              <label htmlFor="name">Full Name*</label>
              <input type="text" name="name" id="name" required></input>
            </div>
            <div>
              <label htmlFor="email">Email*</label>
              <input type="email" name="email" id="email" placeholder="yourname@hotmail.com" required></input>
            </div>
            <div>
              <label htmlFor="message">Message*</label>
              <textarea name="message" id="message" type="text" required></textarea>
            </div>
            <div>
              <button id="submitForm" type="submit">Submit</button>
            </div>
          </form>

          <div className="contact-info">
            <p><FontAwesomeIcon icon="phone-square" className="icon" id="tel"/> 07464 936 728</p>
            <p><FontAwesomeIcon icon="envelope" className="icon" id="mail"/> cameron-moore@outlook.com</p>
          </div>

        </div>
      </div>
      
  </Layout>
)

export default IndexPage
