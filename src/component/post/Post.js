import React from "react";
import { Avatar } from "@mui/material";
import { useRef } from "react";
import "./post.css";
import ThumbUp from "@mui/icons-material/ThumbUp";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import NearMe from "@mui/icons-material/NearMe";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
import BookmarkBorderRounded from "@mui/icons-material/BookmarkBorderRounded";
import ShareRounded from "@mui/icons-material/ShareRounded";
import FavoriteBorderRounded from "@mui/icons-material/FavoriteBorderRounded";
import liked1 from './img/team-three.jpg'
import liked2 from './img/IMG_٢٠٢١٠٥٠٢_١٥١٨٤٥.jpg'
import liked3 from './img/team-one.jpg'
function Post({ pesrsonalImg, userNAme, time, message, postImg,NameOFLiked,NumberOfLikes }) {
  var arabic = /[\u0600-\u06FF]/;
  const like = useRef();
  const likekind = useRef();
  let counter = 0;

  return (
    <div className="post">
      <div className="top">
        <Avatar src={pesrsonalImg} />
        <div className="div">
          <div className="top_info">
            <h4>{userNAme?userNAme:'unknown'}</h4>
            <p>{time}</p>
          </div>
          <div className="moreoptions">
            <img src="./facebook icons/ellipsis-h.svg" alt="" />
          </div>
        </div>
      </div>
      {/* arabic.test(message)// displays true */}
      <div
        className="bottom"
        style={
          arabic.test(message)
            ? { justifyContent: "flex-end" }
            : { color: "flex-start" }
        }
      >
        <div>{message}</div>
      </div>
      <div className="img">
        {postImg ? <img src={postImg} /> : <span></span>}
      </div>
      {/* {counter} */}
      <div className="postoptions">
        {/* <div className="postoption postoptionLike ">
                      <ThumbUp />
                      <p ref={like}>Like</p>
                      <div ref={likekind}className="likeKind">
                        <img  data="like" src='./facebook icons/lik.gif'/>
                        <img  data="love" src='./facebook icons/love.gif'/>
                        <img className="care" data="care" src='./facebook icons/care1.gif'/>
                        <img  data="sad"  src='./facebook icons/sad1.gif'/>
                        <img  data="wow"  src='./facebook icons/wow1.gif'/>
                        <img  data="haha" src='./facebook icons/hahaa.gif'/>
                      </div> */}
        {/* </div> */}
        {/* {Array.} */}
        {
          // console.log(likekind),
          // console.log(Array.isArray(likekind.current.children) ),
          // Array.from(likekind.current.children)
          // ,likekind.current.children.map(ele=>console.log(ele))
          // console.log(Array.isArray(likekind.current.children) )
          // like
          // counter++
        }

        <div className="postoption">
          <FavoriteBorderRounded />
        </div>

        {/* 
        <div className="postoption">
            <ShareRounded/>
        </div> */}

        <div className="postoption">
          <img src="./facebook icons/comment-dots.svg" />
        </div>

        <div className="postoption">
          <ShareRounded />
        </div>
        <div className="postoption postoption4">
          <BookmarkBorderRounded />
        </div>
      </div>

      <div className="likedby">
        <div className="images">
        <span>
            <img src= {liked1}alt="" />
          </span>
          <span>
          <img src= {liked2}alt="" />
          </span>
          <span>
          <img src= {liked3}alt="" />
          </span>
        </div>
        <p>Liked by <b>Mostafa hessen</b> and <b>2.203 others</b></p>
      </div>
      <div className="caption">
        <p><b>Mohamed </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae reru</p>

        <p className="hashtage">#lifestyle</p>
      </div>
      <div className="comment">
        viwe all 432 comments
      </div>
    </div>
  );
}

export default Post;
