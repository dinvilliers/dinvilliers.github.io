import React from "react"
import { Link } from "gatsby"
import { ArenguForm } from "gatsby-plugin-arengu-forms"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact-wrapper">
	    <div className="contact">
	    	Talk to <span><a className="contact-me-link" href="mailto:hey@dinvillers.com">me</a></span>
	   
	    	<form method="post" action="https://getform.io/f/f29b6f46-2289-4c12-b67c-fd7bab1d212c" class="contact-form">
			  <label>
			    Email*
			    <input type="email" name="email" placeholder="Email address" required/>
			  </label>
			  <label>
			    Name*
			    <input type="text" name="name" placeholder="Full name" required />
			  </label>
			  <label class="project-class">
			  Project
			  <select name="project">
			    <option value="static">Static website</option>
			    <option value="ecommerce">E-commerce website</option>
			    <option value="iphone">iPhone application</option>
			    <option value="uiux">UI/UX Design</option>
			    <option value="other">Other</option>
			  </select>
			  </label>
			  <label>
			    Budget 
			    <input type="text" name="budget" placeholder="£GBP" />
			  </label>
			  <label class="message-box">
			    Message*
			    <input type="text" name="message" placeholder="Message" required />
			  </label>
			  <button type="submit">Send</button>

			</form>


	    </div>
	 </div>
  </Layout>
)

export default Contact
