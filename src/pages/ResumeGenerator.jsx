import React from 'react'
import  { Link } from 'react-router-dom'
import { FaFileAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

function ResumeGenerator() {
  return (
    <>
    <section className="first">
    <div className=" text-center  my-5">
    <h3>Create a job-winning resume in minutes</h3>
    <div className="row my-5">
    <div className="col-1"></div>
    <div className="col-4 box border shadow p-4">
       <h1> <FaFileAlt className='text-primary'  /></h1>
        <h4>Add your Information</h4>
        <p>Add pree-written examples to each section</p>
         <h5 > Step 1</h5>
    </div>
    <div className="col-2"></div>
    <div className="col-4 box border shadow p-4">
        <h1><FaFileDownload  className='text-danger'/></h1>
        <h4>Download your Resume</h4>
        <p>Down load and Start applying</p>
         <h5 > Step 2</h5>
    </div>    
    <div className="col-1"></div>
    </div>
    <Link to={'/form'} className='btn text-light' style={{backgroundColor:"rgb(79, 24, 124)"}}> LET'S START</Link>
    </div>
    </section>
    
    </>
  )
}

export default ResumeGenerator