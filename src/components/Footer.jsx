import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className=" d-flex justify-content-center text-align-center text-light" style={{backgroundColor:"rgb(105, 40, 190)", height:"300px",width:"100%"}}>
       <div className='text-center'>
          <h1 >Contact Us</h1>     
          <h6 > <MdOutlineMailOutline /> Rbuilder@gmqil.com</h6>
          <h6 > <FaPhoneAlt /> +123456789</h6>
          <h5>Connect With Us</h5>
         <div className="d-flex justify-content-center fs-4 mt-3">
        <FaInstagram className='me-3' />
        <FaFacebook  className='me-3'/>
         <FaWhatsapp className='me-3' />
    
         </div>
          <p className='mt-3'> Designed & build  with ❤ using React</p>
       </div>
   
    
    </div>
    </>
  )
}

export default Footer