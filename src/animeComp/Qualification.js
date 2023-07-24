import React from 'react'
import './Qualification.css';
import { motion } from "framer-motion";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Qualification = () => {
  return (
    <div className='ql-main' id="portfolioPage">
      <h1>My Personal Journey</h1>
      <motion.div   
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],   
        
      }}
    >
      <div className='anime_text'>
      <Player
        autoplay
        loop
        src="https://assets7.lottiefiles.com/packages/lf20_d0gmxgy5KG.json"
        style={{ height: '500px', width: '500px' }}
        >
        </Player>
      
      <div className='set'>
      
      <div className='year-div'>
      <p>2012</p>
      <p>2014</p>
      <p>2014-2018</p>
      <p>2018-2020</p>
      <p>2020-2022</p>
      <p>2022-2023</p>
      </div>
      <div className='line'>

      </div>
      <div className='info-div'>
      <div>
      <p>SSLC</p>
      <p>ST.Lawrence</p>
      <p>84%</p>
</div>
<div>
      <p>PUC</p>
      <p>Dr.Thimmareddy College</p>
      <p>87.3%</p>
</div>
<div>
      <p>BE in CSE</p>
      <p>New Horizon College, Bengaluru</p>
      <p>72%</p>
</div>

<div>
  <p>Software Engineer</p>
  <p>@ WIPRO</p>
  <p>Bengaluru Location</p>
</div>
<div>
      <p>M.Tech in CSE</p>
      <p>UBDT College, Davangere</p>
      <p>73%</p>
      </div>
<div>
  <p>Online Training on Web Development</p>
  <p>From Newton School </p>
</div>
      </div>
      </div>
      </div>
      </motion.div>
    </div>
  )
}

export default Qualification
