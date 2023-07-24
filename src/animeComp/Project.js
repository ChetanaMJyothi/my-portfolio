import React from 'react';
import CardProj from './CardProj.js';
import './Project.css';

const Project = () => {
  return (
    <div className="card-div" id="projectPage">
      <h1>Projects</h1>
      <div className='card'>
      <CardProj ></CardProj>      
      </div>
    </div>
  )
}

export default Project;
