import React,{ useState } from "react";
// import  from "react";
import './messagesender.css'
import { Avatar } from "@mui/material";
import Videocam from "@mui/icons-material/Videocam";
import PhotoLibrary from "@mui/icons-material/PhotoLibrary";
import InsertEmoticon from "@mui/icons-material/InsertEmoticon";
import pesrsonal1 from '../storytell/img/pesrsonal/IMG_٢٠٢١٠٥٠٢_١٥١٦٥٢.jpg'
import { connect } from "react-redux";
// import {a}
import { collection, docs, setDoc,addDoc,serverTimestamp,query } from "firebase/firestore";
import db from '../../firbase'

function MessagSender({user,photoval}) {
const [input, setinput] = useState('')
const [photourl, setphotourl] = useState('')
const send=(e)=>{
e.preventDefault()
if(input!=''){
  addMessageByInput(input,photourl)
  setinput('')
  setphotourl('')
}

}

const addMessageByInput=  (inputvalue,value)=>{
  const collectiugton= collection(db,'posts');
  // // const q=query(collectiugton,orderBy('name','desc'))
  const data={message:inputvalue,photourl:value,timestamp:serverTimestamp(),selfPhoto:photoval,selfName:user}
    addDoc(collectiugton,data)
  // console.log(user);
// console.log(name);
}
  return (
    <div className="message_sender">
      <div className="message_sender_top">
        <Avatar src={photoval} />
        <form>
          <input required value={input}onChange={(e)=>setinput(e.target.value)} className="firstipu" placeholder={`What's in your mind ${user}?`} />
          <input value={photourl}onChange={(e)=>setphotourl(e.target.value)}placeholder="imag URL (optional)" />
          <button className={'button'}onClick={send}>Post</button>
        </form>
      </div>
{/* <button selle="file">ff</button> */}
{/* <i nput type="file" name="" id="" /> */}
      {/* <div className="message_sender_bottom">
        <div className="message_sender_option">
          <Videocam style={{color:'red'}}/>
          <h3>Live Video</h3>
        </div>
        <div className="message_sender_option">
          <PhotoLibrary style={{color:'green'}} />
          <h3>Photo/Video</h3>
        </div>
        <div className="message_sender_option">
          <InsertEmoticon style={{color:'yellow'}} />
          <h3>Feeling/Activity</h3>
        </div>
      </div> */}
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
  export default connect(mapStateToProps,null)(MessagSender);
