import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';



function Preview() {
  return (
    <>
     <Box component="section" >
      <Paper elevation={3} sx={{ textAlign:"center" ,p: 2 }} > 
       <h2>Name</h2>
       <h4>Job title</h4>
       <p><span>location</span>| <span>Email</span>|<span>Phone number</span></p>
       <p>
        <Link href={""} >GITHUB </Link> | 
          <Link href={""} >LINKEDIN</Link> | 
            <Link href={""} >PORTFOLIO </Link> | 
       </p>
         <Divider>Summary</Divider>
          <Divider>Education</Divider>

      </Paper>
    </Box>
    </>
  )
}

export default Preview