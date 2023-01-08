import React from 'react'
import Navbar from './Navbar'
import Lottie from "lottie-react";
import instagram from '../svgs/instagram.json'
import github from '../svgs/github.json'
import email from '../svgs/email.json'
import linkedin from '../svgs/linkedin.json'
import handWave from '../svgs/handWave.json'
import cv from '../svgs/cv.json'
import candiate from '../images/Candidate.JPG'
import Typed from 'react-typed';
import Resume from '../images/Resume.pdf'
import "./Home.css"
import Particle from './Particle';

const Home = () => {

  return (
    <>
      <Particle />
      <Navbar />
      <div className="home">
        <span className='title'>Hi<Lottie style={{ width: "4rem" }} animationData={handWave} />, I'm <b style={{ marginLeft: "18px", fontFamily: " 'Source Serif Pro', serif" }}>Shiva Epili</b></span>
        <div>
          
        <img className="candiate-img" src={candiate} alt="" />
        </div>
        <span className='job-title'>
          <Typed
            strings={[
              "I'm a Web Developer.",
              "I'm a Frontend Developer.",
              "I'm a FreeLancer.",
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
        </span>
        <div className="icons">
          <a className='icon' target="_blank" href="https://github.com/Shiva04122000">
            <Lottie animationData={github} />
          </a>
          <a className='icon' target="_blank" href="https://www.instagram.com/iam_shivaepili/">
            <Lottie animationData={instagram} />
          </a>
          <a className='icon' target="_blank" href="mailto: eshiva44@gmail.com">
            <Lottie animationData={email} />
          </a>
          <a className='icon' target="_blank" href="https://www.linkedin.com/in/shiva-epili-2370b4226/">
            <Lottie animationData={linkedin} />
          </a>
          <a className='icon' target="_blank" href={Resume}>
            <Lottie animationData={cv} />
          </a>
        </div>
      </div>

    </>
  )
}

export default Home