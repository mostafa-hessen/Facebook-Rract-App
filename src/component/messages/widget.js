import React from 'react'

function Widget() {
    return (
        <div
        //  style={{width:"300px",height:"1"}}
         >
         <iframe 
         src=
         "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMostafa-hessen%D9%85%D8%B5%D8%B7%D9%81%D9%8A-%D8%AD%D8%B3%D9%8A%D9%86-105239757727884%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
         width="340" height="1500"
          style={{border:"none",overflow:"hidden"}}
           scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      </div>
    )
}

export default Widget
