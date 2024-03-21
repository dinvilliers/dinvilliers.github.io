import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion";
import svg from "../images/hand.svg"
import github from "../images/github.png"
import dribbble from "../images/dribbble.png"
import email from "../images/email.png"
import linkedin from "../images/linkedin.png"

  const menuBackgroundOriginal = () => {
      document.getElementsByTagName("main")[0].style.display = 'initial';
      document.getElementsByClassName("hamburger-menu")[0].style.display = 'initial';
   };

const Navigation = ({toggleMenu, setToggleMenu}) => (

 <>
      
        {toggleMenu && (
    <div className="nav-container">
      <button className="hamburger-menu close-nav" onClick={() => setToggleMenu(!toggleMenu) & menuBackgroundOriginal()}>
              <span></span>
              <span></span> 
          </button>
    <nav>
      <ul>

        <div className="main-links">

          <li>
          <a href="/">
          <motion.div
           initial={{x: -108}}
            whileHover={{ x: 40,
            transition: {
              duration: 0.4,
              ease: [0.6, 0.5, -0.1, 0.9]
            }
            }}
          >
          <span className="arrow">
             <img alt="hand icon" src={svg}/>
          </span>
          Work
          </motion.div>
          </a>
          </li>
          
         
          <li>
          <Link to="/about">
          <motion.div
           initial={{x: -108}}
            whileHover={{ x: 40,
            transition: {
              duration: 0.4,
              ease: [0.6, 0.5, -0.1, 0.9]
            }
            }}
          >
          <span className="arrow">
             <img alt="hand icon" src={svg}/>
          </span>
          About
          </motion.div>
          </Link>
          </li>

          <li>
          <Link to="/contact">
          <motion.div
           initial={{x: -108}}
            whileHover={{ x: 40,
            transition: {
              duration: 0.4,
              ease: [0.6, 0.5, -0.1, 0.9]
            }
            }}
          >
          <span className="arrow">
             <img alt="hand icon" src={svg}/>
          </span>
          Contact
          </motion.div>
          </Link>
          </li>


        </div>
      </ul>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/dinvilliers/"><img src={linkedin} alt="linkedin"/></a>
	      <a href="https://github.com/dinvilliers"><img src={github} alt="github"/></a>
	      <a href="https://dribbble.com/dinvilliers"><img src={dribbble} alt="dribbble"/></a>
	      <a href="mailto:hey@dinvillers.com"><img src={email} alt="email"/></a>
      </div>
    </nav>
    </div>
        )}
     
    </>

)

export default Navigation
