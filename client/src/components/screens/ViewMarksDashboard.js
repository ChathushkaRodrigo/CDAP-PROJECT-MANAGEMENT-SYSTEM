import { useState, useEffect } from "react";
import axios from "axios";
import "./ViewMarksDashboard.css";
import { Link } from "react-router-dom"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideNavigationBar from "../SideNavigationBar/sideNavigationBarComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFileCircleCheck,faComment,faFile,faListCheck, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const ViewMarksDashboard = ({history}) => {
    const [error,setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
        const fetchPrivateDate = async () => {
            const config = {
                headers:{
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`,

                },
            };

            try{
                const { data } = await axios.get("/api/private",config);

                setPrivateData(data.data);
            }catch(error){
                localStorage.removeItem("authToken");
                setError("You are not authorized please login");
            }
        }

        fetchPrivateDate();
    }, [history]);

    //logout feature
    const logOutHandler=()=>{
        localStorage.removeItem("authToken");
        history.pusg("/login");
    };

    return error ? (
        <span className="error-message">{error}</span>
    ) : (
        <>
        <div id = "back">
            <Header/>
            <div class="flex flex-col items-center w-48 h-full-screen overflow-hidden text-gray-300 bg-gray-800 rounded  ">
            <SideNavigationBar page="StudentGrades"/>
            </div>
            <h1 id="caption" style={{marginTop:"-675px"}}>Welcome to your marks dashboard {privateData}</h1>
            {/* <p style={{color:"#FFF",textAlign:"right"}}>
                <button onClick={logOutHandler} id="logout">Log Out</button>
            </p> */}
            <div className="row1" style={{marginLeft:"200px"}}>
  

        {/* proposal presentation */}

      <div className="StaffRectangle-37">
        {/* <Link to="/studenttopicinterestingform" id="Regs"><button className="buttons" onClick="/studenttopicinterestingform ">Student Topic Interestings</button></Link> */}
        
        <FontAwesomeIcon  className = "fonticonsize" icon={faFileCircleCheck} /> 
        {/* <i class="fa-solid fa-comment"></i> */}
        {/* <Link to="#" id="Regs"><button className="buttons" onClick="#">Add Marks</button></Link> */}
        <Link to="/viewproposalpresentationmarks" id="Regs"><button className="buttons">Proposal presentation</button></Link>
        </div>

        <div className="StaffRectangle-37">
        {/* <Link to="/studenttopicinterestingform" id="Regs"><button className="buttons" onClick="/studenttopicinterestingform ">Student Topic Interestings</button></Link> */}
        
        <FontAwesomeIcon  className = "fonticonsize" icon={faFileCircleCheck} /> 
        {/* <i class="fa-solid fa-comment"></i> */}
        {/* <Link to="#" id="Regs"><button className="buttons" onClick="#">Add Marks</button></Link> */}
        <Link to="/viewproposalreportmarks" id="Regs"><button className="buttons">Proposal report</button></Link>
        </div>

        <div className="StaffRectangle-37">
        {/* <Link to="/studenttopicinterestingform" id="Regs"><button className="buttons" onClick="/studenttopicinterestingform ">Student Topic Interestings</button></Link> */}
        
        <FontAwesomeIcon  className = "fonticonsize" icon={faFileCircleCheck} /> 
        {/* <i class="fa-solid fa-comment"></i> */}
        {/* <Link to="#" id="Regs"><button className="buttons" onClick="#">Add Marks</button></Link> */}
        <Link to="/viewstatusdocument1marks" id="Regs"><button className="buttons">Status document 1 </button></Link>
        </div>

        <div className="StaffRectangle-37">
        {/* <Link to="/studenttopicinterestingform" id="Regs"><button className="buttons" onClick="/studenttopicinterestingform ">Student Topic Interestings</button></Link> */}
        
        <FontAwesomeIcon  className = "fonticonsize" icon={faFileCircleCheck} /> 
        {/* <i class="fa-solid fa-comment"></i> */}
        {/* <Link to="#" id="Regs"><button className="buttons" onClick="#">Add Marks</button></Link> */}
        <Link to="/viewprogresspresentation1marks" id="Regs"><button className="buttons">Progress Presentation 1 </button></Link>
        </div>

      
     

      
        

      {/* <div className="row2">
        <div className="StudentRectangle-41">
      <br/><br/><br/><br/><br/><br/>
      <Link to="/topicregistration" id="Regs">Register Topic</Link>
      </div>
      <div className="StudentRectangle-42">
      <br/><br/><br/><br/><br/><br/>
      <Link to="/viewavailableprojects" id="Regs">Available Projects</Link>
      </div>
      <div className="StudentRectangle-43">
      <br/><br/><br/><br/><br/><br/>
      <Link to="/submissionmilestone" id="Regs">Submit File</Link>
      </div>
      </div>
 */}

        

                  
  
    {/* <Footer/> */}

     </div>
     </div>
    </>
    )
}

export default ViewMarksDashboard;