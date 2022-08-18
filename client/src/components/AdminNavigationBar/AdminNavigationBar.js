import React from 'react'
// import "./SideNavigationBarComponent.css";
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState, useEffect } from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import {withRouter} from 'react-router-dom';


export default function SideNavigationBar({page}) {

  
     //Logout feature
     const logOutHandler=()=>{
        localStorage.removeItem("authToken");
        window.location = '/adminLogin';
    
      };

    return (


   
<div class="sidebar">
  {/* <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a> */}


<div  class="flex flex-col items-center w-48 h-full-screen overflow-hidden text-gray-300 bg-gray-800 rounded  " >
                <a class="flex items-center w-full px-3 mt-3" href="/dashboard">
                    <img src="https://cdn.discordapp.com/attachments/938131839661539339/973611175168327740/Favi.png" class="w-8 h-8" alt=""/>
                    <span class="ml-2 text-sm font-bold">Calibre Project Management</span>
                </a>
                <div class="w-full px-2">
                    <div class="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                        <a class={page == "AdminDashboard" ? "flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-gray-700 text-gray-100 rounded" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700"} href="/adminPrivate">
                            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Home</span>
                        </a>

                        {/* {page == "StudentTopicRegistrationForm" ? <a class="text-gray-100 rounded"></a> : <a class=" "></a>} */}

                        <a class={page == "AdminProjects" ? "flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-gray-700 text-gray-100 rounded" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700"} href="/adminViewProjects">
                            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z" />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Projects</span>
                        </a>

                        <a class={page == "AdminMarkingConfigurations" ? "flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-gray-700 text-gray-100 rounded" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700"} href="/markingconfiguations">
                            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 10 0 C 4.488281 0 0 4.488281 0 10 L 0 40 C 0 45.511719 4.488281 50 10 50 L 40 50 C 45.511719 50 50 45.511719 50 40 L 50 10 C 50 4.488281 45.511719 0 40 0 Z M 10 2 L 40 2 C 44.433594 2 48 5.566406 48 10 L 48 40 C 48 44.433594 44.433594 48 40 48 L 10 48 C 5.566406 48 2 44.433594 2 40 L 2 10 C 2 5.566406 5.566406 2 10 2 Z M 20.5 8 C 19.722656 8 19.0625 8.660156 19.0625 9.4375 C 19.0625 12.257813 17.582031 14.199219 16.03125 15.53125 C 15.257813 16.195313 14.46875 16.679688 13.875 17 C 13.578125 17.160156 13.359375 17.296875 13.1875 17.375 C 13.015625 17.453125 12.804688 17.515625 12.9375 17.46875 C 12.925781 17.46875 12.917969 17.46875 12.90625 17.46875 C 12.359375 17.683594 12 18.226563 12 18.8125 L 12 22.59375 C 12 23.371094 12.691406 24 13.4375 24 L 16 24 L 16 33.65625 C 16 34.214844 16.058594 36.652344 17.15625 39.09375 C 18.253906 41.535156 20.621094 44 24.75 44 C 31.265625 44 34.304688 41.484375 34.5 41.3125 C 34.511719 41.3125 34.519531 41.3125 34.53125 41.3125 C 34.835938 41.042969 35 40.660156 35 40.25 L 35 35.75 C 35 35.230469 34.703125 34.75 34.25 34.5 C 33.804688 34.25 33.257813 34.246094 32.8125 34.53125 C 32.929688 34.457031 32.808594 34.53125 32.75 34.5625 C 32.691406 34.59375 32.582031 34.660156 32.46875 34.71875 C 32.242188 34.835938 31.9375 35 31.53125 35.15625 C 30.71875 35.46875 29.59375 35.75 28.4375 35.75 C 27.148438 35.75 26.699219 35.273438 26.375 34.71875 C 26.214844 34.441406 26.117188 34.148438 26.0625 33.90625 C 26.007813 33.664063 26 33.410156 26 33.5 L 26 24 L 31.5625 24 C 32.386719 24 33 23.339844 33 22.5625 L 33 17.4375 C 33 16.660156 32.378906 16 31.5625 16 L 26 16 L 26 9.4375 C 26 8.660156 25.339844 8 24.5625 8 Z M 21 10 L 24 10 L 24 17 C 24 17.550781 24.449219 18 25 18 L 31 18 L 31 22 L 25 22 C 24.449219 22 24 22.449219 24 23 L 24 33.5 C 24 33.714844 24.035156 33.949219 24.125 34.34375 C 24.214844 34.738281 24.359375 35.210938 24.65625 35.71875 C 25.246094 36.734375 26.519531 37.75 28.4375 37.75 C 29.9375 37.75 31.28125 37.375 32.25 37 C 32.5625 36.878906 32.769531 36.796875 33 36.6875 L 33 39.90625 C 32.757813 40.113281 30.488281 42 24.75 42 C 21.363281 42 19.863281 40.269531 18.96875 38.28125 C 18.074219 36.292969 18 34.054688 18 33.65625 L 18 23 C 18 22.449219 17.550781 22 17 22 L 14 22 L 14 19.1875 C 14.210938 19.09375 14.5 18.9375 14.84375 18.75 C 15.53125 18.378906 16.429688 17.84375 17.34375 17.0625 C 19.0625 15.585938 20.800781 13.214844 21 10 Z" />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Marking Configuration</span>
                        </a>
                        
                        <a class={page == "AdminStudentGroups" ? "flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-gray-700 text-gray-100 rounded" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700"} href="/adminAvailableProjectGroups">
                            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 37 0 C 32.59375 0 29 3.59375 29 8 C 29 12.40625 32.59375 16 37 16 C 41.40625 16 45 12.40625 45 8 C 45 3.59375 41.40625 0 37 0 Z M 21.5 1 C 17.921875 1 15 3.921875 15 7.5 C 15 11.078125 17.921875 14 21.5 14 C 25.078125 14 28 11.078125 28 7.5 C 28 3.921875 25.078125 1 21.5 1 Z M 37 2 C 40.324219 2 43 4.675781 43 8 C 43 11.324219 40.324219 14 37 14 C 33.675781 14 31 11.324219 31 8 C 31 4.675781 33.675781 2 37 2 Z M 9 3 C 6.25 3 4 5.25 4 8 C 4 10.75 6.25 13 9 13 C 11.75 13 14 10.75 14 8 C 14 5.25 11.75 3 9 3 Z M 21.5 3 C 23.996094 3 26 5.003906 26 7.5 C 26 9.996094 23.996094 12 21.5 12 C 19.003906 12 17 9.996094 17 7.5 C 17 5.003906 19.003906 3 21.5 3 Z M 9 5 C 10.667969 5 12 6.332031 12 8 C 12 9.667969 10.667969 11 9 11 C 7.332031 11 6 9.667969 6 8 C 6 6.332031 7.332031 5 9 5 Z M 9 15 C 5.15625 15 2 18.15625 2 22 L 2 34 C 2 34.550781 2.449219 35 3 35 L 13 35 L 13 40 C 13 40.550781 13.449219 41 14 41 L 24 41 L 24 49 C 24 49.550781 24.449219 50 25 50 L 47 50 C 47.550781 50 48 49.550781 48 49 L 48 31 C 48 24.363281 42.636719 19 36 19 C 33.4375 19 31.179688 19.914063 29.253906 21.269531 C 27.964844 18.183594 25 16 21.5 16 C 18.945313 16 16.738281 17.132813 15.1875 18.851563 C 14.023438 16.570313 11.6875 15 9 15 Z M 9 17 C 11.417969 17 13.503906 18.757813 13.917969 21.078125 C 13.988281 21.492188 14.316406 21.816406 14.734375 21.886719 C 15.148438 21.957031 15.5625 21.761719 15.769531 21.390625 C 16.910156 19.378906 18.96875 18 21.5 18 C 24.542969 18 27.136719 20.082031 27.828125 22.9375 C 27.910156 23.277344 28.167969 23.550781 28.503906 23.65625 C 28.839844 23.757813 29.203125 23.679688 29.46875 23.445313 C 31.1875 21.90625 33.4375 21 36 21 C 41.566406 21 46 25.433594 46 31 L 46 48 L 26 48 L 26 40 C 26 39.449219 25.550781 39 25 39 L 15 39 L 15 34 C 15 33.449219 14.550781 33 14 33 L 4 33 L 4 22 C 4 19.246094 6.246094 17 9 17 Z" />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Student Groups</span>
                        </a>
                        <a class={page == "AdminPlaceAnnouncement" ? "flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-gray-700 text-gray-100 rounded" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700"} href="/placeAnnouncement">
                            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 25 1 C 11.222656 1 0 10.878906 0 23.1875 C 0 29.234375 2.773438 34.664063 7.21875 38.6875 C 6.546875 40.761719 5.046875 42.398438 3.53125 43.65625 C 2.714844 44.332031 1.933594 44.910156 1.3125 45.46875 C 1.003906 45.746094 0.722656 46.027344 0.5 46.375 C 0.277344 46.722656 0.078125 47.21875 0.21875 47.75 L 0.34375 48.15625 L 0.6875 48.375 C 1.976563 49.117188 3.582031 49.246094 5.3125 49.125 C 7.042969 49.003906 8.929688 48.605469 10.78125 48.09375 C 14.375 47.101563 17.75 45.6875 19.53125 44.90625 C 21.289063 45.273438 23.054688 45.5 24.90625 45.5 C 38.683594 45.5 49.90625 35.621094 49.90625 23.3125 C 49.90625 11.007813 38.78125 1 25 1 Z M 25 3 C 37.820313 3 47.90625 12.214844 47.90625 23.3125 C 47.90625 34.402344 37.730469 43.5 24.90625 43.5 C 23.078125 43.5 21.355469 43.320313 19.625 42.9375 L 19.28125 42.84375 L 19 43 C 17.328125 43.738281 13.792969 45.179688 10.25 46.15625 C 8.476563 46.644531 6.710938 47.019531 5.1875 47.125 C 4.167969 47.195313 3.539063 46.953125 2.84375 46.78125 C 3.339844 46.355469 4.019531 45.847656 4.8125 45.1875 C 6.554688 43.742188 8.644531 41.730469 9.375 38.75 L 9.53125 38.125 L 9.03125 37.75 C 4.625 34.015625 2 28.875 2 23.1875 C 2 12.097656 12.175781 3 25 3 Z M 23.8125 12.8125 C 23.511719 12.8125 23.40625 12.988281 23.40625 13.1875 L 23.40625 15.8125 C 23.40625 16.113281 23.613281 16.1875 23.8125 16.1875 L 26.1875 16.1875 C 26.488281 16.1875 26.59375 16.011719 26.59375 15.8125 L 26.59375 13.1875 C 26.59375 12.886719 26.386719 12.8125 26.1875 12.8125 Z M 23.90625 20.09375 C 23.605469 20.09375 23.5 20.300781 23.5 20.5 L 23.5 33.90625 C 23.5 34.207031 23.707031 34.3125 23.90625 34.3125 L 23.90625 34.40625 L 26.1875 34.40625 C 26.488281 34.40625 26.59375 34.199219 26.59375 34 L 26.59375 20.5 C 26.59375 20.199219 26.386719 20.09375 26.1875 20.09375 Z" />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Announcements</span>
                        </a>
                        <a class={page == "AdminSubmission" ? "flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-gray-700 text-gray-100 rounded" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700"} href="/submissionadmin">
                            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Submission Configurations</span>
                            
                        </a>
                    </div>
                    <div class="flex flex-col items-center w-full mt-2 border-t border-gray-700">
                        {/* <a class={page == "StudentMilestones" ? "flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-gray-700 text-gray-100 rounded" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700"} href="/submissionmilestone">
                            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 26.5625 1 C 22.636719 1 19.40625 4.132813 19.40625 8 C 19.40625 9.734375 20.070313 11.074219 21.125 12.5625 C 21.984375 13.777344 21.9375 14.433594 21.84375 14.625 C 21.75 14.816406 21.398438 15.0625 20.46875 15 C 18.039063 14.835938 10.25 13.9375 10.25 13.9375 L 10.25 13.96875 C 9.308594 13.839844 8.367188 14.242188 7.875 14.90625 C 7.398438 15.550781 7.21875 16.308594 7.125 17.09375 C 7.125 17.09375 7.125 17.15625 7.125 17.15625 C 7.121094 17.179688 7.097656 17.195313 7.09375 17.21875 L 7.125 17.21875 C 7.113281 17.261719 6.691406 19.207031 6.0625 27.46875 C 6.054688 27.597656 6.042969 27.496094 6.03125 27.625 L 6.0625 27.625 C 6.011719 28.011719 6.054688 28.359375 6.0625 28.40625 C 6.1875 29.042969 6.539063 29.675781 7.125 29.96875 C 7.710938 30.261719 8.304688 30.183594 8.8125 30.03125 C 9.832031 29.726563 10.792969 29.046875 11.78125 28.34375 C 12.949219 27.515625 14.046875 27 15.3125 27 C 18.183594 27 20.46875 29.238281 20.46875 32 C 20.46875 34.761719 18.183594 37 15.3125 37 C 13.886719 37 13.078125 36.632813 11.71875 35.5625 C 10.960938 34.96875 10.074219 34.324219 9.125 33.96875 C 8.648438 33.792969 8.140625 33.6875 7.5625 33.8125 C 6.984375 33.9375 6.425781 34.414063 6.1875 35 C 5.941406 35.601563 5.953125 36.023438 6.03125 36.53125 C 6.035156 36.582031 6.027344 36.542969 6.03125 36.59375 C 6.621094 42.714844 6.917969 43.3125 7.125 44.21875 C 7.273438 44.867188 7.539063 45.527344 8.03125 46.0625 C 8.523438 46.597656 9.300781 47 10.15625 47 L 42.1875 47 C 43.300781 47 44.308594 46.632813 45 45.9375 C 45.691406 45.242188 46 44.277344 46 43.25 L 46 17.375 C 46 16.414063 45.644531 15.59375 45.09375 15.03125 C 44.542969 14.46875 43.863281 14.160156 43.21875 13.96875 C 43.097656 13.933594 42.96875 13.925781 42.84375 13.9375 C 42.84375 13.9375 35.316406 14.683594 32.59375 15 C 31.800781 15.089844 31.527344 14.914063 31.40625 14.65625 C 31.285156 14.398438 31.234375 13.667969 31.96875 12.5 C 32.523438 11.617188 32.949219 10.972656 33.25 10.28125 C 33.550781 9.589844 33.6875 8.863281 33.6875 8 C 33.6875 4.132813 30.488281 1 26.5625 1 Z M 26.5625 3 C 29.433594 3 31.6875 5.238281 31.6875 8 C 31.6875 8.664063 31.609375 9.035156 31.40625 9.5 C 31.203125 9.964844 30.839844 10.546875 30.28125 11.4375 C 29.34375 12.929688 29.046875 14.34375 29.59375 15.5 C 30.140625 16.65625 31.480469 17.152344 32.8125 17 C 35.398438 16.699219 42.386719 16.007813 42.78125 15.96875 C 43.171875 16.101563 43.515625 16.230469 43.6875 16.40625 C 43.882813 16.605469 44 16.824219 44 17.375 L 44 43.25 C 44 43.878906 43.824219 44.265625 43.5625 44.53125 C 43.300781 44.796875 42.902344 45 42.1875 45 L 10.15625 45 C 9.878906 45 9.722656 44.929688 9.53125 44.71875 C 9.339844 44.507813 9.148438 44.148438 9.0625 43.78125 C 8.804688 42.664063 8.628906 42.5625 8.03125 36.34375 C 8.023438 36.324219 8.011719 36.300781 8 36.28125 C 7.980469 36.171875 8.082031 35.625 8.03125 35.75 C 8.066406 35.75 8.199219 35.753906 8.4375 35.84375 C 8.980469 36.046875 9.78125 36.613281 10.46875 37.15625 C 12 38.359375 13.472656 39 15.3125 39 C 19.238281 39 22.46875 35.867188 22.46875 32 C 22.46875 28.132813 19.238281 25 15.3125 25 C 13.488281 25 11.953125 25.773438 10.625 26.71875 C 9.675781 27.394531 8.742188 27.976563 8.25 28.125 C 8.15625 28.152344 8.109375 28.152344 8.0625 28.15625 C 8.058594 28.128906 8.050781 28.121094 8.03125 28.03125 C 8.019531 27.96875 8.03125 27.921875 8.03125 27.90625 C 8.035156 27.863281 8.035156 27.824219 8.03125 27.78125 C 8.679688 19.132813 9.0625 17.5625 9.0625 17.5625 C 9.074219 17.523438 9.085938 17.480469 9.09375 17.4375 C 9.164063 16.789063 9.324219 16.292969 9.46875 16.09375 C 9.613281 15.894531 9.585938 15.875 9.96875 15.9375 C 9.988281 15.9375 10.011719 15.9375 10.03125 15.9375 C 10.03125 15.9375 17.722656 16.824219 20.34375 17 C 21.71875 17.09375 23.078125 16.683594 23.65625 15.5 C 24.234375 14.316406 23.8125 12.910156 22.75 11.40625 C 21.769531 10.023438 21.40625 9.273438 21.40625 8 C 21.40625 5.238281 23.691406 3 26.5625 3 Z" />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Milestones</span>
                        </a> */}
                        {/* <a class={page == "StudentStatus" ? "flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-gray-700 text-gray-100 rounded" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700"} href="/status">
                            <svg class="w-6 h-6 stroke-current"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Status</span>
                        </a> */}
                        {/* <a class={page == "StudentTopicInterestings" ? "flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-gray-700 text-gray-100 rounded" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700"} href="/studenttopicinterestingform">
                            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 10 0 C 4.488281 0 0 4.488281 0 10 L 0 40 C 0 45.511719 4.488281 50 10 50 L 40 50 C 45.511719 50 50 45.511719 50 40 L 50 10 C 50 4.488281 45.511719 0 40 0 Z M 10 2 L 40 2 C 44.433594 2 48 5.566406 48 10 L 48 40 C 48 44.433594 44.433594 48 40 48 L 10 48 C 5.566406 48 2 44.433594 2 40 L 2 10 C 2 5.566406 5.566406 2 10 2 Z M 20.5 8 C 19.722656 8 19.0625 8.660156 19.0625 9.4375 C 19.0625 12.257813 17.582031 14.199219 16.03125 15.53125 C 15.257813 16.195313 14.46875 16.679688 13.875 17 C 13.578125 17.160156 13.359375 17.296875 13.1875 17.375 C 13.015625 17.453125 12.804688 17.515625 12.9375 17.46875 C 12.925781 17.46875 12.917969 17.46875 12.90625 17.46875 C 12.359375 17.683594 12 18.226563 12 18.8125 L 12 22.59375 C 12 23.371094 12.691406 24 13.4375 24 L 16 24 L 16 33.65625 C 16 34.214844 16.058594 36.652344 17.15625 39.09375 C 18.253906 41.535156 20.621094 44 24.75 44 C 31.265625 44 34.304688 41.484375 34.5 41.3125 C 34.511719 41.3125 34.519531 41.3125 34.53125 41.3125 C 34.835938 41.042969 35 40.660156 35 40.25 L 35 35.75 C 35 35.230469 34.703125 34.75 34.25 34.5 C 33.804688 34.25 33.257813 34.246094 32.8125 34.53125 C 32.929688 34.457031 32.808594 34.53125 32.75 34.5625 C 32.691406 34.59375 32.582031 34.660156 32.46875 34.71875 C 32.242188 34.835938 31.9375 35 31.53125 35.15625 C 30.71875 35.46875 29.59375 35.75 28.4375 35.75 C 27.148438 35.75 26.699219 35.273438 26.375 34.71875 C 26.214844 34.441406 26.117188 34.148438 26.0625 33.90625 C 26.007813 33.664063 26 33.410156 26 33.5 L 26 24 L 31.5625 24 C 32.386719 24 33 23.339844 33 22.5625 L 33 17.4375 C 33 16.660156 32.378906 16 31.5625 16 L 26 16 L 26 9.4375 C 26 8.660156 25.339844 8 24.5625 8 Z M 21 10 L 24 10 L 24 17 C 24 17.550781 24.449219 18 25 18 L 31 18 L 31 22 L 25 22 C 24.449219 22 24 22.449219 24 23 L 24 33.5 C 24 33.714844 24.035156 33.949219 24.125 34.34375 C 24.214844 34.738281 24.359375 35.210938 24.65625 35.71875 C 25.246094 36.734375 26.519531 37.75 28.4375 37.75 C 29.9375 37.75 31.28125 37.375 32.25 37 C 32.5625 36.878906 32.769531 36.796875 33 36.6875 L 33 39.90625 C 32.757813 40.113281 30.488281 42 24.75 42 C 21.363281 42 19.863281 40.269531 18.96875 38.28125 C 18.074219 36.292969 18 34.054688 18 33.65625 L 18 23 C 18 22.449219 17.550781 22 17 22 L 14 22 L 14 19.1875 C 14.210938 19.09375 14.5 18.9375 14.84375 18.75 C 15.53125 18.378906 16.429688 17.84375 17.34375 17.0625 C 19.0625 15.585938 20.800781 13.214844 21 10 Z" />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Topic Interestings</span>
                            <span class="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-gray-500 rounded-full "></span>
                        </a> */}
                        {/* <a class={page == "StudentGroups" ? "flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-gray-700 text-gray-100 rounded" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700"} href="/GroupScreen">
                            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 37 0 C 32.59375 0 29 3.59375 29 8 C 29 12.40625 32.59375 16 37 16 C 41.40625 16 45 12.40625 45 8 C 45 3.59375 41.40625 0 37 0 Z M 21.5 1 C 17.921875 1 15 3.921875 15 7.5 C 15 11.078125 17.921875 14 21.5 14 C 25.078125 14 28 11.078125 28 7.5 C 28 3.921875 25.078125 1 21.5 1 Z M 37 2 C 40.324219 2 43 4.675781 43 8 C 43 11.324219 40.324219 14 37 14 C 33.675781 14 31 11.324219 31 8 C 31 4.675781 33.675781 2 37 2 Z M 9 3 C 6.25 3 4 5.25 4 8 C 4 10.75 6.25 13 9 13 C 11.75 13 14 10.75 14 8 C 14 5.25 11.75 3 9 3 Z M 21.5 3 C 23.996094 3 26 5.003906 26 7.5 C 26 9.996094 23.996094 12 21.5 12 C 19.003906 12 17 9.996094 17 7.5 C 17 5.003906 19.003906 3 21.5 3 Z M 9 5 C 10.667969 5 12 6.332031 12 8 C 12 9.667969 10.667969 11 9 11 C 7.332031 11 6 9.667969 6 8 C 6 6.332031 7.332031 5 9 5 Z M 9 15 C 5.15625 15 2 18.15625 2 22 L 2 34 C 2 34.550781 2.449219 35 3 35 L 13 35 L 13 40 C 13 40.550781 13.449219 41 14 41 L 24 41 L 24 49 C 24 49.550781 24.449219 50 25 50 L 47 50 C 47.550781 50 48 49.550781 48 49 L 48 31 C 48 24.363281 42.636719 19 36 19 C 33.4375 19 31.179688 19.914063 29.253906 21.269531 C 27.964844 18.183594 25 16 21.5 16 C 18.945313 16 16.738281 17.132813 15.1875 18.851563 C 14.023438 16.570313 11.6875 15 9 15 Z M 9 17 C 11.417969 17 13.503906 18.757813 13.917969 21.078125 C 13.988281 21.492188 14.316406 21.816406 14.734375 21.886719 C 15.148438 21.957031 15.5625 21.761719 15.769531 21.390625 C 16.910156 19.378906 18.96875 18 21.5 18 C 24.542969 18 27.136719 20.082031 27.828125 22.9375 C 27.910156 23.277344 28.167969 23.550781 28.503906 23.65625 C 28.839844 23.757813 29.203125 23.679688 29.46875 23.445313 C 31.1875 21.90625 33.4375 21 36 21 C 41.566406 21 46 25.433594 46 31 L 46 48 L 26 48 L 26 40 C 26 39.449219 25.550781 39 25 39 L 15 39 L 15 34 C 15 33.449219 14.550781 33 14 33 L 4 33 L 4 22 C 4 19.246094 6.246094 17 9 17 Z" />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Groups</span>
                        </a> */}
                        {/* <a class={page == "StudentFeedbacks" ? "flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-gray-700 text-gray-100 rounded" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700"} href="/viewfeedback">
                            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 27.257813 1.007813 C 26.824219 0.964844 26.378906 1.042969 25.976563 1.179688 C 25.175781 1.445313 24.390625 1.960938 23.675781 2.675781 C 22.960938 3.386719 22.445313 4.175781 22.179688 4.976563 C 21.914063 5.773438 21.867188 6.753906 22.558594 7.445313 C 23.460938 8.347656 23.996094 9.285156 24.339844 10.25 C 24.3125 10.273438 24.285156 10.296875 24.265625 10.324219 L 13.359375 22.222656 C 13.355469 22.222656 13.351563 22.226563 13.351563 22.226563 C 13.179688 22.371094 13.058594 22.566406 13.011719 22.785156 L 9.148438 32.445313 C 8.992188 32.671875 8.9375 32.949219 8.992188 33.214844 C 9.050781 33.480469 9.210938 33.714844 9.445313 33.859375 L 16 40.414063 L 16 43.03125 C 13.148438 43.164063 11.046875 43.855469 9.628906 44.585938 C 8.835938 44.992188 8.257813 45.40625 7.859375 45.734375 C 7.664063 45.902344 7.511719 46.046875 7.398438 46.160156 C 7.34375 46.21875 7.300781 46.269531 7.257813 46.324219 C 7.234375 46.351563 7.210938 46.375 7.179688 46.421875 C 7.167969 46.445313 7.148438 46.46875 7.117188 46.527344 C 7.105469 46.554688 7.085938 46.585938 7.0625 46.648438 C 7.054688 46.679688 7.027344 46.769531 7.027344 46.769531 C 7.027344 46.773438 7 47 7 47 L 7 48 C 7 48.550781 7.449219 49 8 49 L 26 49 C 26.550781 49 27 48.550781 27 48 L 27 47 C 27 46.761719 26.914063 46.53125 26.761719 46.347656 C 26.761719 46.347656 25.953125 45.433594 24.375 44.613281 C 22.957031 43.878906 20.855469 43.167969 18 43.03125 L 18 40.535156 L 23.554688 36.832031 C 23.816406 36.65625 23.980469 36.367188 24 36.054688 C 24.015625 35.738281 23.882813 35.433594 23.640625 35.234375 L 18.3125 30.792969 L 22.769531 23.65625 C 22.960938 23.429688 23.046875 23.132813 23 22.84375 L 23 15 C 23 14.898438 22.988281 14.800781 22.957031 14.703125 L 24.839844 12.65625 C 24.882813 13.082031 24.925781 13.511719 24.953125 13.953125 C 25.097656 16.300781 25.085938 18.914063 27.085938 20.914063 C 27.136719 20.96875 27.195313 21.015625 27.257813 21.054688 C 28.570313 22.207031 30.515625 22.207031 32.445313 21.5625 C 34.457031 20.890625 36.613281 19.507813 38.5625 17.5625 C 40.507813 15.613281 41.890625 13.457031 42.5625 11.445313 C 43.203125 9.523438 43.207031 7.589844 42.074219 6.28125 C 42.03125 6.214844 41.980469 6.152344 41.921875 6.097656 C 41.921875 6.09375 41.917969 6.089844 41.914063 6.085938 C 41.90625 6.078125 41.902344 6.074219 41.894531 6.070313 C 41.894531 6.066406 41.890625 6.066406 41.890625 6.0625 C 41.886719 6.0625 41.882813 6.058594 41.878906 6.054688 C 41.859375 6.039063 41.835938 6.023438 41.816406 6.007813 C 41.664063 5.863281 41.503906 5.734375 41.332031 5.625 C 39.164063 3.976563 36.804688 4.039063 34.769531 4 C 32.5625 3.957031 30.660156 3.851563 28.453125 1.570313 C 28.109375 1.214844 27.691406 1.050781 27.257813 1.007813 Z M 27.015625 2.960938 C 29.636719 5.667969 32.429688 5.957031 34.730469 6 C 34.882813 6.003906 35.015625 6.007813 35.164063 6.007813 C 34.398438 6.375 33.628906 6.839844 32.863281 7.382813 C 32.859375 7.386719 32.855469 7.386719 32.851563 7.390625 C 32.734375 7.445313 32.632813 7.523438 32.546875 7.621094 C 32.542969 7.621094 32.542969 7.621094 32.542969 7.625 C 31.828125 8.160156 31.121094 8.757813 30.4375 9.4375 C 29.734375 10.144531 29.113281 10.878906 28.566406 11.621094 C 28.527344 11.660156 28.492188 11.707031 28.457031 11.753906 C 27.863281 12.578125 27.363281 13.414063 26.972656 14.234375 C 26.964844 14.097656 26.957031 13.976563 26.949219 13.832031 C 26.800781 11.410156 26.453125 8.511719 23.96875 6.03125 C 24.042969 6.101563 23.941406 6.019531 24.078125 5.609375 C 24.214844 5.195313 24.566406 4.609375 25.089844 4.089844 C 25.613281 3.566406 26.195313 3.214844 26.609375 3.074219 C 27.027344 2.933594 27.09375 3.042969 27.015625 2.960938 Z M 38.808594 7.007813 C 39.417969 6.976563 39.898438 7.089844 40.246094 7.304688 C 40.332031 7.375 40.421875 7.4375 40.515625 7.515625 C 41.046875 8.066406 41.203125 9.199219 40.667969 10.8125 C 40.125 12.441406 38.902344 14.390625 37.144531 16.144531 C 35.390625 17.902344 33.441406 19.125 31.8125 19.667969 C 30.183594 20.207031 29.042969 20.042969 28.5 19.5 C 27.957031 18.957031 27.792969 17.816406 28.332031 16.1875 C 28.558594 15.511719 28.929688 14.769531 29.378906 14.019531 C 30.082031 14.628906 31 15 32 15 C 34.199219 15 36 13.199219 36 11 C 36 10 35.628906 9.082031 35.019531 8.378906 C 35.769531 7.929688 36.511719 7.558594 37.1875 7.335938 C 37.796875 7.128906 38.339844 7.027344 38.808594 7.007813 Z M 33.347656 9.53125 C 33.746094 9.894531 34 10.410156 34 11 C 34 12.117188 33.117188 13 32 13 C 31.410156 13 30.894531 12.746094 30.53125 12.347656 C 30.929688 11.84375 31.367188 11.339844 31.855469 10.855469 C 32.339844 10.367188 32.84375 9.929688 33.347656 9.53125 Z M 21 16.84375 L 21 22 L 16.273438 22 Z M 14.675781 24 L 20.195313 24 L 16.355469 30.144531 L 11.6875 31.480469 Z M 16.765625 32.105469 L 21.332031 35.910156 L 17.125 38.714844 L 11.90625 33.496094 Z M 16.863281 45.003906 C 16.957031 45.015625 17.046875 45.015625 17.136719 45.003906 C 20.121094 45.023438 22.164063 45.71875 23.453125 46.386719 C 24.089844 46.714844 24.035156 46.773438 24.320313 47 L 9.5625 47 C 9.835938 46.800781 10.085938 46.601563 10.542969 46.363281 C 11.832031 45.703125 13.875 45.023438 16.863281 45.003906 Z" />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Feedback</span>
                        </a> */}
                        {/* <a class={page == "StudentMeetings" ? "flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-gray-700 text-gray-100 rounded" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700"} href="https://cdap-app-365.herokuapp.com/">
                            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 22 1 L 22 9 L 20 9 L 20 11 L 23.265625 11 L 11.070312 32.001953 A 1.0001 1.0001 0 0 0 11 32 C 11 32 7.4906773 31.93328 5.8320312 29.445312 A 1.0001 1.0001 0 0 0 4.9882812 28.988281 A 1.0001 1.0001 0 0 0 4.1679688 30.554688 C 5.8148272 33.024975 8.4980182 33.712392 9.9609375 33.910156 L 5.2636719 42 L 17.820312 42 L 17.191406 45.767578 L 14.242188 45.029297 A 1.0004596 1.0004596 0 1 0 13.757812 46.970703 L 17.757812 47.970703 A 1.0001 1.0001 0 0 0 18.986328 47.164062 L 19.847656 42 L 31.152344 42 L 32.013672 47.164062 A 1.0001 1.0001 0 0 0 33.316406 47.949219 L 36.316406 46.949219 A 1.0005646 1.0005646 0 1 0 35.683594 45.050781 L 33.792969 45.681641 L 33.179688 42 L 44.736328 42 L 40.039062 33.910156 C 41.501982 33.712392 44.185173 33.024975 45.832031 30.554688 A 1.0001 1.0001 0 0 0 44.980469 28.988281 A 1.0001 1.0001 0 0 0 44.167969 29.445312 C 42.509323 31.933282 39 32 39 32 A 1.0001 1.0001 0 0 0 38.931641 32.001953 L 26.734375 11 L 30 11 L 30 9 L 28 9 L 28 1 L 22 1 z M 24 3 L 26 3 L 26 9 L 24 9 L 24 3 z M 25 11.992188 L 29.076172 19.013672 C 27.985772 18.42057 26.645032 18 25 18 C 23.355581 18 22.01598 18.415717 20.927734 19.003906 L 25 11.992188 z M 25 20 C 29.201091 20 30.567224 22.905239 30.826172 23.503906 C 30.571931 24.104594 29.234449 27 25 27 C 20.761174 27 19.423719 24.095998 19.171875 23.5 C 19.423719 22.904002 20.761174 20 25 20 z M 25 20 C 25 20 24 21.75 24 23.5 C 24 25.25 25 27 25 27 C 25 27 26 25.25 26 23.5 C 26 21.75 25 20 25 20 z M 17.570312 24.787109 C 18.4835 26.263019 20.741233 29 25 29 C 29.258767 29 31.5165 26.263019 32.429688 24.787109 L 36.617188 32 L 13.382812 32 L 17.570312 24.787109 z M 12.222656 34 L 19 34 L 19 36 L 11.060547 36 L 12.222656 34 z M 21 34 L 29 34 L 29 36 L 21 36 L 21 34 z M 31 34 L 37.777344 34 L 38.939453 36 L 31 36 L 31 34 z M 40 37.826172 L 41.261719 40 L 37 40 L 37 38 L 40 38 L 40 37.826172 z M 9.9003906 38 L 13 38 L 13 40 L 8.7382812 40 L 9.9003906 38 z M 15 38 L 24 38 L 24 40 L 19.171875 40 A 1.0001 1.0001 0 0 0 18.953125 39.986328 A 1.0001 1.0001 0 0 0 18.833984 40 L 15 40 L 15 38 z M 26 38 L 35 38 L 35 40 L 32.154297 40 A 1.0001 1.0001 0 0 0 32.017578 39.986328 A 1.0001 1.0001 0 0 0 31.835938 40 L 26 40 L 26 38 z" />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Schedule Meetings</span>
                        </a> */}
                        {/* <a class={page == "UpdateProfile" ? "flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-gray-700 text-gray-100 rounded" : "flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700"} href="/edituserprofile/:id">
                            <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 50 50" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M 38.96875 0 C 35.675781 -0.0117188 28.804688 -0.121094 25.125 3.5625 L 24.46875 4.21875 L 24.46875 4.25 C 20.539063 8.207031 20.082031 14.121094 22.90625 18.5625 L 2.40625 37.3125 L 2.375 37.34375 C 1.476563 38.242188 0.53125 39.75 0.25 41.625 C -0.03125 43.5 0.453125 45.734375 2.375 47.65625 C 4.296875 49.578125 6.53125 50.0625 8.40625 49.78125 C 10.28125 49.5 11.789063 48.554688 12.6875 47.65625 L 12.71875 47.65625 L 12.71875 47.625 C 12.71875 47.625 17.425781 42.300781 22.1875 37 C 24.570313 34.347656 26.953125 31.710938 28.78125 29.75 C 29.695313 28.769531 30.484375 27.953125 31.03125 27.40625 C 31.183594 27.253906 31.261719 27.167969 31.375 27.0625 C 35.820313 29.992188 41.796875 29.585938 45.78125 25.59375 L 46.4375 24.9375 C 48.234375 23.144531 49.066406 20.523438 49.5 17.96875 C 49.933594 15.414063 49.929688 12.890625 49.9375 11.21875 C 49.941406 10.835938 49.933594 10.460938 49.625 10.09375 C 49.316406 9.726563 48.738281 9.628906 48.4375 9.6875 C 47.835938 9.808594 47.59375 10.125 47.59375 10.125 L 47.5625 10.15625 C 47.5625 10.15625 41.84375 15.902344 41.0625 16.6875 C 41.03125 16.707031 41.023438 16.710938 40.96875 16.71875 C 40.789063 16.746094 40.507813 16.777344 40.15625 16.78125 C 39.457031 16.789063 38.496094 16.742188 37.5625 16.65625 C 36.628906 16.570313 35.691406 16.425781 34.96875 16.28125 C 34.605469 16.207031 34.300781 16.128906 34.09375 16.0625 C 34.019531 16.039063 33.976563 16.023438 33.9375 16 C 33.914063 15.964844 33.894531 15.929688 33.875 15.875 C 33.808594 15.675781 33.757813 15.351563 33.6875 15 C 33.546875 14.296875 33.421875 13.382813 33.34375 12.46875 C 33.265625 11.554688 33.222656 10.628906 33.25 9.9375 C 33.265625 9.589844 33.277344 9.308594 33.3125 9.125 C 33.332031 9.035156 33.363281 8.984375 33.375 8.96875 C 34.242188 8.101563 39.9375 2.4375 39.9375 2.4375 L 39.96875 2.40625 L 39.96875 2.375 C 39.96875 2.375 40.265625 2.164063 40.40625 1.59375 C 40.476563 1.308594 40.453125 0.753906 40.09375 0.40625 C 39.734375 0.0585938 39.347656 0 38.96875 0 Z M 37.65625 2 C 36.414063 3.242188 32.566406 7.089844 31.9375 7.71875 C 31.5625 8.09375 31.535156 8.414063 31.46875 8.75 C 31.402344 9.085938 31.359375 9.464844 31.34375 9.875 C 31.308594 10.691406 31.355469 11.648438 31.4375 12.625 C 31.519531 13.601563 31.648438 14.570313 31.8125 15.375 C 31.894531 15.777344 31.988281 16.152344 32.09375 16.46875 C 32.199219 16.785156 32.265625 17.046875 32.59375 17.375 C 32.929688 17.710938 33.179688 17.769531 33.5 17.875 C 33.820313 17.980469 34.183594 18.074219 34.59375 18.15625 C 35.414063 18.320313 36.417969 18.4375 37.40625 18.53125 C 38.394531 18.625 39.351563 18.695313 40.15625 18.6875 C 40.558594 18.683594 40.933594 18.640625 41.25 18.59375 C 41.566406 18.546875 41.835938 18.632813 42.28125 18.1875 C 42.773438 17.691406 46.699219 13.714844 47.96875 12.4375 C 47.945313 13.996094 47.949219 15.742188 47.625 17.65625 C 47.226563 20.015625 46.421875 22.265625 45.09375 23.59375 L 44.4375 24.25 C 40.574219 28.117188 34.628906 28.015625 30.84375 24.21875 L 25.84375 19.21875 C 22.0625 15.417969 21.964844 9.464844 25.8125 5.59375 L 26.46875 4.90625 C 28.957031 2.414063 34.210938 2.058594 37.65625 2 Z M 24 20 C 24.164063 20.1875 24.320313 20.382813 24.5 20.5625 L 29.5 25.5625 C 29.636719 25.699219 29.792969 25.808594 29.9375 25.9375 C 29.867188 26.007813 29.828125 26.046875 29.75 26.125 C 29.171875 26.699219 28.390625 27.511719 27.46875 28.5 C 25.625 30.476563 23.226563 33.125 20.84375 35.78125 C 16.089844 41.074219 11.433594 46.375 11.40625 46.40625 L 11.375 46.4375 C 10.765625 47.035156 9.515625 47.789063 8.125 48 C 6.71875 48.210938 5.207031 47.957031 3.65625 46.40625 C 2.105469 44.855469 1.820313 43.316406 2.03125 41.90625 C 2.242188 40.515625 3.027344 39.265625 3.625 38.65625 L 3.65625 38.625 Z" />
                            </svg>
                            <span class="ml-2 text-sm font-medium">Update Profile</span>
                        </a> */}
                    </div>
                </div>
                <a class="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700">
                    <div class="border flex px-6 py-1 rounded-lg flex items-center" onClick={logOutHandler}>
                        <span class="ml-2 text-sm font-medium w-16">Log Out</span>
                        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    
                </a>
            </div>

	
  
</div>
  )
}