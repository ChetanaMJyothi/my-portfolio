import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import './Contact.css';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Contact = () => {
  const linkedIn='https://www.linkedin.com/in/chetana-m-jyothi/';
  const twitter='https://twitter.com/chetanamj';
  const email='chetanamj@gmail.com';
  const gitHub='https://github.com/ChetanaMJyothi';
  const [isEmailCopied, setEmail]=useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        console.log('Email Id copied successfully!');
        setEmail(true);
      })
      .catch((error) => {
        console.error('Failed to copy email:', error);
      });
  };
  return (
    <div className='contact-div' id="contactPage">
      <h1>Contact Me Through</h1>
      <motion.div   
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],   
        
      }}
    >
      <div className='anime-btn'>
      <Player
      className='lapto'
        autoplay
        loop
        src="https://assets6.lottiefiles.com/packages/lf20_u25cckyh.json"
        style={{ height: '500px', width: '500px' }}
        >
        </Player>
      <div className='btn-list'>
      <Link to={linkedIn} target="_blank">
      <Button w="200px" mb='10px' leftIcon={<FaLinkedinIn/>} colorScheme='linkedin'>Linkedin</Button>   
      </Link>
      <Link to={twitter} target="_blank">
      <Button w="200px" mb='10px' colorScheme='twitter' leftIcon={<FaTwitter />}>Twitter</Button>
      </Link>
      <Button  w="200px" onClick={handleCopyEmail} mb='10px' leftIcon={<MdEmail />} colorScheme='teal' variant='solid'>{isEmailCopied ? "Copied" : "Copy Email ID" } </Button>   
      <Link to={gitHub} target="_blank">
      <Button  w="200px" mb='10px' leftIcon={<FaGithub />} colorScheme='blackAlpha'>GitHub</Button>
      </Link>
      </div>
      </div>
      </motion.div>
    </div>
  )
}

export default Contact;
