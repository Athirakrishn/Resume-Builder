import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';



function Steps() {
   const steps = ['Basic Information', 'Contact Details', 'Education Details','Work Experience','Skills & Certification','Skills & Preview'];

  const skillSuggestionArray =['HTML','CSS','BOOTSTRAP'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  //render the content corresponding to the array content  
  const renderStepArrayContent = (stepCount) =>{
    switch(stepCount){
      case 0 : return (
        <div>
          <h3>Personal Details</h3>
          <div className="d-flex row p-3" >
              <TextField id="standard-basic-name" label="Full Name" variant="standard" />
              <TextField id="standard-basic-name" label="Job Title" variant="standard" />
              <TextField id="standard-basic-name" label="Location" variant="standard" />
          </div>
        </div>
      )
       case 1 : return (
        <div>
          <h3>Contact Details</h3>
          <div className="d-flex row p-3" >
              <TextField id="standard-basic-name" label="Email" variant="standard" />
              <TextField id="standard-basic-name" label="Phone Number" variant="standard" />
              <TextField id="standard-basic-name" label="GitHub profile link" variant="standard" />
              <TextField id="standard-basic-name" label="LinkedIn profile link" variant="standard" />
              <TextField id="standard-basic-name" label="Portfolio" variant="standard" />
          </div>
        </div>
      )
     case 2 : return (
        <div>
          <h3>Education Details</h3>
          <div className="d-flex row p-3" >
              <TextField id="standard-basic-name" label="Course Name" variant="standard" />
              <TextField id="standard-basic-name" label="College Name " variant="standard" />
              <TextField id="standard-basic-name" label="University" variant="standard" />
               <TextField id="standard-basic-name" label="Year of Passout" variant="standard" />

          </div>
        </div>
      )
      case 3 : return (
        <div>
          <h3>Professional Details</h3>
          <div className="d-flex row p-3" >
              <TextField id="standard-basic-name" label="Job or internship" variant="standard" />
              <TextField id="standard-basic-name" label="Company Name" variant="standard" />
              <TextField id="standard-basic-name" label="Company Location" variant="standard" />
              <TextField id="standard-basic-name" label="Duration" variant="standard" />

          </div>
        </div>
      )
      case 4 : return (
        <div>
          <h3>skills</h3>
          <div className="d-flex align-items-center justify-content-between p-3"  >
              <TextField style={{width:"400px"}} id="standard-basic-name" label="Add skill" variant="standard" />
              <Button variant="text" className=''>ADD</Button>  
          </div>
           <h5>Suggestion</h5>
           <div className="d-flex flex-wrap justify-content-between my-3">
            {
              skillSuggestionArray.map(userSkil=>(
              <Button className='m-1' key={userSkil} variant='contained'> {userSkil}</Button>
              ))
            }
           </div>
           <h5>AddedSkill:</h5>
            <div className="d-flex flex-wrap justify-content-between my-3">
              <span className='btn btn-primary justify-content-center text-align-center'> REACT <button className='text-light btn'>X</button></span>
            </div>
        </div>
      )
      
       case 5: return (
        <div>
          <h3>Professional Summary</h3>
          <div className="d-flex row p-3" >
              <TextField id="standard-basic-name" label="write a short summary of your self" variant="standard"  multiline rows={4} defaultValue={''}/>
          </div>
        </div>
      )
       default : return null
    }

  }

  return (
    
    <>  
     <Box sx={{ width: '100%' }}> 
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps={};
          const labelProps= {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* view of each step */}
       <Box>
       {renderStepArrayContent(activeStep)}
       </Box>

          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    </>
  )
}

export default Steps