
import React from 'react'
import  { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <section className='container-fluid first' id='part1' style={{width:"100%",overflowX:"hidden",height:"450px",backgroundImage:"url('https://images.pexels.com/photos/7988216/pexels-photo-7988216.jpeg')",backgroundPosition:"top",backgroundAttachment:"fixed",backgroundSize:"cover"}}>
      <div className="row pt-5 " >
        <div className="col-12 col-md-4"></div>
        <div className="col-12 col-md-4 box border py-5 rounded mt-5 text-center mb-4 text-light" style={{backgroundColor:"rgb(0, 0, 0,0.3)"}}>
          <h3>Designed to get hired</h3>
          <h4>your skills , your story ,your next job - all in one </h4>
          <Link to ={'/resume'}>
          <div className="button btn text-light" style={{backgroundColor:"rgb(16, 93, 105)"}}>Make Your Resume</div>
          </Link>
        </div> 
        <div className="col-12 col-md-4"></div>
      </div>
    </section>
    {/* tools */}
    <section className='tools'>
      <h1 className='text-center'>Tools</h1>
     <div className='row'>
        <div className="tool-content col-12 col-md-6 p-5">
        <h4>Resume</h4>
       <p>create unlimited new resumes and easily edit them afterwards.</p>
       <h4>Cover Letters</h4>
       <p> Easily  write professional cover letter</p>
       <h4>Jobs</h4>
       <p>Automatically receive new and relevant job posting </p>
       <h4>Applications</h4>
       <p>Effortlessly manage and track your job application in an organized manner .</p>

        </div>
        <div className="tool-image col-12 col-md-6  ">
        <img  className="img-fluid ms-5" src=" https://theartofresume.com/cdn/shop/files/1_resume_template_design_6_590ca058-95a4-406e-bb1c-f4d638cc8aa9.png?v=1706065373&width=416" alt="" />
        </div>
     </div>

    </section>
  
   <section className='second' id='part1' style={{width:"100%",overflowX:"hidden",height:"450px",backgroundImage:"url('https://www.hub26.uk/hubfs/Your%20Office%20Makes%20Your%20Staff%20More%20Productive%2c%208%20Ways%20How.jpg')",backgroundPosition:"top",backgroundAttachment:"fixed",backgroundSize:"cover"}}>  
    </section>
 {/* testimony */}
    <section className='tools'>
      <h1 className='text-center'>Testimony</h1>
     <div className='row'>
        <div className="tool-content col-12 col-md-6 p-5">
        <h4>Trusted by professional worldwide</h4>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem hic doloribus amet nemo nostrum, alias tenetur distinctio aliquid repudiandae voluptatem, at nobis. Quo pariatur minima laudantium repudiandae quibusdam hic amet.</p>
  
      
       <h4></h4>
       <p>Automatically receive new and relevant job posting  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi maxime provident corporis eum vitae omnis ex at adipisci, itaque aspernatur blanditiis quas commodi sed magnam qui similique dolorum dicta incidunt!</p>
      
       <p>Effortlessly manage and track your job application in an organized manner Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum molestiae debitis quasi est labore, repellat officiis exercitationem dignissimos repudiandae temporibus optio a! Vitae saepe quos vero ut sed distinctio impedit. .</p>

        </div>
        <div className="tool-image  col-12 col-md-6 ">
          <div className="row mb-3">
            <div className="col-3"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIyTZVXyb90oYHRiiX6YkNUc0CnzGwWjI3Q&s " alt="" style={{width:"130px", height:"130px"}} /> </div>
            <div className="col-3"> <img src=" https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" alt="" style={{width:"130px", height:"130px"}} /> </div>
            <div className="col-3"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBrJu1DKYPxeYVfT7xmRA58i8uKyvs_5gkw&s " alt="" style={{width:"130px", height:"130px"}} /> </div>
            <div className="col-3"> <img src=" https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" alt=""style={{width:"130px", height:"130px"}}  /> </div>
          </div>
          <div className="row mb-3">
            <div className="col-3"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-AVzku1xy6k7s46XFD4ZLenUisu0hgclh2Q&s" alt="" style={{width:"130px", height:"130px"}} /> </div>
            <div className="col-3"> <img src=" https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" style={{width:"130px", height:"130px"}} /> </div>
            <div className="col-3"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvNaFBiE1PnqPT3sYkqgUuN1AzrV8i1uOUg&s" alt="" style={{width:"130px", height:"130px"}} /> </div>
            <div className="col-3"> <img src="https://cdn.prod.website-files.com/624ac40503a527cf47af4192/654b536c8c46e155141a426d_ai-face-generator-how.png" alt=""style={{width:"130px", height:"130px"}}  /> </div>
          </div>
            <div className="row mb-3">
            <div className="col-3"> <img src=" https://t4.ftcdn.net/jpg/06/10/19/43/360_F_610194339_3CtGOkv4wIiAyybcib4IrFX0nnc83Bv6.jpg" alt="" style={{width:"130px", height:"130px"}} /> </div>
            <div className="col-3"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46w7igiY01SEjxmoDRrZcs0Kl6exJAcmlTQ&s " alt="" style={{width:"130px", height:"130px"}} /> </div>
            <div className="col-3"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8ocMMFQC_uI2kygSgMPpdTAcxCvAIZ6yxQysp7zc1gKJEeRaW1Tm4qSP22Ulia9H_pA&usqp=CAU" alt="" style={{width:"130px", height:"130px"}} /> </div>
            <div className="col-3"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyKkNxi_1R4ERc_gbTOs4saj3yiJaw9PDPA&s" alt=""style={{width:"130px", height:"130px"}}  /> </div>
          </div>
          <div className="row mb-3">
            <div className="col-3"> <img src="https://as1.ftcdn.net/jpg/00/84/58/86/1000_F_84588657_bWFCviijaLzBAQ5Yah2QkhMdBL8ueic5.jpg " alt="" style={{width:"130px", height:"130px"}} /> </div>
            <div className="col-3"> <img src=" https://as2.ftcdn.net/jpg/00/83/78/03/1000_F_83780308_74tFLX4qoy8ja0Cm5eyc1fbayEbOD27B.jpg" alt="" style={{width:"130px", height:"130px"}} /> </div>
            <div className="col-3"> <img src="https://static.vecteezy.com/system/resources/previews/052/606/659/non_2x/passport-portrait-of-middle-aged-man-looking-at-camera-over-white-studio-background-isolated-photo.jpg " alt="" style={{width:"130px", height:"130px"}} /> </div>
            <div className="col-3"> <img src=" https://as2.ftcdn.net/jpg/01/85/04/85/1000_F_185048528_i9zX0FC3Q8iDNb2E5hanWzN0KeJSXSy6.jpg" alt=""style={{width:"130px", height:"130px"}}  /> </div>
          </div>
        </div>
     </div>

    </section>

    </>
  )
}

export default LandingPage