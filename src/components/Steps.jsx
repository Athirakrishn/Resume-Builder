import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { ImTelegram } from 'react-icons/im';
import { GiSkills } from 'react-icons/gi';
import swal from 'sweetalert';
import { addResumeAPI } from '../services/allAPI.JS';


function Steps({userInput,setUserInput,setFinish}) {
   const steps = ['Basic Information', 'Contact Details', 'Education Details','Work Experience','Skills & Certification','Skills & Preview'];

  const skillSuggestionArray =['HTML','CSS','BOOTSTRAP','PHP','REACT','MONGODB','NODEJS','JAVASCRIPT','TAILWIND'];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  //state for storing user input data
 
//
 const userSkillRef = React.useRef()

console.log(userInput);



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

//add skill 
const addSkill=(inputSkill)=>{
  if(inputSkill){
   if(userInput.skills.includes(inputSkill)){
    alert("Given skill is already existing!!! Add another...")
   }else{
    // userInput.skills.push(inputSkill)
    setUserInput({...userInput,skills:[...userInput.skills,inputSkill]})

   }
  }
}
//remove skill  
const removeSkill = (skill)=>{
  setUserInput({...userInput,skills:userInput.skills.filter(item=>item!=Skill)})
}

  //render the content corresponding to the array content  
  const renderStepArrayContent = (stepCount) =>{
    switch(stepCount){
      case 0 : return (
        <div>
          <h3>Personal Details</h3> 
          <div className="d-flex row p-3" >
              <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,name:e.target.value}}) }  value={userInput.personalData.name}/>
              <TextField id="standard-basic-name" label="Job Title" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,jobTitle:e.target.value}}) } value={userInput.personalData.jobTitle} />
              <TextField id="standard-basic-name" label="Location" variant="standard"  onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,location:e.target.value}}) } value={userInput.personalData.location}/>
          </div>
        </div>
      )
       case 1 : return (
        <div>
          <h3>Contact Details</h3>
          <div className="d-flex row p-3" >
              <TextField id="standard-basic-name" label="Email" variant="standard"                onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,email:e.target.value}}) }     value={userInput.personalData.email}/>
              <TextField id="standard-basic-name" label="Phone Number" variant="standard"         onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,phone:e.target.value}}) }     value={userInput.personalData.phone} />
              <TextField id="standard-basic-name" label="GitHub profile link" variant="standard"  onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,github:e.target.value}}) }    value={userInput.personalData.github} />
              <TextField id="standard-basic-name" label="LinkedIn profile link" variant="standard"onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,linkedin:e.target.value}}) }  value={userInput.personalData.linkedin} />
              <TextField id="standard-basic-name" label="Portfolio" variant="standard"            onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,portfolio:e.target.value}}) } value={userInput.personalData.portfolio}  />
          </div>
        </div>
      )
     case 2 : return (
        <div>
          <h3>Education Details</h3>
          <div className="d-flex row p-3" >
              <TextField id="standard-basic-name" label="Course Name" variant="standard"      onChange={e=>setUserInput({...userInput, Education:{...userInput. Education,course:e.target.value}}) }  value={userInput.Education.course}/>
              <TextField id="standard-basic-name" label="College Name " variant="standard"    onChange={e=>setUserInput({...userInput, Education:{...userInput. Education,college:e.target.value}}) }     value={userInput.Education.college} />
              <TextField id="standard-basic-name" label="University" variant="standard"       onChange={e=>setUserInput({...userInput, Education:{...userInput. Education,university:e.target.value}}) }  value={userInput.Education.university} />
               <TextField id="standard-basic-name" label="Year of Passout" variant="standard" onChange={e=>setUserInput({...userInput, Education:{...userInput. Education,year:e.target.value}}) }        value={userInput.Education.year}  />

          </div>
        </div>
      )
      case 3 : return (
        <div>
          <h3>Professional Details</h3>
          <div className="d-flex row p-3" > 
              <TextField id="standard-basic-name" label="Job or internship" variant="standard"  onChange={e=>setUserInput({...userInput, experience:{...userInput. experience,jobRole:e.target.value}}) }     value={userInput.experience.jobRole} />
              <TextField id="standard-basic-name" label="Company Name" variant="standard"       onChange={e=>setUserInput({...userInput, experience:{...userInput. experience,company:e.target.value}}) }     value={userInput.experience.company}  />
              <TextField id="standard-basic-name" label="Company Location" variant="standard"   onChange={e=>setUserInput({...userInput, experience:{...userInput. experience,jobLocation:e.target.value}}) } value={userInput.experience.jobLocation}  />
              <TextField id="standard-basic-name" label="Duration" variant="standard"           onChange={e=>setUserInput({...userInput, experience:{...userInput. experience,duration:e.target.value}}) }    value={userInput.experience.duration} />

          </div>
        </div>
      )
      case 4 : return (
        <div>
          <h3>skills</h3>
          <div className="d-flex align-items-center justify-content-between p-3"  >
              {/* <TextField style={{width:"400px"}} id="standard-basic-name" label="Add skill" variant="standard" /> */}
              <input ref={userSkillRef} type="text" className='form-control' placeholder='ADD SKILL'/>
              <Button variant="text" className='' onClick={()=>addSkill(userSkillRef.current.value)}>ADD</Button>  
          </div>
           <h5>Suggestion</h5>
           <div className="d-flex flex-wrap justify-content-between my-3">
            {
              skillSuggestionArray.map(userSkill=>(
              <Button onClick={()=>addSkill(userSkill)} className='m-1' key={userSkill} variant='contained'> {userSkill}</Button>
              ))
            } 
           </div>
           <h5>AddedSkill:</h5>
            <div className="d-flex flex-wrap justify-content-between my-3">
              {
                userInput.skills.length>0?
                 userInput.skills.map(skill=>(
                   <span key={skill} className='btn btn-primary justify-content-center text-align-center'>{skill}<button className='text-light btn' onClick={()=>removeSkill(skill)}>X</button></span>
    
                 )):
                <span>  NIL</span>
                          }
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

  //add resume
  const handleAddResume=async()=>{
  //api call 
  const {name,jobTitle,location}=userInput.personalData
  if(name&&jobTitle&&location){
    try{
    const result = await addResumeAPI(userInput)
    console.log(result);
    swal("Success ","Resume added Successfully!","Success");
    setFinish(true)
    }catch(err){
    console.log(err);
    swal("Success ","Resume added Failed!","Success");
    setFinish(false)
    }
    //  alert("API CALLED")

  }else{
     alert("fill the form")
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
           
              {
              activeStep === steps.length - 1 ? 
               <Button onClick={handleAddResume}>Finish</Button> :
               <Button onClick={handleNext}>Next</Button>
               }
           
          </Box>
        </React.Fragment>
      )}
    </Box>
    </>
  )
}

export default Steps