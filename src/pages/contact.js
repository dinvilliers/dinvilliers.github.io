import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact-wrapper">
	    <div className="contact">
	    	Talk to <span><a className="contact-me-link" href="mailto:hey@dinvillers.com">me</a></span> about your <span><a className="calendly-link" href="https://calendly.com/dinvilliers/consultation?month=2020-09">project</a></span>
	    </div>
	 </div>
  </Layout>
)

export default Contact
