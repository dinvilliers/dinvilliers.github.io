import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import mouse from "../images/mouse.png"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact-wrapper">
	    <div className="contact">
	    	Talk to <span><a className="contact-me-link" href="mailto:hey@dinvillers.com">me</a><img className="email-mouse" src={mouse} /></span> about your <span><a className="project-contact">project</a></span>
	    
	    </div>
	 </div>
  </Layout>
)

export default Contact
