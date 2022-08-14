import { useState, useEffect } from "react";
import axios from "axios";

// import { Link } from "react-router-dom";
// import "./StatusDocumentMarkingConfiguration.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { setMaxListeners } from "nodemailer/lib/xoauth2";


export default function StatusDocumentMarkingConfiguration() {

    const [error, setError] = useState("");
    const [totalContribution ,setTotalContribution] = useState("");
    const[stdesc01,setstDesc01] = useState("");
    const[stdesc02,setstDesc02] = useState("");
    const[stdesc03,setstDesc03] = useState("");
    const[stdesc04,setstDesc04] = useState("");
    const[marksEn01,setmarkEn01] = useState("");
    const[marksEn02,setmarkEn02] = useState("");
    const[marksEn03,setmarkEn03] = useState("");
    const[marksEn04,setmarkEn04] = useState("");

    const statusDocumentMarkingID = "62ba94a728099fe3e5aacf54";



    //************* UPDATE PROPOSAL REPORT MARKING RUBRIK HANDLER  **********/ 
  const statusDocumentMarkingHandler = async (e) => {
    e.preventDefault();
    try {
        const { data } = await axios.put(
            `/api/markingRubrik/statusDocumentMarkingConfiguration/update/${statusDocumentMarkingID}`,
            { totalContribution, stdesc01,stdesc02,stdesc03,stdesc04,marksEn01,marksEn02,marksEn03,marksEn04 }
            );

            console.log(stdesc01)
            alert("marking report updated success")

      
     
       
    } catch (error) {
        alert("Error updating marking notset")
          
    }
  };











  return (
<div className="h-[95rem] bg-[#22272E]">
<Header />
<div className="w-[55rem] ml-[20rem] mt-20 bg-[#161b22] rounded-lg">
<form onSubmit={statusDocumentMarkingHandler} >
<h1 className="ml-[9rem] text-4xl text-slate-100"> Status Document Marking Configuration</h1>
{error && <span className="error-message">{error}</span>}

<div className="ml-[15rem]">
<div className="form-group">
  <br/>
  <label className="TopicNames">Total Contribution %</label> <br/>
    <input type="text" 
    className = "input" style={{color:"white"}}
    name="name" 
    onChange={(e) => setTotalContribution(e.target.value)}
    value={totalContribution} />
  </div>
  <br/>

  <div className="form-group">
  <label className="TopicNames">Marks Entitled for Section 01</label> <br/>
    <input type="text" 
    className = "input" style={{color:"white"}}
    name="name" 
    onChange={(e) => setmarkEn01(e.target.value)}
    value={marksEn01} />
  </div>

  <br/>
  <div className="form-group">
  <label className="TopicNames">Marks Entitled for Section 02</label> <br/>
    <input type="text" 
    className = "input" style={{color:"white"}}
    name="name" 
    onChange={(e) => setmarkEn02(e.target.value)}
    value={marksEn02} />
  </div>
  <br/>
  <div className="form-group">
  <label className="TopicNames">Marks Entitled for Section 03</label>  <br/>
    <input type="text" 
    className = "input" style={{color:"white"}}
    name="name" 
    onChange={(e) => setmarkEn03(e.target.value)}
    value={marksEn03} />
  </div>
  <br/>
  <div className="form-group">
  <label className="TopicNames">Marks Entitled for Section 04</label>  <br/>
    <input type="text" 
    className = "input" style={{color:"white"}}
    name="name" 
    onChange={(e) => setmarkEn04(e.target.value)}
    value={marksEn04} />
  </div>
  <br/>
  <center/>
  </div>

  <div className="w-[50rem] ml-[3rem]">
  <div className="form-group">
    <div className="editor">
    <label className="TopicNames">Section 01</label>  <br/>
  <CKEditor 
  editor={ClassicEditor}
  data={stdesc01}
  onChange={(event,editor)=>{
    const data = editor.getData()
    setstDesc01(data)
  }}
  />
  <br/>

  <label className="TopicNames">Section 02</label>  <br/>
          <CKEditor
  editor={ClassicEditor}
  data={stdesc02}
  onChange={(event,editor)=>{
    const data = editor.getData()
    setstDesc02(data)
  }}
  />
  <br/>
  <label className="TopicNames">Section 03</label>  <br/>
          <CKEditor
  editor={ClassicEditor}
  data={stdesc03}
  onChange={(event,editor)=>{
    const data = editor.getData()
    setstDesc03(data)
  }}
  />
  <br/>
  <label className="TopicNames">Section 04</label>  <br/>
          <CKEditor className="section-content"
  editor={ClassicEditor}
  data={stdesc04}
  onChange={(event,editor)=>{
    const data = editor.getData()
    setstDesc04(data)
  }}
  /> 
  </div>
  <br/>
 
 
    </div>

    </div>
    <div className="form-group">


</div>
    



<div className="ml-[22rem]">
<button type="submit" className="btn btn-primary1" id="Log1Button">
    Submit!
  </button>
  </div>
  
</form>
<br/>

</div>
    </div>
  )
}



{/* <form onSubmit={statusDocumentMarkingHandler} className="bg-[#161b22]  mr-[70rem]  w-[700px] h-[85rem] mt-0">
<h3 className="login-screen__title"></h3>
{error && <span className="error-message">{error}</span>}


<div className="form-group">
  <label className="TopicNames">Total Contribution %</label> <br/>
    <input type="text" 
    className = "input" style={{color:"white"}}
    name="name" 
    onChange={(e) => setTotalContribution(e.target.value)}
    value={totalContribution} />
  </div>
  <br/>

  <div className="form-group">
  <label className="TopicNames">Marks Entitled for Section 01</label> <br/>
    <input type="text" 
    className = "input" style={{color:"white"}}
    name="name" 
    onChange={(e) => setmarkEn01(e.target.value)}
    value={marksEn01} />
  </div>

  <br/>
  <div className="form-group">
  <label className="TopicNames">Marks Entitled for Section 02</label> <br/>
    <input type="text" 
    className = "input" style={{color:"white"}}
    name="name" 
    onChange={(e) => setmarkEn02(e.target.value)}
    value={marksEn02} />
  </div>
  <br/>
  <div className="form-group">
  <label className="TopicNames">Marks Entitled for Section 03</label>  <br/>
    <input type="text" 
    className = "input" style={{color:"white"}}
    name="name" 
    onChange={(e) => setmarkEn03(e.target.value)}
    value={marksEn03} />
  </div>
  <br/>
  <div className="form-group">
  <label className="TopicNames">Marks Entitled for Section 04</label>  <br/>
    <input type="text" 
    className = "input" style={{color:"white"}}
    name="name" 
    onChange={(e) => setmarkEn04(e.target.value)}
    value={marksEn04} />
  </div>
  <br/>
  <center/>
  <div className="form-group">
    <div className="editor">
    <label className="TopicNames">Section 01</label>  <br/>
  <CKEditor 
  editor={ClassicEditor}
  data={stdesc01}
  onChange={(event,editor)=>{
    const data = editor.getData()
    setstDesc01(data)
  }}
  />
  <br/>

  <label className="TopicNames">Section 02</label>  <br/>
          <CKEditor
  editor={ClassicEditor}
  data={stdesc02}
  onChange={(event,editor)=>{
    const data = editor.getData()
    setstDesc02(data)
  }}
  />
  <br/>
  <label className="TopicNames">Section 03</label>  <br/>
          <CKEditor
  editor={ClassicEditor}
  data={stdesc03}
  onChange={(event,editor)=>{
    const data = editor.getData()
    setstDesc03(data)
  }}
  />
  <br/>
  <label className="TopicNames">Section 04</label>  <br/>
          <CKEditor className="section-content"
  editor={ClassicEditor}
  data={stdesc04}
  onChange={(event,editor)=>{
    const data = editor.getData()
    setstDesc04(data)
  }}
  /> 
  <br/>
 
 
    </div>

    </div>
    <div className="form-group">


</div>
    




<button type="submit" className="btn btn-primary1" id="Log1Button">
    Submit!
  </button>

  
</form> */}
