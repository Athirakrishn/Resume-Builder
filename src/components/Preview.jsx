import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Preview() {
  return (
    <div style={{marginTop:"100px"}}>
     <Box component="section" >
      <Paper elevation={3} sx={{ textAlign:"center" ,p: 5 }} > 
       <h3>Name</h3>
       <h5>Job title</h5>
       <p><span>location</span>| <span>Email</span>|<span>Phone number</span></p>
       <p>
        <Link href={""} >GITHUB </Link> | 
          <Link href={""} >LINKEDIN</Link> | 
            <Link href={""} >PORTFOLIO </Link> | 
       </p>
         <Divider sx={{fontSize:"25px"}}>Summary</Divider>
         <p className='fs-5 text-start'>User Summary</p>
         <Divider sx={{fontSize:"25px",marginBottom:"10px"}}>Education</Divider>
        <h5>User Education</h5>
       <p><span>Collage</span>| <span>University</span>|<span>Year</span></p>
         <Divider sx={{fontSize:"25px",marginBottom:"10px"}}>Professional Experience</Divider>
        <h5>HR Assistant </h5>
       <p><span>Company</span>| <span>Location</span>|<span>Duration</span></p>
      <Divider sx={{fontSize:"25px",marginBottom:"10px"}}>Skills</Divider>
        <Stack justifyContent={'space-evenly'} direction="row" sx={{flexWrap:"wrap",gap:"10px"}}>
      <Button variant="contained">skill</Button>
      <Button variant="contained">skill</Button>
      <Button variant="contained">skill</Button>
      <Button variant="contained">skill</Button>
      <Button variant="contained">skill</Button>
      <Button variant="contained">skill</Button>
      <Button variant="contained">skill</Button>
      <Button variant="contained">skill</Button>
    </Stack>

      </Paper>
    </Box>
    </div>
  )
}

export default Preview