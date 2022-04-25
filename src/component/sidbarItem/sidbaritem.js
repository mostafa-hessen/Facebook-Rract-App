import React from "react";
import { Avatar } from "@mui/material";
import "./sidbaritem.css";
import { useRef,useState,useEffect } from "react";
import img5 from "./img/blog-bg-1.jpg";
import img1 from "./img/choose-us-img-2.jpg";
import img2 from "./img/team-three.jpg";
import img3 from "./img/team-one.jpg";
import img4 from "./img/team-two.jpg";
// useRef
function Sidbaritem({
  Icon,
  title,
  count,
  nameof = "",
  stylynotifcation,
  stylyTheme,
}) {
  const item = useRef(null);
  const popup=useRef();
  let color=useRef(null);
  const background=useRef();
  const [refquired, setRefquired] = useState(false);
  const [ulcolor, setulcolor] = useState(false);
  
  useEffect(() => {
    // setRefquired(true);

    // console.log(color.current)
   if( stylyTheme==='none'){
     setulcolor(color.current)
     console.log('ul',ulcolor.children);
    //  ulcolor.children.foreach((ele)=>ele.addEventListener('click',()=>console.log(ele.innerHTML)))
     console.log(color.current);
  }
  else{
    console.log('else',ulcolor);
  } 
    

  }, [ulcolor]);
  // useEffect(() => {

    // if(color!=null){
    // let ele2 = Array.from(color.current.children); 
    // // const ele =
    // console.log(ele2);
    // }
     
    // console.log(Array.from(color.current.childNodes));
    
  // }, [refquired]);
  // console.log(ele2);
  // console.log('ss',color);
  
  return (
      <>
    <div className={`items ${nameof} ${title}`}>
      <div className="items-iconInfo">
        <Icon />
        <h3>
          <h4 className="title">{title}</h4>
          {}
          {title == "Notifications" || title == "Messages" ? (
            <span className="counter">{count}</span>
          ) : (
            ""
          )}
          {/* {title='fv'} */}
        </h3>
      </div>
      {
        //   &&
        title == "Notifications" ? (
          <div style={{ display: stylynotifcation }} className="notification">
            <div className="notifcation-item">
              <Avatar src={img1} />
              <div className="avatar-info">
                <p>
                  {" "}
                  <strong>mohamed </strong> comment in your photo
                </p>
                <p className="time">2 hour</p>
              </div>
            </div>
            <div className="notifcation-item">
              <Avatar src={img2} />
              <div className="avatar-info">
                <p>
                  {" "}
                  <strong>Ahmed </strong> accept yor freind requests
                </p>
                <p className="time">2 days</p>
              </div>
            </div>

            <div className="notifcation-item">
              <Avatar src={img4} />
              <div className="avatar-info">
                <p>
                  {" "}
                  <strong>mary </strong> comment in your post
                </p>
                <p className="time">1 hour</p>
              </div>
            </div>

            <div className="notifcation-item">
              <Avatar src={img3} />
              <div className="avatar-info">
                <p>
                  {" "}
                  <strong>hessen </strong>and <strong>120 others </strong> liked
                  your post
                </p>
                <p className="time">6 hour</p>
              </div>
            </div>

            <div className="notifcation-item">
              <Avatar src={img5} />
              <div className="avatar-info">
                <p>
                  {" "}
                  <strong>mohamed </strong> comment in your photo
                </p>
                <p className="time">2 houer</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      }

      {/* popup */}

    
    </div>
      {title == "Theme" ? (
        <div
        ref={popup}
          className="popup-overlay"
         

          style={{display:stylyTheme}}
        >
              {/* <button className='close' onClick={()=>console.log(popup.style)}>close</button> */}

          <div className="popup">
            <div className="info">
              <h3>customize your theme</h3>
              <p>Manage your fon size ,color and background</p>
            </div>
            <div className="options">
                {/* fontsize */}
              <div className="fontsize">
                <h4 className="mb">Font size</h4>
                <div className="div">
                    <p className="small">Aa</p>
                  <div className="size">
                    <span className="active"></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  {
                  }
                  <p className="capital">Aa</p>
                </div>
              </div>
              {/* End font size */}

              {/* Start color */}
              <div className="color">
                  <h4 className="mb">color</h4>
                  <ul ref={color}>
                      <li className="active"></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      {
                      // <></>
                      // console.log(ulcolor)
                                            // Array.from(color.current.children)
                      // .forEach(ele=>ele.addEventListener('click',()=>{
                      //   console.log('iudjcico');
                      // }))
                      // setulcolor(Array.from(color.current.children))
                      
                        // console.log(ulcolor)
                      }

                  </ul>
              </div>
              {/* End color */}

              {/* Start background */}
              <div className="background">
                  <h4 className="mb">background</h4>
                  <div className="div" ref={background}>
                  <div className="backgroundoption light">
                       <span className="checkbox"></span>
                       <span>light</span>
                      </div>
                  <div className="backgroundoption Dark">
                  <p className="checkbox"></p>
                       <p>dark</p></div>
                  <div className="backgroundoption lightout">
                  <span className="checkbox"></span>
                       <span>lightout</span></div>
                      
                      
                      
                      </div>
                
              </div>
              {/* End background */}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      </>
  );
}

export default Sidbaritem;
