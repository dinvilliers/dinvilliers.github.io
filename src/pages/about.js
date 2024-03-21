import React, {useEffect } from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion";

import Layout from "../components/layout"
import SEO from "../components/seo"
import me from "../images/me.jpg"
import getintouch from "../images/getintouch.svg"

//scroll

import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"

const About = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

return (

  <Layout>
  <div className="about-container">
  <div className="about-upper-container">
  <div className="about-upper-inner">
    <SEO title="About" />
    <motion.p 
    animate={{ y: 0, opacity: 1 }}
      initial={{ y: -400, opacity: 0 }}
      transition={{
        duration: 1.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    className="about-intro">
        Hi! I'm Wolfgang D'Invilliers-Saint-Laurent, a web designer from London.
    </motion.p>
    <motion.p 
    animate={{ x: 0, opacity: 1 }}
      initial={{ x: -500, opacity: 0 }}
      transition={{
        duration: 2.8,
        ease: [0.6, 0.05, -0.01, 0.9],
        delay: 1
      }}
    className="about-main">
        A dynamic creative thinker with a proven track record and extensive knowledge of building and designing websites.
    </motion.p>
    </div>
    </div>
    <motion.div 
     ref={contentRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    className="about-transition">
    <p className="about-skill">Skills</p>
    <ul className="about-skill-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>UI</li>
        <li>UX</li>
    </ul>
    
    
    <p className="about-skill learning">Learning</p>
    <ul className="about-skill-list">
        <li>Node JS</li>
        <li>Swift</li>
    </ul>
    
    <p className="about-skill">Pronunciation</p>
    <ul className="about-skill-list">
        <li>Don-vil-yay</li>
    </ul>
    </motion.div>

   
   <h3 className="university-title">Computer Science BSc (Hons) - 2:1 - London South Bank University</h3> 
    <div className="university">
       <ul>  
       <li>Skills for Academic Study</li>
       <li>The Digital Age</li>
       <li>Using Numeracy, Data and IT</li>
       <li>Computers in Society</li>
       <li>Computing Fundamentals</li>
       <li>Research Skills</li>
       <li>Professional Development</li>
       <li>Computer Technology</li>
       <li>Website Design</li>
       <li>Database Design</li>
       <li>Software Engineering</li>
       <li>Information Systems in Organisations</li>
        <li>Advanced Programming</li>
        <li>Big Data and Database Systems </li>
        <li>Object-Oriented Programming</li>
         <li>Operating Systems</li>
        <li>Principles of Data Networks</li>
        </ul>
        <div className="date-wrapper">
          <p className="date">2021</p>
        </div>
    </div>

    
    <p className="about-more">
        Although, I have been designing websites since a teenager - I would like to 
        improve my skills by challenging myself with real world applications.
        I have a keen eye for detail and I love working on new projects.
    </p>

    <div className="about-image-wrapper">

      <img alt="Me" className="about-image" src={me}/>

      <p className="about-career">
      I am currently seeking <br /> full time employment.
      <br />
       <span className="about-note">P.S. I am open to relocation.</span>
       <br />
      <Link to="/contact"><img alt="get in touch hand icon" className="getintouchsvg" src={getintouch} /></Link>
      </p>

    </div>

   </div>
  </Layout>
)
}

export default About
