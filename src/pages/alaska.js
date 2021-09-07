import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import alaska from "../images/alaska.jpg"
import alaska1 from "../images/Alaska Wordpress Theme.png"
import alaska2 from "../images/03_alaska.png"
import alaska3 from "../images/02_alaska.png"
import ScrollForMore from "../components/scrollForMore";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Alaska = () => (
  <Layout>
    <SEO title="Alaska" />
    <motion.h1 
    initial={{ opacity: 0}}
    animate={{ opacity: 1,
                y: 0,
                transition: { delay: 1.5, ...transition }}}
    className="page-heading">Alaska</motion.h1>
    <div className="page-image alaska-main-image">
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
    		<img alt="Alaska theme main image" src={alaska} />
    		</motion.div>
    </div>
    <div className="page-content">
		    <div className="page-header">
		    	<h2>Custom Wordpress Theme</h2>
		    	<Link className="project-redirect" to="http://alaska.dinvilliers.com">Visit Site</Link>
		    </div>
		    	<p className="page-paragraph">
		    		A friend of my mine wanted a simple but stylish Wordpress theme for their blog. I decided
		    		on a grid theme because the website is very picture heavy. Sadly, the
		    		website is not up anymore. But the demo is still active.
		    	 </p>
		    	 <div className="skills-table">
		    	  <p className="about-skill">Tools</p>
				    <ul className="about-skill-list skills-li">
				        <li>HTML</li>
				        <li>CSS</li>
				        <li>PHP</li>
				        <li>JavaScript</li>
				    </ul>
				  </div>
				  <img alt="Alaska theme 1" className="left-image" src={alaska1} />
				  <div className="juneau-images">
					  <img src={alaska2} alt="Alaska theme 2" />
					  <img src={alaska3} alt="Alaska theme 2" />
				  </div>
				  </div>
  </Layout>
)

export default Alaska