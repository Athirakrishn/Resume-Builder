import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
      <section className='text-align-center justify-content-center d-flex'>
        <h1 style={{color:"rgb(59, 31, 104)" , }}>404</h1>
        <P>Page Not Found</P>
        <Link to={'/'} className='btn btn-primary'>Back To Home</Link>

      </section>
    </div>
  )
}

export default PageNotFound