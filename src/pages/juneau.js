import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import juneau from "../images/juneau.jpg"
import juneau1 from "../images/Screenshot 1.jpg"
import juneau2 from "../images/Screenshot 2.jpg"
import juneau3 from "../images/Screenshot 3.jpg"
import juneau4 from "../images/Screenshot 4.jpg"
import juneau5 from "../images/Screen5.jpg"
import juneau6 from "../images/Screen6.jpg"
import juneau7 from "../images/Screen7.jpg"
import juneau8 from "../images/Screen8.jpg"
import ScrollForMore from "../components/scrollForMore";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Juneau = () => (
<Layout>
  <motion.div className="Juneau page-wrapper">
    <SEO title="Juneau" />
    <motion.h1 
    initial={{ opacity: 0}}
    animate={{ opacity: 1,
                y: 0,
                transition: { delay: 1.5, ...transition }}}
    className="page-heading">Juneau</motion.h1>
    	<div className="page-image">
    	 <motion.div 
    	  initial={{ width: 628, 
    	  			height: 650,
    	  			y: "-10%" }}
    	  animate={{
    	  	y: "10%",
    	  	width: "100%",
    	  	height: 550,
    	  	transition: {delay: .2, ...transition}
    	  }}
    	  className="thumbnail-single">
	    	<ScrollForMore />
	    		<img src={juneau} alt="Juneau main"  />
	    		</motion.div>
	    </div>
	    <div className="page-content">
		    <div className="page-header">
		    	<h2>A Tumblr theme</h2>
		    	<Link className="project-redirect" to="https://www.tumblr.com/theme/40763">Visit Site</Link>
		    </div>
		    	<p className="page-paragraph">
		    		I created a customisable 2 column grid Tumblr theme which displays all post types. 
		    		I just wasn't happy with the Tumblr theme I was using so I decided to create one 
		    		myself from scratch. The theme was approved by Tumblr and is currently available to 
		    		users all over the world.
		    	 </p>
		    	 <div className="skills-table">
		    	  <p className="about-skill">Tools</p>
				    <ul className="about-skill-list">
				        <li>HTML</li>
				        <li>CSS</li>
				        <li>JavaScript</li>
				    </ul>
				  </div>
				  <div className="juneau-images">
					  <img src={juneau1} alt="Juneau 1" />
					  <img src={juneau2} alt="Juneau 2" />
					  <img src={juneau7} alt="Juneau 3" />
					  <img src={juneau8} alt="Juneau 4" />
					  <img src={juneau3} alt="Juneau 5" />
					  <img src={juneau4} alt="Juneau 6" />
					  <img src={juneau5} alt="Juneau 7" />
					  <img src={juneau6} alt="Juneau 8" />
				  </div>
	    </div>
    </motion.div>
  </Layout>
)

export default Juneau
