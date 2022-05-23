import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css"
import "./ViewMarks.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const SubmissionMilestones = ({history}) =>{
  const [fetchMarksData, setMarksData] = useState("")
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  useEffect(() => {

    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data} = await axios.get("/api/private", config);
        
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    const fetchMarksData = async () =>{
      const marksconfig = {
        headers: {
          "Content-Type":"application/json",
          Authorization:`Bearer ${localStorage.getItem("authToken")}`,
        },
      }

      try{
        const{data} = await axios.get("/api/student/viewmarks",marksconfig);
        setMarksData(data.data);
      }catch(error){

        
      }
    }
    fetchMarksData()
    fetchPrivateDate()
  }, [history])

  return  error ? ( 
  
    <span className="error-message">{error}</span>
  ) :(
    <div className="view-feedback">
      <Header/>
  <br/>
      <h1 id="caption">Milestones  </h1>
      <br/><br/>
      <div className="card">
      <div className="container">
        <h4 id="marks-topic"><b>Milestone 1 </b></h4> 
        <hr id="hr1"></hr>
        <p className="markscontent"> {fetchMarksData}</p> 
        <div className="placeBidToBtn" style={{fontWeight:"bold",backgroundColor:'#8256D0',width:"80px",borderRadius:"5px",color:"white",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",margin:"8px",padding:"2px",marginLeft:"30px"}}> <a href={`/submit`}>Submit Milestone</a></div>

      </div>
      </div>
      <br/>
      <div className="card">
      <div className="container">
        <h4 id="marks-topic"><b>Milestone 2 </b></h4> 
        <hr id="hr1"></hr>
        <p className="markscontent"> Not available</p> 
      </div>
      </div>
      <br/>
      <div className="card">
      <div className="container">
        <h4 id="marks-topic"><b>Milestone 3 </b></h4> 
        <hr id="hr1"></hr>
        <p className="markscontent"> Not available</p> 
      </div>
      </div>
      <br/><br/>
      <div className="card">
      <div className="container">
        <h4 id="marks-topic"><b>Milestone 4 </b></h4> 
        <hr id="hr1"></hr>
        <p className="markscontent"> Not available</p> 
      </div>
     
      </div>


      <br/>
      <Footer/>
      
</div>
    
    
    
    
  )
}
export default SubmissionMilestones;