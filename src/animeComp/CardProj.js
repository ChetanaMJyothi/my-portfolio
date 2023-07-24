import React from "react";
import { HStack } from '@chakra-ui/react'
import './CardProj.css';
import { motion } from "framer-motion";
import expense from '../images/expense.png';
import isro from '../images/isro.png';
import resort from '../images/resort.png';
import twitter from '../images/twitter.png';
import { Link } from 'react-router-dom';
import {useState} from "react";
import map from '../images/map.png'
import { Card, Image, ButtonGroup, Button, CardBody, CardFooter,Text, Stack, Heading, Divider} from '@chakra-ui/react'
function CardProj(){
  let x=0;
    const proj=[{
        srcLink:twitter,
        heading:"Twitter Clone",
        content:"This Website is clone of Twitter with frontend functionality like user authentication with login/signup page, add tweet, like and comment on tweet",
        Techstack:"Tech Stack: React JS, Firebase, Material-UI",
        key:1,
        url:"https://twitter-clone-chetanamj.netlify.app/"
    },
    {
      srcLink:map,
      heading:"Indian Weather Map",
      content:"Clickable Indian SVG Map, which will display climatic condition of required Place ",
      Techstack:"Tech Stack: React JS, Node JS, Mongo DB, Express JS, Mongoose",
      key:2,
      url:"https://indian-weather-svg-map.netlify.app/"

  },
  {
    srcLink:isro,
    heading:"ISRO Search Center",
    content:"User will be able to read data from API based on different filter like City, State, Center Name",
    Techstack:"Tech Satck: HTML, CSS, JavaScript",
    key:3,
    url:"https://search-isro-centres.netlify.app/"

},

{
  srcLink:expense,
  heading:"Daily Expense Tracker",
  content:"User can add, delete, edit any expenses from list",
  Techstack:"Tech Satck: HTML, CSS, JavaScript",
  key:4,
  url:"https://expense-tracker-chetanamj.netlify.app/"

}];


return(
   
  <HStack spacing='30px' flexWrap='wrap' justifyContent='space-evenly' rowGap='30px'>
  {proj.map((obj)=>{ 
    x=x+0.2;
  {console.log("CardProj")}

  return(
    <motion.div   
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay:x ,
        ease: [0, 0.71, 0.2, 1.01],       
      }}
    >
<Card maxW='xs'>
  <CardBody>
    <Image
      src={obj.srcLink}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{obj.heading}</Heading>
      <Text>
        {obj.content}
      </Text>
      <Text color='blue.600' fontSize='1xl'>
        {obj.Techstack}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Link to={obj.url} target="_blank">
      <Button variant='solid' colorScheme='blue'>
        Visit Page
      </Button>
      </Link>
    </ButtonGroup>
  </CardFooter>
</Card>
</motion.div>)
 })}
 </HStack>
)
}
export default CardProj;