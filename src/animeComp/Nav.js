import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-fix'>
    <div className='nav-bar'>
    <a href="#homePage"><p className="nav-p">Home</p></a>
      <a href="#aboutPage"><p className="nav-p">About</p></a>
      <a href="#skillPage"> <p className="nav-p">Skills</p></a>
      <a href="#portfolioPage"> <p className="nav-p">Portfolio</p></a>
      <a href="#projectPage"> <p className="nav-p">Project</p></a>
      <a href="#contactPage">  <p className="nav-p">Contact</p></a>
    </div>
    </div>
  )
}

export default Nav
