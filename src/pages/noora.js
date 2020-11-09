import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import noora from "../images/noora.jpg"
import noora1 from "../images/noora.png"
import noora2 from "../images/noora-2.png"
import ScrollForMore from "../components/scrollForMore";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Noora = () => (
	<Layout>
   <motion.div className="page-wrapper">
    <SEO title="Noora" />
    <motion.h1 
    initial={{ opacity: 0}}
    animate={{ opacity: 1,
                y: 0,
                transition: { delay: 1.5, ...transition }}}
    className="page-heading">Noora</motion.h1>
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
	    		<img src={noora} alt="Noora main" />
	    		</motion.div>
	    </div>
	    <div className="page-content">
		    <div className="page-header">
		    	<h2>Full screen grid Tumblr</h2>
		    	<Link className="project-redirect" to="#">Coming Soon</Link>
		    </div>
		    	<p className="page-paragraph">
		    		Another foray into Tumblr theme development. This stylish full screen visual moodboard theme is a 
		    		passion project I'm currently working on.
		    	 </p>
		    	 <div className="skills-table">
		    	  <p className="about-skill">Tools</p>
				    <ul className="about-skill-list">
				        <li>HTML</li>
				        <li>CSS</li>
				        <li>JavaScript</li>
				    </ul>
				  </div>
				  <div className="noora-images">
				  	<img src={noora2} alt="Noora 1" />
				  	<img src={noora1} alt="Noora 1" />
				  </div>
	    </div>
    </motion.div>
  </Layout>
)

export default Noora
