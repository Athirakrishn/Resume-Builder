import BASEURL from "./baseUrl"
import commonAPI from "./commanAPI"

//add resumeAPI - post - called by steps component 
export const addResumeAPI =(resume)=>{
  return commonAPI("post",`${BASEURL}/all-resume`,resume)
}
//edit resumeAPI - put
//add HistoryAPI - post
//get HistoryAPI - get
//delete HistoryAPI - delete 