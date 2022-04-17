import { useState, useEffect } from "react";
import axios from "axios";
import "./PrivateScreen.css";
import { Link } from "react-router-dom";



const PrivateScreen = ({history}) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
  const [fetchGroupData, setGroupData] = useState("");
  const [member_1, setMember1] = useState("");
  const [member_2, setMember2] = useState("");
  const [member_3, setMember3] = useState("");
  const [member_4, setMember4] = useState("");
  const [member_5, setMember5] = useState("");
  const [group,setgroup] = useState("")
  //Supervisor suggestions moved to MatchedSupervisors component by Pasindu Vinod on 16/04/2022
  const [suggestions,setsuggestions] = useState("")
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

    const fetchGroupData = async () => {
      const groupconfig = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data} = await axios.get("/api/auth/group",groupconfig);
        const groupArray = data.data.split("/")
        console.log(groupArray[0])
        const group1 = groupArray[0].split(",")
        setgroup(group1)
        setGroupData(groupArray[0]);
      } catch (error) {

        // setError("Oops couldn't retreive group data");//fix this
      }
    };

    // Supervisor suggestions moved to MatchedSupervisors component by Pasindu Vinod on 16/04/2022
    const fetchsuggestions = async () => {
      const suggestconfig = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data} = await axios.get("/api/auth/group",suggestconfig);
        const sugArray = data.data.split("/")
        setsuggestions(sugArray[1]);
      } catch (error) {
        console.log(error)
        // setError("Oops couldn't retreive suggestions");//fix this
      }
    };
    fetchGroupData()
    // Supervisor suggestions moved to MatchedSupervisors component by Pasindu Vinod on 16/04/2022
    fetchsuggestions()
    fetchPrivateDate();
  }, [history]);

  //Logout feature
  const logOutHandler=()=>{
    localStorage.removeItem("authToken");
    history.push("/login");

  };

  const groupregisterHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/groupregister",
        { member_1,member_2,member_3,member_4,member_5 },
        config
      );



      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };



  
  return  error ? ( 
  
    <span className="error-message">{error}</span>
  ) : ( 

    <>
    <div id="back">
   
    <p style={{color:"#FF0",textAlign:"right"}}>
    Hello, {privateData}  
    &nbsp;&nbsp;&nbsp;&nbsp;
   
    <button onClick={logOutHandler} id="logout">Log Out</button>
      </p>
      <div className="button">
        <button onClick="/viewfeedback "><Link to="/viewfeedback" id="Regs">View Feedback</Link></button>
        <br/>
        <button onClick="/viewmarks "><Link to="/viewmarks" id="Regs">View marks</Link></button>

      </div>
      <p style={{color:"#FF0"}}>



      
        <br></br><Link to="matchedsupervisors" id="MatchedS"><button onClick="matchedsupervisors">Matched supervisors</button></Link><br></br>
        <br></br><Link to="GroupScreen" id="MatchedS"><button onClick="GroupScreen">Group</button></Link><br></br>
      {/* Supervisor suggestions moved to MatchedSupervisors component by Pasindu Vinod on 16/04/2022 */}
      
      </p>




    </div>
    </>
  );
};

export default PrivateScreen;
