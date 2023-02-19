import React from 'react'
import Navbar from '../Navbar'
import project from '../../svgs/project.json'
import Lottie from "lottie-react";
import FlippableCard1 from './card1/flippable-card';
import FlippableCard2 from './card2/flippable-card';
import FlippableCard3 from './card3/flippable-card';
import FlippableCard4 from './card4/flippable-card';
import FlippableCard5 from './card5/flippable-card';
import FlippableCard6 from './card6/flippable-card';
import './Projects.css'

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="inner">
          <div className="pic">
            <Lottie animationData={project} />
          </div>
          <div className="caption">
            <h1> Projects <span style={{ color: "#ffc727" }}>Background</span> </h1>
            <p> An investment in knowledge pays the best interest. <br /> – Benjamin Franklin</p>
          </div>
        </div>
      </div>
      <div className="projects">
        <FlippableCard1 />
        <FlippableCard2 />
        <FlippableCard3 />
        <FlippableCard4 />
        <FlippableCard5 />
        <FlippableCard6 />
      </div>

    </>
  )
}

export default Projects