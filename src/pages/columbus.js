import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import columbus from "../images/columbus.jpg"
import columbus1 from "../images/columbus1.png"
import iphone from "../images/iphone-columbus.png"
import clip1 from "../videos/columbusVid1.mp4"
import clip2 from "../videos/columbusVid2.mp4"
import ScrollForMore from "../components/scrollForMore";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Columbus = () => (
  <Layout>
  <motion.div className="page-wrapper">
    <SEO title="Columbus" />
    <motion.h1 
    initial={{ opacity: 0}}
    animate={{ opacity: 1,
                y: 0,
                transition: { delay: 1.5, ...transition }}}
    className="page-heading">Columbus</motion.h1>
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
	    		<img alt="Columbus main" src={columbus} />
	       </motion.div>
	    </div>
	    <div className="page-content">
		    <div className="page-header">
		    	<h2>An interactive map based off my favourite film, Columbus (2017)</h2>
		    	<Link className="project-redirect" to="https://columbus.dinvilliers.com">Visit Site</Link>
		    </div>
		    	<p className="page-paragraph">
		    		A passion project keeping me busy during the summer of COVID-19. I love architecture and film
		    	   so it's no surprise my favourite film is about both. Jin (John Cho) finds himself in Columbus,
		    	   Indiana - sort of an underrated modernist mecca in the midwest - after his father falls ill. Casey (Haley Lu Richardson) is a Columbus native and 
		    	   architecture enthusiast. Somehow they both cross paths and explore the city, its relationship
		    	   to architecture and their own dilemmas.
		    	 </p>
		    	 <div className="skills-table">
		    	  <p className="about-skill">Tools</p>
				    <ul className="about-skill-list skills-li">
				        <li>JavaScript</li>
				        <li>React JS</li>
				        <li>Google Maps API</li>
				    </ul>
				  </div>
				  <p className="page-paragraph">
				  Using the Google Maps API, I mapped out all the locations filmed during the movie to create
				  an interactive map using filming locations. Fellow film lovers can learn more about the architecture
				  and the significance of each location to Casey and Jin.
				  </p>
				  <img alt="Columbus theme 1" className="left-image" src={columbus1} />

				  <video autoPlay loop muted className="page-video-first">
          			<source src={clip1} type="video/mp4">
		          	</source>	
		       	  </video>

		       	  <img alt="Columbus iPhone Mockup" className="iphone-mockup" src={iphone}/>

		       	  <video autoPlay loop muted className="page-video-first">
          			<source src={clip2} type="video/mp4">
		          	</source>	
		       	  </video>
	    </div>
    </motion.div>
  </Layout>
)

export default Columbus
