import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaRegEdit } from "react-icons/fa";
import { TextField } from '@mui/material';


function Edit() {
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
    <button onClick={handleOpen} className='btn fs-3' style={{color:"rgb(21, 70, 77)"}}>  <FaRegEdit/></button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal */}
              <h3>Personal Details</h3>
                      <div className="d-flex row p-3" >
                          <TextField id="standard-basic-name" label="Full Name" variant="standard" />
                          <TextField id="standard-basic-name" label="Job Title" variant="standard" />
                          <TextField id="standard-basic-name" label="Location" variant="standard" />
                      </div>
                 <h3>Contact Details</h3>
         <div className="d-flex row p-3" >
             <TextField id="standard-basic-name" label="Email" variant="standard" />
             <TextField id="standard-basic-name" label="Phone Number" variant="standard" />
             <TextField id="standard-basic-name" label="GitHub profile link" variant="standard" />
             <TextField id="standard-basic-name" label="LinkedIn profile link" variant="standard" />
             <TextField id="standard-basic-name" label="Portfolio" variant="standard" />
         </div>       
      <h3>Education Details</h3>
             <div className="d-flex row p-3" >
                 <TextField id="standard-basic-name" label="Course Name" variant="standard" />
                 <TextField id="standard-basic-name" label="College Name " variant="standard" />
                 <TextField id="standard-basic-name" label="University" variant="standard" />
                  <TextField id="standard-basic-name" label="Year of Passout" variant="standard" />
                   
                             </div>
             <h3>Professional Details</h3>
                      <div className="d-flex row p-3" >
                          <TextField id="standard-basic-name" label="Job or internship" variant="standard" />
                          <TextField id="standard-basic-name" label="Company Name" variant="standard" />
                          <TextField id="standard-basic-name" label="Company Location" variant="standard" />
                          <TextField id="standard-basic-name" label="Duration" variant="standard" />
            
                      </div>

            <div>
             <h3>skill</h3>
              <div className="d-flex align-items-center justify-content-between p-3"  >
              <TextField style={{width:"400px"}} id="standard-basic-name" label="Add skill" variant="standard" />
              <Button variant="text" className=''>ADD</Button>  
          </div>
          <h5>AddedSkill:</h5>
            <div className="d-flex flex-wrap justify-content-between my-3">
              <span className='btn btn-primary justify-content-center text-align-center'> REACT <button className='text-light btn'>X</button></span>
            </div>
            </div>


         <h3>Professional Summary</h3>
                  <div className="d-flex row p-3" >
                                       <TextField id="standard-basic-name" label="write a short summary of your self" variant="standard"  multiline rows={4} defaultValue={''}/>
                                   </div>              
          </Typography>
          <Button>Update</Button>
        </Box>
      </Modal>
  
    </>
  )
}

export default Edit