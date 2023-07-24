import React from 'react'
import './Home.css';
import { motion } from "framer-motion";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import 'animate.css';
const Home = () => {
 
    const handleDownload = () => {
      const fileUrl = process.env.PUBLIC_URL + '/CMJ-Resume.pdf';
      window.open(fileUrl, '_blank');
    };
  return (
    
    <div className='home-div' id="homePage">
      <motion.div   
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}     
      transition={{
        duration: 0.8,
        delay: 0.3,
         ease: [0, 0.71, 0.2, 1.01],        
      }}
    >
    <div className='home-ele'>
        <p>Hello, My Name Is </p>
      <h1 className='home_h1'> Chetana M Jyothi</h1>
      <p>I'm a Web Developer</p>
      <button onClick={handleDownload} className=' home-header animate__animated animate__rubberBand animate__slow animate__delay-5s'>Download Resume</button>
    </div>
    </motion.div>
    <motion.div   
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.9,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      
    <div className='home-img'>
    <Player
      className='spiral'
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_w4NUp4.json"
        style={{ height: '500px', width: '500px' }}
        >
        </Player>
    <img src='https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png' alt='Profile-pic'></img>
    </div>
    </motion.div>
    </div>
  )
}

export default Home;
