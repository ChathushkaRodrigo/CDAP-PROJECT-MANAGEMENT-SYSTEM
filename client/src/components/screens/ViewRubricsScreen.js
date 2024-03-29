import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "./SubmissionAdmin.css";
import SideNavigationBar from "../AdminNavigationBar/AdminNavigationBar";

const ViewMarkingRubricsAdmin = ({history}) =>{
  const [SubmissionsData, setSubmissionsData] = useState([])
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [submissionArray, setSubmissionArray] = useState("");
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data} = await axios.get("/api/adminPrivate/adminPrivate", config);
        
        setPrivateData(data.data);
        
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    const fetchSubmissionsData = async () =>{
      const submissionsconfig = {
        headers: {
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`,
        },
      }

      try{
        const{data} = await axios.get("/api/markingRubrik/viewRubricsCreatedFromTemplate",submissionsconfig);
        const array = Object.entries(data.data)
        setSubmissionsData(data.data);

        
      }catch(error){
        // setError("Data not fetched");
        
      }
    
    }




    fetchSubmissionsData()
    fetchPrivateDate()
  }, [history])

//   const objectToArray = obj => {
//     const keys = Object.keys(obj);
//     const res = [];
//     for(let i = 0; i < keys.length; i++){
//        res.push(obj[keys[i]]);
//        setSubmissionArray(res)
//        console.log(submissionArray)
//       //  console.log(projectarray);
      
       
       

//     };
//     return res; 

//  };
 
const toggle=()=> {//normal text box
  if(visibility == false){
    setVisibility(true)
  }else{
    setVisibility(false)      
  }
}



 return error ? ( 
  
  <span className="error-message">{error}</span>
) : ( 

  <>
  
  <div id="back555">
  <Header/>
  <div class="flex flex-col items-center w-48 h-full-screen overflow-hidden text-gray-300 bg-gray-800 rounded  ">
        <SideNavigationBar page="AdminSubmission"/>
       </div>
  <h1 id="caption" className="" style={{marginTop:"-575px"}}>Rubrics templates</h1>
      <br/><br/>
  {/* <Link to="/CustomisedMarkingRubrics" style={{color:"#fff"}}>View Marking Rubrics</Link> */}
{/* <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </a>
</div> */}



        
         <ul>
         <br/>
        {SubmissionsData.map(submission => {
          
          return (
<div>
  <div className="p-6 ml-[35rem] w-[100rem] max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" >

        <center><p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{submission.BatchID}</p></center>
      <div><br/>
                   
                    {/* <li className="markscontent" style={{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",margin:"7px"}}><b>Visibility</b>: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{submission.visibility}</li>  */}
                    <li class="mb-3 font-normal text-gray-700 dark:text-gray-400"><b>Date       </b>: &nbsp;&nbsp;&nbsp;&nbsp;{submission.Date}</li>&nbsp;
                    <li class="mb-3 font-normal text-gray-700 dark:text-gray-400" ><b>Description</b>: &nbsp;&nbsp;&nbsp;&nbsp;{submission.Description}</li>&nbsp;
                    <li class="mb-3 font-normal text-gray-700 dark:text-gray-400" ><b>Heading    </b>: &nbsp;&nbsp;&nbsp;&nbsp;{submission.Heading}</li>&nbsp;
                    <li class="mb-3 font-normal text-gray-700 dark:text-gray-400" ><b>Links      </b>: &nbsp;&nbsp;&nbsp;&nbsp;{submission.SubmissionPageLink}</li>&nbsp; 
                    <li class="mb-3 font-normal text-gray-700 dark:text-gray-400" ><b>Visibility </b>: &nbsp;&nbsp;&nbsp;&nbsp;{submission.visibility}</li>&nbsp; 
                    <label>
              
                    <div class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> <a href={`/editRubrics/${submission._id}`}>Edit/Remove Rubrics</a></div>&nbsp;&nbsp;<br/>
        <br/> <p style={{fontWeight:"bold",color:"black",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",padding:"2px",width:"300px",textAlign:"center",margin:"0 auto"}}>Submission Enabled?</p>
      <br/>
        <input type="checkbox" name="visibility" onChange={toggle} checked ={submission.visibility}/>
        <br/>
    </label>
    
      </div>
   
 </div>
 <br/>
 </div>
            
          )

        }
        
        )
        
        } 
        
        <br/>
      </ul>
      

        <Link to="/addRubrics" className="login-screen__forgotpassword" id="link">
              Create New rubrics
            </Link>
      
    </div>
     
  </>
);
};
export default ViewMarkingRubricsAdmin;