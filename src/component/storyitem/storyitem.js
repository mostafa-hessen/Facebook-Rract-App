import React from 'react'
import './storyitem.css'

import { Avatar } from '@mui/material'

function Storyitem({storyimg,name,personalimg}) {
    return (
        <div className={`story ${name}` } style={{backgroundImage:`url(${storyimg})`}}>
           {personalimg&&<div className='personalimg'><Avatar className="avatar"src={personalimg}/></div>}
           {name&&<h4>{name}</h4>}
        </div>
    )
}

export default Storyitem
