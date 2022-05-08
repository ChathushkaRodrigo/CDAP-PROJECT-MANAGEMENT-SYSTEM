
import { useState, useEffect } from "react";
import axios from "axios";
import "./SubmissionPage.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const SubmissionPage = ({history}) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");
    const [file, setFile] = useState("");
    const [test, setTest] = useState("");

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

      fetchPrivateDate();

      //Logout feature
    const logOutHandler=()=>{
        localStorage.removeItem("authToken");
        history.push("/login");
    
      };

      //Submission feature 
      const SubmissionHandler = async (e) =>{
          e.preventDefault();

        const config = {
            header: {
                "Content-Type" : "application/json",
            },
        };
   
        try {
            const { data } = await axios.post(
                "/api/auth/submitdocs",
                { 
                    file,
                    test
                },
                config
            );

            history.push("/");
            
        }catch (error) {
                setError(error.response.data.error);
                setTimeout(() => {
                    setError("");
                }, 5000);  
        }
        console.log(test,file)

      }

      return error ? (

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
                
                <p style={{color:"#FFF"}}>
                <br/><br/><br/><br/>
                
                </p>

                <div id="Form">
                    <form onSubmit={SubmissionHandler} className="group-screen__form">

                        <h3 className="login-screen__title">Add Submission</h3>

                        <div className="form-group">
                            <label>
                                Upload File
                            </label>
                            <input type="file"
                            className="input"
                            name="file"
                            onChange={(e) => setFile(e.target.value)}
                            value={file} />
                        </div>

                        <div className="form-group">
                            <label>
                                Test Text
                            </label>
                            <input type="text"
                            className="input"
                            name="test"
                            onChange={(e) => setTest(e.target.value)}
                            value={test} />
                        </div>

                        <button type="submit" className="btn btn-primary1" id="Log1Button">
                         Submit
                        </button>

                    </form>                     
                </div>

                <Footer/>

            </div>

        </>

      );


};

export default SubmissionPage;