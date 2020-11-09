import { Link } from "gatsby"
import React, {useEffect} from "react"
import styled from 'styled-components'
import logo from '../images/logo.png'
import { motion } from "framer-motion";

import {useGlobalStateContext, useGlobalDispatchContext} from "../context/globalContext"

const HeaderNav = styled(motion.div)`

  position: fixed;
  top: 15px;
  text-align: center;
  width: 100%;
  font-family: Druk Wide Super;
  z-index: 999;

`;

const Header = ({setToggleMenu, toggleMenu}) => {
  const dispatch = useGlobalDispatchContext()
  const {currentTheme} = useGlobalStateContext() || {}

const toggleTheme = () => {
  if (currentTheme === 'dark') {
      dispatch({type: 'TOGGLE_THEME', theme: "light" })
  } else {
      dispatch({type: 'TOGGLE_THEME', theme: "dark" })
  }
}

useEffect(() => {
  window.localStorage.setItem('theme', currentTheme)
}, [currentTheme])

 const menuBackground = () => {
      document.getElementsByTagName("main")[0].style.display = 'none';
      document.getElementsByClassName("hamburger-menu")[0].style.display = 'none';
   };

  return  (
  <HeaderNav 
      animate={{ y: 0, opacity: 1 }}
        initial={{ y: -72, opacity: 0 }}
        transition={{
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
    >
    <div className="main-title">
       <Link to="/"> D'Invillers</Link>
        <img alt="logo" src={logo} onClick={toggleTheme}/>
          <button className="hamburger-menu" onClick={() => setToggleMenu(!toggleMenu) & menuBackground()}>
              <span></span>
              <span></span> 
          </button>
      </div>
    </HeaderNav>

    )
}

export default Header
