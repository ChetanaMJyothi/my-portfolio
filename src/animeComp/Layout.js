/* import Profile from './Profile.js'; */
import './layout.css';
import Nav from './Nav.js';
import Home from './Home.js';
import About from './About.js';
import Skill from './Skill';
import Project from './Project.js'
import Contact from './Contact.js';
import Qualification from './Qualification';
export default function Layout(){
    return (
          <>
      <Nav></Nav>   
    <Home></Home>
      <About></About>
      <Skill></Skill>
      <Qualification></Qualification>
      <Project></Project>
      <Contact></Contact>
      </>    
    )
}