import React from 'react'
import Home from './components/Home'
import About from './components/About/About'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App