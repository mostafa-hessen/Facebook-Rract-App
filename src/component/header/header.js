import React from "react";
import './header.css'
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from '@mui/material';
import { Avatar } from '@mui/material'
import Home from "@mui/icons-material/Home";
import Flag from "@mui/icons-material/Flag";
import SubscriptionsOutlined from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontOutlined from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleOutlined from "@mui/icons-material/SupervisedUserCircleOutlined";
import Add from "@mui/icons-material/Add";
import NotificationsActive from "@mui/icons-material//NotificationsActive"
import ExpandMore from "@mui/icons-material/ExpandMore";
import Forum from "@mui/icons-material/Forum";
import { connect } from "react-redux";

function Header({user,photoval}) {
  return (
    <div className="header">
      {/* Start left comp */}
      <div className="container container-header">
      <div className="header_left">
         
      <div className="logo">
        <strong>
          mostafa
        </strong>
        </div>
      </div>
      {/* End left comp */}

      {/* Start center comp */}

      <div className="header_center">
         
        <div className="icon_input">
          <SearchIcon fontSize="large" />
          <input />
        </div>
      </div> 

      {/* End center comp */}

      {/* Start right comp */}
      <div className="header-right">
      <button className="button">creat</button>
       <Avatar src={photoval}/>
        </div>
     
      {/* End right comp */}


      </div>
    </div>
  );
}
function mapStateToProps(state){

  console.log(state.length<1);
  if(state.length<1){
     return{
      user:null,
      photoval:null
     }
  }
  else if(state.length>=1){
    console.log('=>',state[0]);
  return{
  
    user:state[0].user,
    photoval:state[0].photourl
  }
  }
  
  
      // console.log(state[0].user)
    
  
  }
  export default connect(mapStateToProps,null)(Header);

//   const ele=Array.from(sidbaritems.current.childNodes);
//  console.log('=>>>>>>>>3>>>>>>>>>>',Array.from(sidbaritems.current.childNodes) )
//  console.log('=>>>>>>>>4>>>>>>>>>>',Array.isArray(ele) )
// console.log(ele[0]);
//  const functionremove =()=>{
//     ele.forEach(element=>element.classList.remove="active")
//  }
//  ele.forEach(element=>element.addEventListener('click',()=>{
//     functionremove()
//  }) )