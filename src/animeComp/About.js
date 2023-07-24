import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import './About.css';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
const About = () => {
   return (

    <div className='about-div' id="aboutPage">
         
      <h1>All About Me And My Experience</h1>
      <motion.div   
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],   
        
      }}
    >
      <div className='about-subDiv'>
      <Player
      className='laptop'
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_efx3aac9.json"
        style={{ height: '500px', width: '500px' }}
        >
        </Player>
      <p className='about-p'>Hello! My Name is Vignesh, a software engineer with prior experience at Wipro. Currently, 
        I'm immersed in a web development course, where I'm expanding my knowledge and skills in creating captivating web experiences. 
        My time at Wipro has provided me with valuable industry experience and a solid foundation in software engineering. 
        I'm passionate about leveraging my expertise to build innovative and user-friendly web applications. 
        Staying up-to-date with the latest trends and technologies is something I actively pursue to ensure I'm always at the forefront of my field. 
        I'm excited to continue honing my skills and making meaningful contributions as a software engineer.</p>
        </div>
        </motion.div>
    </div>
  )
}

export default About
