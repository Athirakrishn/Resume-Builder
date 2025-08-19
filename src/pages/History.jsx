import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack'; 
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";

function History() {
  return (
    <div>
    <h1 className="text-center my-5">Resume Download History</h1>
    <span ><Link to={'/'} style={{marginTop:"-50px"}} className='float-end'>BACK</Link> </span>
      <Box component="section" className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>

            <Paper elevation={3} sx={{ my:5, textAlign:"center" ,p: 5 }} > 
              <div className="d-flex text-align-center justify-content-between" >
                <h6>Review at : <br/>
                   24/8/2025, 4.33.33 PM</h6>
                   <button className='btn text-danger fs-4 ms-5'><MdDelete /></button>
              </div>
            <div className='border rounded p-3'>
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
        
            </div>
            </Paper>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default History