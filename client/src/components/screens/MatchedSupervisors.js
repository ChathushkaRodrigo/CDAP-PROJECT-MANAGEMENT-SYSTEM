import { useState, useEffect } from "react";
import axios from "axios";
import "./MatchedSupervisors.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MatchedSupervisors = ({history}) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");
    // const [fetchGroupData, setGroupData] = useState("")
    const [suggestions,setsuggestions] = useState("");
    const [SupervisorData, setSupervisorData] = useState("");
    
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
      const fetchAvailableSupervisors = async () => {
        const supconfig = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        };

        try {
          const {data} =  await axios.get("/api/group/viewAvailableSupervisors", supconfig);
          const array = Object.entries(data.data)
          setSupervisorData(data.data);
          //console.log(SupervisorData);
        }
        catch(error){}
      };
  

      // const fetchsuggestions = async () => {
      //   const suggestconfig = {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      //     },
      //   };
  
      //   try {
      //     const { data} = await axios.get("/api/group/group",suggestconfig);
      //     const sugArray = data.data.split("/")
      //     const suggArray = sugArray[1].split(",")
      //     console.log(suggArray)
      //     // console.log(suggArray)
      //     suggArray.map((a) => console.log(a))
      //     setsuggestions(suggArray);
      //   } catch (error) {
      //     console.log(error)
      //     // setError("Oops couldn't retreive suggestions");//fix this
      //   }
      // };
    //   fetchGroupData()
      // fetchsuggestions()
      fetchPrivateDate();
      fetchAvailableSupervisors();
    }, [history]);
  
    //Logout feature
    const logOutHandler=()=>{
      localStorage.removeItem("authToken");
      history.push("/login");
  
    };

    // const listHandler=()=>{
    //   try{

    //     const lists = suggestions.map((n)=>
    //     <li>{n}</li>)
    //     return(
    //       <ul>{lists}</ul>
    //     )
    //   }catch(e){
    //     console.error(e)
    //   }
    //   // <ul>
    //   // {suggestions.map((m) => <li>{m}</li>)}
    //   // </ul>
  
    // };


  
    return  error ? ( 
  
        <span className="error-message">{error}</span>
      ) : ( 
    
        <>
        <div id="back">
        <Header/>
        <p style={{color:"#FFF",textAlign:"right"}}>
        {privateData}  
        &nbsp;&nbsp;&nbsp;&nbsp;
       
        <button onClick={logOutHandler} id="logout">Log Out</button>
          </p>
          {/* <div id="card"> */}

          {/* <p style={{color:"#FFF"}}> */}
          
          
          {/* <h1 id="caption">Your Supervisor suggestions are</h1>
          <hr id="hr"></hr>
          <p id="List">
          {listHandler()}
          </p> */}



          {/* </p> */}
          {/* </div> */}



          {/* US-01 Pasindu Vinod*/}

          <div className="container text-xs text-gray-200 mt-1">
            Supervisors
            <br/>
            {SupervisorData.map (supervisor => {
              return (
                <p>{supervisor.Name}</p>
              )
              
            })}
          </div>


        <Footer/>
        </div>
        </>
      );
    };
    
    export default MatchedSupervisors;
