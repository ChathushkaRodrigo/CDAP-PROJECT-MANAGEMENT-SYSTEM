import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css"
import "./ViewAvailableProjects.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const ViewAvailableProjects = ({history}) =>{
  const [ProjectsData, setProjectsData] = useState([])
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [projectarray, setprojectarray] = useState("");
  const [projectBiddingCount, setprojectBiddingCount] = useState("");
  const [bidcount, setbidcount] = useState(0);
  useEffect(() => {

    

   

    const fetchProjectsData = async () =>{
      const projectsconfig = {
        headers: {
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`,
        },
      }
      try{
        const{data} = await axios.get("/api/AvailableProject/availableprojects",projectsconfig);
        //console.log(typeof data.data);
        const array = Object.entries(data.data)
        setProjectsData(data.data);
        //setbidcount(ProjectsData.projectBiddingCount);
      console.log(data.data)
        
      }catch(error){

        
      }
    }
    fetchProjectsData()
   
  }, [history])
  const objectToArray = obj => {
    const keys = Object.keys(obj);
    const res = [];
    for(let i = 0; i < keys.length; i++){
       res.push(obj[keys[i]]);
       setprojectarray(res)
      //  console.log(projectarray);
      
       
       

    };
    return res; 

  



 };

 //Increase bid count
 const bidHandler = bid => async (e) => {
  e.preventDefault();

  console.log(bid)

  try {
    
    const { data } = await axios.post( 
      `/api/AvailableProject/increasebidcount/${bid}`,
      { projectBiddingCount }
     
    );

      window.location.reload()

   
  } 

  
  catch (error) {
    setError(error.response.data.error);
    setTimeout(() => {
      setError("");
    }, 5000);
  } 
  window.location.reload()

};


  return  error ? ( 
  
    <span className="error-message">{error}</span>
  ) :(
    <div >
      <Header/>
 
      <h1 className="availableprojectscontent" color="black" id="caption">All projects</h1>
      <br/><br/>
         
     

        {bidcount}
         <ul>
        {ProjectsData.map(project => {
          return (
            <div className="card">
        <center><p style={{backgroundColor: "red"}}>{project.projectName}</p></center>
      <div className="container">

            
                    <li className="availableprojectscontent">Project Name: {project.projectName}</li> 
                    <li className="availableprojectscontent">Project Description: {project.projectDescription}</li> 
                    <li className="availableprojectscontent">Project Bidding count: {project.projectBiddingCount}</li> 
                    <li className="availableprojectscontent">Project published date: {project.publishedDate}</li>
                   { console.log(bidcount+"dsdfsdf")}
                   {/* {setbidcount(project.projectBiddingCount)} */}
                    <button onClick = {bidHandler(project._id)} >Bid project</button>

          

      </div>
      </div>
            
          )

        })} 
      </ul>  
      <br/>
      
      <br/>
     
      <br/><br/>
    


      <br/>
    
      
</div>
    
    
    
    
  )
}
export default ViewAvailableProjects;


