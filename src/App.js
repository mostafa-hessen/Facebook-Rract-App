// import logo from './logo.svg';
import './App.css';// import {useState,useEffect} from 'react'
import React ,{useState,useEffect}from 'react';
// import Accordion from '@material-ui/core/Accordion/Accordion';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';import MoreIcon from '@mui/icons-material/MoreVert';
import Header from './component/header/header';
import Sidbar from './component/sidbar/sidbar';
import { connect } from 'react-redux';
import Feed from './component/feed/feed';
import Login from './component/login/login';

import Messages from './component/messages/Messages';
function App({userval}) {
  const [user,setuser] =useState(userval);
  useEffect(() => {
    setuser(userval)
    
  }, [userval])
  return (
    <div className="App ">
      {user?(<Login/>):(
        <div >
      <Header/>
       <div className="container">
          <Sidbar  />
          <Feed/>
          {/* <Widget/> */}
          <Messages/>
       </div>
       </div> )}
       
      
    </div>
  );
}
function mapstateToProps(state){
  console.log(state.length<1);
  if(state.length<1){
     return{
      userval:null
     }
  }
  else if(state.length>=1){
    
  return{
  
      userval:state[0].user
  }
  }
}
export default connect(mapstateToProps,null)(App);
