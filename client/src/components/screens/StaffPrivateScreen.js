import { useState, useEffect } from "react";
import axios from "axios";
import "./StaffPrivateScreen.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";



const StaffPrivateScreen = ({history}) => {
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
        const { data} = await axios.get("/api/staffPrivate/staffPrivate", config);
        
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };



    fetchPrivateDate();
  }, [history]);

  //Logout feature
  const logOutHandler=()=>{
    localStorage.removeItem("authToken");
    history.push("/login");

  };

  return  error ? ( 
  
    <span className="error-message">{error}</span>
  ) : ( 

    <>
    <div id="back">

      <Header/>
    <h1 id="caption">Welcome to Staff dashboard {privateData}</h1>
    <p style={{color:"#FFF",textAlign:"right"}}>
 
    <button onClick={logOutHandler} id="logout">Log Out</button>
      </p>
      
    {/* <div classname="row1">
      <div className="StaffRectangle-36">
      <Link to= "#" id="Regs"><button className="buttons" onClick="#">Add Feedback</button></Link>
      

      <div className="Rectangle-43">
      <Link to="#" id="Regs"><button className="buttons" onClick="#">Add Marks</button></Link>
      </div>
      
      <div className="Rectangle-43">
      <Link to="/staffreport" id="Regs"><button className="buttons" onClick="/staffreport ">View Report</button></Link>
      </div>
         
      <div className="Rectangle-43">
      <Link to="/staffrecommendationform" id="Regs"><button className="buttons" onClick="/staffrecommendationform ">Staff</button></Link>
      </div>

      <div className="Rectangle-43">
      <Link to="/staffproject" id="Regs"><button className="buttons" onClick="/staffproject ">View projects</button></Link>
      </div>

      <div className="Rectangle-43">
      <Link to="/staffproject" id="Regs"><button className="buttons" onClick="/staffproject ">View projects</button></Link>
      </div>
    </div> */}
    <div className="row1">
      <div className="StaffRectangle-36" >
      {/* <Link to="/viewfeedback" id="Regs"><button className="buttons" onClick="/viewfeedback ">My Feedbacks</button></Link> */}
      <br></br><br></br><br></br><br></br><br></br><br></br>

      <Link to= "#" id="Regs"><button className="buttons" onClick="#">Add Feedback</button></Link>
        </div>

      <div className="StaffRectangle-37">
        {/* <Link to="/studenttopicinterestingform" id="Regs"><button className="buttons" onClick="/studenttopicinterestingform ">Student Topic Interestings</button></Link> */}
        <br/><br/><br/><br/><br/><br/>
        <Link to="#" id="Regs"><button className="buttons" onClick="#">Add Marks</button></Link>
        </div>

      <div className="StaffRectangle-38">
      <br/><br/><br/><br/><br/><br/>
      <Link to="/staffreport" id="Regs"><button className="buttons" onClick="/staffreport ">View Report</button></Link>
      </div>

      <div className="StaffRectangle-39">
      <br/><br/><br/><br/><br/><br/>
      <Link to="/staffrecommendationform" id="Regs"><button className="buttons" onClick="/staffrecommendationform ">Staff</button></Link>
      </div>

      <div className="StaffRectangle-40">
      <br/><br/><br/><br/><br/><br/>
      <Link to="/staffproject" id="Regs"><button className="buttons" onClick="/staffproject ">View projects</button></Link>
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

        

                  
  
    <Footer/>

     </div>
     </div>
    </>
  );
};

export default StaffPrivateScreen;