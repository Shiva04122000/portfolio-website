import React from 'react'
import Navbar from '../Navbar'
import Student from '../../svgs/Student.json'
import Lottie from "lottie-react";
import './About.css'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="about">
          <h1>Who i am</h1>
          <p>My Name is Shiva Epili. I’m a Frontend developer specializing in building (and occasionally designing) exceptional digital experiences.</p>
          <p>I Have Completed B.E. in Computer Branch from CSMIT University .I Currently Live in Chembur, Mumbai. My primary focus and inspiration for my studies is Web Devolpment. I am constantly experimenting with new technologies and techniques. I am very passionate about Web Development, and strive to better myself as a developer. Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.</p>
        </div>
        <div className="pic">
          <Lottie animationData={Student} />
        </div>
      </div>
    </>
  )
}

export default About