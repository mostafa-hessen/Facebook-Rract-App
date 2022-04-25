// import React from "react";
import "./Message.css";
import AutoFixNormal from "@mui/icons-material/AutoFixNormal";
import Search from "@mui/icons-material/Search";
import { Avatar } from '@mui/material'
import img1 from './img/blog-bg-1.jpg'
import img2 from './img/choose-us-img-2.jpg'
import img3 from './img/team-three.jpg'
import img4 from './img/team-one.jpg'
import img5 from './img/team-two.jpg'
import { useState ,useRef} from "react";
 import React from 'react'
 
 function Messages({clicked=true}) {
  const [searchval,setsearchval]=useState('')
  const test=useRef([]);
  const message=useRef(null);
  
  return (
    <div className="message_requests">
      {/* =========Start Messages========= */}
      <div ref={ el=>{ setsearchval(message.current = el);}} className="messages">
        {/* {console.log('uuhiuh',message.current)} */}
        {console.log(searchval)}
        {clicked?(searchval.style.boxShadow='inset 0 0 10px'
        ,        setTimeout(()=>message.current.style.boxShadow="none",2000)
        ):''}
        {/* ------ Start header------ */}
        <div className="header-message">
          <ul>
            <li>message</li>
            <li>
              <AutoFixNormal />
            </li>
          </ul>
        </div>
        {/* ------End header------ */}

        {/* ------- Start search------------ */}
        <div className="search icon">
        <Search fontSize="large" />
        <input  onChange={ (e)=> {
          return console.log(test.current)}}/>
        </div>

      {/* ------- End search---------*/}

      {/* -------Start category------- */}
      <div className="category">
        <ul>
          <li className="active">Primary</li>
          <li>General</li>
          <li>Requests(5)</li>
        </ul>
      </div>
      {/* -------End category------- */}

      {/* -------Start pepole messages------- */}
      <div className="pepole-messages">
        <div className="message">
          <Avatar className="active" src={img1}/>
          <div className="info">
            <h5 ref={test} >mostafa hessen</h5>
            <p>i am not ready</p>
          </div>
        </div>
        <div className="message">
          <Avatar src={img2}/>
          <div className="info">
            <h5>said hamdy</h5>
            <p>nive jop</p>
          </div>
        </div>
        <div className="message">
          <Avatar src={img3}/>
          <div className="info">
            <h5 ref={test} >mohamed ahmed</h5>
            <p>ok y zmily</p>
          </div>
        </div>
        <div className="message">
          <Avatar  className="active" src={img4}/>
          <div className="info">
            <h5 ref={test}>khaled hessen</h5>
            <p>ok </p>
          </div>
        </div>
        <div className="message">
          <Avatar src={img5}/>
          <div className="info">
            <h5>Ahmed Mostafa</h5>
            <p>7lo a3y</p>
          </div>
        </div>
         
      </div>

      {/* -------End   pepole messages------- */}
      </div>

      {/* =========End Messages========= */}

      {/* =========Start requests======== */}
      <div className="requests">
        <h4>requests</h4>
        <div className="request-contsiner">
          <div className="avatar-info">
          <Avatar/>
          <div className="info">
            <h5>said hamdy</h5>
            <p className="time">8 multible friendes</p>
          </div>
          </div>
          <div className="buttons">
            <button className="button1">
              accept
              </button>
              <button className="button2">
                decline
              </button>
          </div>

          <div className="avatar-info">
          <Avatar/>
          <div className="info">
            <h5>ahmed mostafa</h5>
            <p className="time">2 multible friendes</p>
          </div>
          </div>
          <div className="buttons">
            <button className="button1">
              accept
              </button>
              <button className="button2">
                decline
              </button>
          </div>

          <div className="avatar-info">
          <Avatar/>
          <div className="info">
            <h5>desha mohamed</h5>
            <p className="time">12 multible friendes</p>
          </div>
          </div>
          <div className="buttons">
            <button className="button1">
              accept
              </button>
              <button className="button2">
                decline
              </button>
          </div>

          
        </div>
      </div>
      {/* =========End requests======== */}
      </div>
 
  )
  // 
   }
 export default Messages