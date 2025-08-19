import React from 'react'
import { Link } from 'react-router-dom'
Link
function PageNotFound() {
  return (
    <>
     <div style={{height:'85vh'}} className="d-flex flex-column justify-content-center align-items-center">
      <h1 style={{color:"rgb(59, 31, 104)", fontSize:"100px" }}>404</h1>
      <h1 >Page Not Found</h1>
      <h5 className='my-4'>Sorry, we couldn't find the page</h5>
      <Link to={'/'} className='btn text-white fw-bold' style={{backgroundColor:"#4a148c"}}>Go To Home</Link>
     </div>
    </>
  )
} 
export default PageNotFound