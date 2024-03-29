import React from 'react'
import "./StaffDashboard.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideNavigationBar from '../AdminNavigationBar/AdminNavigationBar';


export default function MarkingConfigurationsDashboard() {
  return (
    <div className="bg-gray-900 w-180  h-[55rem]">
    <div id="back ">
        <Header/>
        <div class="flex flex-col items-center w-48 h-full-screen overflow-hidden text-gray-300 bg-gray-800 rounded  ">
        <SideNavigationBar page="AdminMarkingConfigurations"/>
       </div>
        <div className="grid grid-cols-4  items-center gap-x-180 gap-y-4  ml-[30rem]" style={{marginTop:"-450px"}}>
                        <div class="w-64 gap-1  h-[100px] text-md rounded-lg flex justify-center items-center shadow-md bg-blue-700 lg:bg-gray-800 hover:bg-blue-700 duration-300 gap-x-100 ">
                                          <button>
                                          <a href='/proposalmarkingconfiguration'>Proposal Marking Configuration</a>
                                          
                                          </button>
                        </div>

                        <br/>
                     

                       <div class="w-64 gap-1  h-[100px] text-sm rounded-lg flex justify-center items-center shadow-md bg-blue-700 lg:bg-gray-800 hover:bg-blue-700 duration-300 gap-x-0.5">
                           <button>
                           <a href='/proposalreportmarkingconfiguration'> Proposal Report Marking Configuration</a>
                            </button>
                       </div>
                       <br/>
                       <div class="w-64 gap-1  h-[100px] text-sm rounded-lg flex justify-center items-center shadow-md bg-blue-700 lg:bg-gray-800 hover:bg-blue-700 duration-300 gap-x-0.5">
                           <button>
                           <a href='/statusdocumentmarkingconfiguration'>Status Document Marking Configuration</a>
                            </button>
                       </div>
                       <br/>
                       <div class="w-64 gap-1  h-[100px] text-sm rounded-lg flex justify-center items-center shadow-md bg-blue-700 lg:bg-gray-800 hover:bg-blue-700 duration-300 gap-x-0.5">
                           <button>
                           <a href='/progresspresentationmarkingconfiguration'> Progress Presentation Marking Configuration</a>
                            </button>
                       </div>
                       <br/>
                      


          </div>



    {/* <div className="StudentRectangle-42">
      <br/><br/>
      <Link to="/proposalmarkingconfiguration" id="Regs"> Proposal Presentation Configuration </Link>
      </div>

      <div className="StudentRectangle-43">
      <br/><br/>
      <Link to="/proposalreportmarkingconfiguration" id="Regs"> Proposal Report Configuration </Link>
      </div>

      <div className="StudentRectangle-39">
      <br/><br/>
      <Link to="/statusdocumentmarkingconfiguration" id="Regs"> Status Document 1 Configuration</Link>
      </div>


      <div className="StudentRectangle-42">
      <br/><br/>
      <Link to="/progresspresentationmarkingconfiguration" id="Regs"> Progress Presentation Configuration </Link>
      </div> */}


      
      
    </div>
    </div>
  )
}
