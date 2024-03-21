/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import {useGlobalStateContext} from "../context/globalContext"
import Cursor from "../components/customCursor"
import Navigation from "../components/navigation"


//styled components

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  cursor: none;
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
}

body {
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
}

.arrow,
.social-icons img {
  filter: ${props => props.theme.filter};
}

.slide-title {
  color: ${props => props.theme.title}
}

.slideButton {
   filter: ${props => props.theme.filter};
}

.main-title img {
  filter: ${props => props.theme.filter};
}

.main-title a, .main-title a:link, .main-title a:visited {
  color: ${props => props.theme.title};
}

.hamburger-menu span {
  background-color: ${props => props.theme.title};
}

.contact,
.project-contact {
  color: ${props => props.theme.text};
}

`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const darkTheme = {
    background: '#000',
    text: '#ffffff', 
    filter: 'invert(1)',
    title: '#000',
  }

   const lightTheme = {
    text: '#000',
    background: '#f2e6cf',
    filter: 'none',
    title: '#ffffff',
  }

   const {currentTheme} = useGlobalStateContext() || {}

   const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
    <GlobalStyle />
    <Cursor />
    <Header 
      toggleMenu={toggleMenu}
      setToggleMenu={setToggleMenu}
      />
    <Navigation 
      toggleMenu={toggleMenu}
      setToggleMenu={setToggleMenu}
      />
    <main>{children} </main>
   
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
