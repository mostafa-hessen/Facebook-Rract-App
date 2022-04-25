import React ,{useState,useEffect}from 'react'
import Storytell from '../storytell/storytell'
import './feed.css'
import { orderBy } from "@firebase/firestore";
import MessagSender from '../messagesender/messagSender'
import pesrsonal1 from '../storytell/img/pesrsonal/IMG_٢٠٢١٠٥٠٢_١٥١٦٥٢.jpg'
import storyback1 from '../storytell/img/storybackground/Screenshot_2021-10-01-22-18-30.png'
import { collection, docs, setDoc,addDoc,serverTimestamp,query } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { connect } from "react-redux";
import db from "../../firbase";
import Post from '../post/Post'
function Feed({photoval,userval}) {
    const [post, setpost] = useState([])
    useEffect(() => {
        // console.log("iuhfuiwef",snapsh6
        const collectionref=collection(db,"posts")
        const q=query(collectionref,orderBy('timestamp','desc'))
        onSnapshot(q,(snapshot)=>{
            // console.log(snapshot);
            setpost(
            
                snapshot.docs.map(ele=>{
                return {
                id:ele.id,
                data:ele.data()
                }
              }),
               
        );
        })
        }, [])

        console.log('=>',post);
        // const collectionref=collection(db, "rooms", roomid, "messages") 
        // const q=query(collectionref,orderBy('time','asc'))
        // onSnapshot(q,snapshot=>{
        //   setmessage(snapshot.docs.map(ele=> ele.data()))
        // })
    return (
        <div className='feed'>
            <Storytell/>
            <MessagSender/>
            {/* {console.log(photoval)} */}
            <Post/>

            {

                post.map((ele)=>{
                    // console.log(new Date(ele.data.timestamp.toDate()));
                    // console.log(ele.data.timestamp.toDate().toUTCString());
                    return(
                    <Post key={ele.id}
                    pesrsonalImg={ele.data.selfPhoto}
                    userNAme={ele.data.selfName}
                    // time={ele.data.time}
                    time={ele.data.timestamp?.toDate().toUTCString()}
                    message={ ele.data.message}
                    postImg={ ele.data.photourl }

             />
            //  ,
            //  console.log(ele.data.selfName)

                 ) })
            }
        </div>
    )
}

// function mapStateToProps(state){

//     console.log(state.length<1);
//     if(state.length<1){
//        return{
//         userval:null,
//         photoval:null
//        }
//     }
//     else if(state.length>=1){
//       console.log('=>',state[0]);
//     return{
    
//       userval:state[0].user,
//       photoval:state[0].photourl
//     }
//     }
    
    
//         // console.log(state[0].user)ؤي
      
    
//     }
    export default Feed;
    // export default Feed