import React from "react";
import Sidbaritem from "../sidbarItem/sidbaritem";
import "./sidbar.css";
import EmojiFlags from "@mui/icons-material/EmojiFlags";
import People from "@mui/icons-material/People";
import Chat from "@mui/icons-material/Chat";
import Storefront from "@mui/icons-material/Storefront";
import VideoLibrary from "@mui/icons-material/VideoLibrary";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocalHospital from "@mui/icons-material/LocalHospital";
import HomeOutlined from "@mui/icons-material/HomeOutlined";
import ExploreOutlined from "@mui/icons-material/ExploreOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import CircleNotificationsOutlined from "@mui/icons-material/CircleNotificationsOutlined";
import BookmarkBorderOutlined from "@mui/icons-material/BookmarkBorderOutlined";
import LeaderboardOutlined from "@mui/icons-material/LeaderboardOutlined";
import BrushOutlined from "@mui/icons-material/BrushOutlined";
import ColorLensOutlined from "@mui/icons-material/ColorLensOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import { Avatar } from "@mui/material";
import { useRef } from "react";
import { useState, useEffect } from "react";
// connect
import { connect } from "react-redux";
import img1 from '../messages/img/team-one.jpg'

// useState

function Sidbar({user,photoval}) {
  let sidbaritems = useRef(null);
  const [refAquired, setRefAquired] = useState(false);
  const [stylynotifcation, setstylynotifcation] = useState('none');
  const [stylyTheme, setstylyTheme] = useState('none');
  //...
  useEffect(() => {
    setRefAquired(true);
  }, []);

  useEffect(() => {
    // console.log(markerGroupRef.current)
    const ele = Array.from(sidbaritems.current.children);
    // console.log("=>>>>>>>1>>>>>>>>>>>", sidbaritems);
    //  console.log('=>>>>>>>>3>>>>>>>>>>',sidbaritems.current, )
    const functionremove = () => {
      ele.forEach((element) => element.classList.remove("active"));
      // console.log('ele',ele);
      // console.log(sidbaritems.current.children);
    };
    // console.log(ele); 
    ele.forEach((element) =>
      element.addEventListener("click", () => {
        // functionremove()
        // functionremove();
        // element.classList.contains('poup-overlay')?element.classList.add("active"):''
        if(!element.classList.contains('popup-overlay')){
          // element.classList.remove("active")log
        //  console.log('yes');
          functionremove();
         element.classList.add("active")


        }
        // else{
        // functionremove();
        //   element.classList.add("active")


        // }
          // console.log(element.classList.contains('Explore'));
        // element.classList.contains("Notifications")?"l,klm,kmlkml,mlm,l,l,l" : "";

        if(element.classList.contains('Notifications')){
          // console.log('yes ya darsh');
          setstylynotifcation('block')
        }
        else{
          setstylynotifcation('none')

        }
        if(element.classList.contains('Theme')){
          // console.log('yes ya darsh');
          setstylyTheme('flex')
        }
        else if(element.classList.contains('popup-overlay')){
          setstylyTheme('none')
          functionremove()
          ele[0].classList.add('active')

        }
      })
    );
  }, [refAquired]);
  return (
    <div className="sidbar">
      <div className="personalinfo">
        <div className="img">
          <Avatar src={photoval?photoval:img1} style={{ marginRight: "10px" }} />
        </div>
        <div className="info">
          <strong>{user?user:'unknown'}</strong>
          <br></br>
          <span>@email</span>
        </div>
      </div>
      <div ref={sidbaritems} className="sidbarelements">
        
        <Sidbaritem className="j" nameof="active" title="Home" Icon={HomeOutlined} />
        <Sidbaritem title="Explore" Icon={ExploreOutlined} />
        <Sidbaritem
          nameof="Notifications"
          title="Notifications"
          stylynotifcation={stylynotifcation}
          count={"9+"}
          Icon={CircleNotificationsOutlined}
        />
        <Sidbaritem title="Messages" count={"5"} Icon={EmailOutlined} />
        <Sidbaritem title="Bookmarkets" Icon={BookmarkBorderOutlined} />
        <Sidbaritem title="Analytics" Icon={LeaderboardOutlined} />
        <Sidbaritem title="Theme" 
        stylyTheme={stylyTheme}
        Icon={ColorLensOutlined} />
        <Sidbaritem title="Setting" Icon={SettingsOutlined} />
        {/* {
} */}
      </div>
      {}

      {/* <buttoun></buttoun> */}
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
  
  
      // console.log(state[0].user)ؤي
    
  
  }
  export default connect(mapStateToProps,null)(Sidbar);