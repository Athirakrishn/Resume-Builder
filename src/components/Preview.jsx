import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

function Preview({userInput,finish}) {
  // console.log(userInput);
  console.log(userInput);


  const downloadCV = async()=>{
    // get element for taking screenshot
    const input = document.getElementById("result")
    const canvas = await html2canvas(input,{scale:2})
    const imgURL = canvas.toDataURL('image/png')

    const pdf = new jsPDF()
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()

    pdf.addImage(imgURL,'PNG',0,0,pdfWidth,pdfHeight)
    pdf.save('resume.pdf')

    // get date
    const localTimeDate = new Date()
    const timeStamp = `${localTimeDate.toLocaleDateString()},${localTimeDate.toLocaleTimeString()}`
    // console.log(timeStamp);
    

    // add downloaded CV to history json using api call
    

  }
  
  return (
    <div >

     

    { 
    userInput.personalData.name!="" &&
   <>
      
         <Stack direction={'row'} sx={{justifyContent:"flex-end"}}>  
            <Stack direction={'row'}>
              {/* download */}
              <button onClick={downloadCV}  className='btn fs-3' style={{color:"rgb(21, 70, 77)"}}> <FaFileDownload /></button>
              {/* edit */}
              <div>
                <Edit/>
              </div>
              {/* history */}
              <Link to={'/history'} className='btn fs-3' style={{color:"rgb(21, 70, 77)"}}>  <FaHistory /></Link>
               {/* back */}
               <Link to={'/resume'} className='btn fs-3' style={{color:"rgb(21, 70, 77)"}}> BACK</Link>
    
             
            </Stack>
              </Stack>
         <Box component="section" >
          {/* <Paper elevation={3} sx={{ my:5, textAlign:"center" ,p: 5 }} > */}
         <Paper id="result" elevation={3} sx={{my:5 ,textAlign: 'center', p: 5 }}>



           <h3>{userInput.personalData.name}</h3>
           <h5>{userInput.personalData.jobTitle}</h5>
           <p><span>{userInput.personalData.location}</span>|<span>{userInput.personalData.email} </span>|<span>{userInput.personalData.phone}</span></p>
           <p>
            <Link href={""} >GITHUB </Link> | 
              <Link href={""} >LINKEDIN</Link> | 
                <Link href={""} >PORTFOLIO </Link> | 
           </p>
             <Divider sx={{fontSize:"25px"}}>Summary</Divider>
             <p className='fs-5 text-start'>{userInput.personalData.summary}</p>
             <Divider sx={{fontSize:"25px",marginBottom:"10px"}}>Education</Divider>
            <h5>User Education</h5>
           <p><span>{userInput.Education.course}</span>| <span>{userInput.Education.university}</span>|<span>{userInput.Education.year}</span></p>
             <Divider sx={{fontSize:"25px",marginBottom:"10px"}}>Professional Experience</Divider>
            <h5>{userInput.experience.jobRole} </h5>
           <p><span>{userInput.experience.company}</span>|{userInput.experience.jobLocation} <span></span>|<span>{userInput.experience.duration}</span></p>
          <Divider sx={{fontSize:"25px",marginBottom:"10px"}}>Skills</Divider>
            <Stack justifyContent={'space-evenly'} direction="row" sx={{flexWrap:"wrap",gap:"10px"}}>
              {
                userInput.skills?.map(skill=>(
                  <Button variant='contained'>{skill}</Button>
                ))
              }
          
        </Stack>
    
          </Paper>
        </Box>
   </>

      }
    
    
    </div>
  )




}

export default Preview