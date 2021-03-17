import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import backgroudVideo from '../backgroundVideo.mp4'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
     <div>
      <video className='video' autoPlay loop muted id='video'>
        <source src = {backgroudVideo} type='video/mp4'/>
      </video>
      </div>
    <SEO title="Home" />
    <header className="header">
     <div className="header__intro">
      {/* <video className='video' autoPlay loop muted id='video'>
        <source src = {backgroudVideo} type='video/mp4'/>
      </video> */}
        <h1>Hello I'm Ian</h1>
        <p>
          I am a Front End Devloper that is Passionate about making things for
          the Web.
        </p>

      </div>
    </header>
    <section className='about_me'>
      <div className='about_section'>
        <h2>About Me</h2>
        <p>this is my about me section</p>
      </div>



    </section>
    <section className="projects">

      <div className="projects__card">
        <div className='projects__card__description'>
        <h2> FaceBook Clone</h2>
        <p>React app using Firebase for hosting and email authentication </p>
        </div>
        <div className='projects__card__links'>
        <a href="https://facebook-clone-7b522.web.app">Live</a>
        <a href="https://github.com/IanHancock36/facebook-clone.git"> Github</a>
      </div>
      </div>

      <div className="projects__card">
        <div className='projects__card__description'>
        <h2>Other Project</h2>
        <p>ADD YOUR OTHER PROJECt and the stuff that is about the stuff you know stut</p>
        </div>
        <div className='projects__card__links'>
        <a></a>
        <a></a>
        </div>
      </div>
      <div className="projects__card">
        <div className='projects__card__description'>
        <h2>Other stuff</h2>
        <p>ADD MORE STUFF ABout your project about stuff thats also stuff</p>
        </div>
        <div className='projects__card__links'>
      <a></a>
      <a></a>
      </div>
      </div>
      
    </section>
  </Layout>
)

export default IndexPage
