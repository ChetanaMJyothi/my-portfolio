import React from 'react'
import html from '../images/html5.png'
import css from '../images/css.png'
import bootstrap from '../images/bootstrap.png'
import firebase from '../images/firebase.png'
import git from '../images/git.png'
import java from '../images/java.png'
import javascript from '../images/javascript.png'
import materialUi from '../images/material-ui.png'
import react from '../images/react-native.png'
import redux from '../images/redux.png'
import './Skill.css';
import { motion } from "framer-motion";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import node from '../images/node.png';
import mongodb from '../images/mongodb.png';
import express from '../images/express.png';
import mongoose from '../images/mongoose.png';
const Skill = () => {
  return (
    <div className='skill-div' id="skillPage">
      <h1>My Technical Skills</h1>
      <motion.div   
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],  
       
      }}
    >
     
      <div className='img-div'>
      <img className='tech' src={html} alt="html" title="HTML"></img>
      <img className='tech' src={css} alt="Css" title="CSS"></img>
      <img className='tech' src={javascript} alt="javascript" title="Javascript"></img>
      <Player
      className='laptop'
        autoplay
        loop
        src="https://assets5.lottiefiles.com/packages/lf20_b23ll34c.json"
        style={{ height: '85px', width: '85px' }}
       
        >
        </Player>
        <img className='tech' src={node} alt="Node" title="Node JS"></img>
      <img className='tech' src={mongodb} alt="Mongo DB" title="Mongo DB"></img>
      <img className='tech' src={express} alt="Mongoose" title="Mongoose"></img>
      <img className='tech' src={mongoose} alt="Express" title="Express"></img>

      <img className='tech' src={redux} alt="redux" title="Redux"></img>
      <img className='tech' src={java} alt="java" title="Java"></img>
      

      <img className='tech' src={bootstrap} alt="bootstrap" title="Bootstrap"></img>
      <img className='tech' src={materialUi} alt="materialUi" title="Material UI"></img>
      <img className='tech' src={git} alt="git" title="GIT"></img>
      <img className='tech' src={firebase} alt="firebase" title="Firebase"></img>
      </div>
      </motion.div>
    </div>
  )
}

export default Skill
