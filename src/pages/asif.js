import React from "react"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import asif from "../images/asifclueless main.jpeg"
import asif1 from "../images/asif2.png"
import asifcolourscheme from "../images/as if colour scheme.png"
import asifiphonecollage from "../images/as if iphone display.jpg"
import asif2 from "../images/asif3.png"
import asif3 from "../images/asif4.png"
import asiflogo from "../images/logo circular.png"

import asiflogin1 from "../images/Login.png"
import asiflogin2 from "../images/Log-In Page.png"
import asifiphone1 from "../images/asifiphone1.png"
import asifiphone2 from "../images/asifiphone2.png"
import asifiphone3 from "../images/asifiphone3.png"
import clip1 from "../videos/asif.mp4"
import ScrollForMore from "../components/scrollForMore";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const AsIf = () => (
  <Layout>
    <SEO title="As If" />
    <motion.h1 
    initial={{ opacity: 0}}
    animate={{ opacity: 1,
                y: 0,
                transition: { delay: 1.5, ...transition }}}
    className="page-heading">As If</motion.h1>
    <div className="page-image As If-main-image">
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
    		<img alt="As If theme main image" src={asif} />
    		</motion.div>
    </div>
    <div className="page-content">
		    <div className="page-header">
		    	<h2>iPhone Application for my final year project at university</h2>
		    	
		    </div>
		    	<p className="page-paragraph">
		    		For my final year project at university, I decided to build a digital closet iPhone application inspired by Clueless (1995).
                    The objective is to be able to upload images of items in your closet, create outfits and save outfits.
		    	 </p>
		    	 <div className="skills-table">
		    	  <p className="about-skill">Tools</p>
				    <ul className="about-skill-list skills-li">
				        <li>Swift</li>
                <li>XCode</li>
				        <li>Sketch</li>
                <li>Figma</li>
				        <li>Firebase</li> 
				    </ul>
				  </div>

                  <p className="page-paragraph">
                      This was the hardest individual project I have embarked on to date but also the most rewarding. I worked on this, with guidance from my supervisor, for the better part of an entire acaedmic year while writing my dissertation.
                      I had no previous experience with mobile application development, just an idea and a desire to learn.
                      <br>
                      </br>
                  </p>

                  <img alt="As If theme 1" className="left-image asifiphonecollage" src={asifiphonecollage} />
                   <br>
                  </br>

                  <p className="page-paragraph as-if-paragraph">
                  <br>
                  </br>
                  <br>
                  </br>
                  <br>
                  </br>
                      Firstly, I designed mockups of the application using Sketch before implementing anything. 
                      I decided to use Apple's native programming language because it makes the most sense since I am
                       building a native iPhone application. Initially, deciding between Swift and SwiftUI was a difficult choice but 
                       ultimately, I chose Swift because it gave me more freedom.
                    </p>

				  
				  <div className="juneau-images">
					  <img className="asiflogo" src={asiflogo} alt="As If 2" />

                      <img className="asiflogin1" src={asiflogin1} alt="As If 2" />
                      <img className="asiflogin2" src={asiflogin2} alt="As If 2" />

                      <p className="page-paragraph asifcaption">
                      Mockups of the login screen
                      </p>

				  </div>

                  <p className="page-paragraph as-if-paragraph-next">
                       Using Firebase as the backend, profile images and closet item images are stored in a storage bucket while email addresses and names are in a database. Authentication is
                       done using Firebase Authentication.
                  </p>

                  <div className="juneau-images as-if-images">

                       <img className="asifiphone1" src={asifiphone1} alt="As If iPhone home screenshot" />
                        <img className="asifiphone2" src={asifiphone2} alt="As If iPhone login screenshot" />
                         <img className="asifiphone3" src={asifiphone3} alt="As If iPhone sign up screenshot" />

                        <p className="page-paragraph asifcaption">
                            Final implementation
                      </p>
                  </div>
                 

				  </div>
  </Layout>
)

export default AsIf