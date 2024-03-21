import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import thecar from "../images/thecar.jpg"
import thecar1 from "../images/thecar1.png"
import thecar2 from "../images/thecar2.png"
import thecar3 from "../images/thecar3.png"
import thecarvideo from "../videos/thecar.mp4"
import ScrollForMore from "../components/scrollForMore";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const TheCar = () => (
	<Layout>
   <motion.div className="page-wrapper">
    <SEO title="The Car" />
    <motion.h1 
    initial={{ opacity: 0}}
    animate={{ opacity: 1,
                y: 0,
                transition: { delay: 1.5, ...transition }}}
    className="page-heading">The Car</motion.h1>
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
	    		<img src={thecar} alt="The Car main" className="thecarmain" />
	    		</motion.div>
	    </div>
	    <div className="page-content">
		    <div className="page-header">
		    	<h2>Countdown landing page</h2>
		    	<Link className="project-redirect" to="https://thecar.dinvilliers.com/">Link</Link>
		    </div>
		    	<p className="page-paragraph">
		    		A basic but stylish countdown landing page until Arctic Monkeys' 7th studio album is released.
		    		It was designed by UI/UX designer, Andrea Scandurra.
		    	 </p>
		    	 <div className="skills-table">
		    	  <p className="about-skill">Tools</p>
				    <ul className="about-skill-list">
				        <li>HTML</li>
				        <li>CSS</li>
				        <li>JavaScript</li>
				    </ul>
				  </div>
				  <div className="thecar-images">
				  	<img src={thecar1} alt="The Car landing page 1" />
				  </div>

				  <video autoPlay loop muted className="page-video-first">
          			<source src={thecarvideo} type="video/mp4">
		          	</source>	
		       	  </video>	
		       	  <br />
		       	  <br />
		       	  <br />
		       	  <br />
		       	  <div className="thecar-images">
				  	<img src={thecar2} alt="The Car landing page 2" />
				  	<img src={thecar3} alt="The Car landing page 3" />
				  </div>


	    </div>
    </motion.div>
  </Layout>
)

export default TheCar
