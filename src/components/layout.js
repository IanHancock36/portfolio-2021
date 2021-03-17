/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import{FaGithub,FaInstagramSquare,FaLinkedinIn} from 'react-icons/fa'
import Header from "./header"
import "./layout.css"
import backgroudVideo from '../backgroundVideo.mp4'

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

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <main
          style={{
            flexGrow: 1,
          }}
        >
          {children}
        </main>
      
        <footer className='footer'>
        
      
     
      
          <div className='footer__socials'>
          <a href ="lkfsjla">
            <FaLinkedinIn />
            </a>
          <a href ="fsa">
            <FaInstagramSquare />
            </a>
          <a href ="SAfa">
            <FaGithub />
            </a>
          </div>

          <div className= 'footer__attributions'>
          © {new Date().getFullYear()}, Ian Hancock
          </div>
       
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
