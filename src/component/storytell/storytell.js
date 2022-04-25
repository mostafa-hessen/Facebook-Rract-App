import React from 'react'
import Storyitem from '../storyitem/storyitem'
// import img from'./im'
import pesrsonal1 from './img/pesrsonal/IMG_٢٠٢١٠٥٠٢_١٥١٦٥٢.jpg'
import pesrsonal2 from './img/pesrsonal/IMG_٢٠٢١٠٥٠٢_١٥١٧٢٥.jpg'
import pesrsonal3 from './img/pesrsonal/IMG_٢٠٢١٠٥٠٢_١٥١٨٤٥.jpg'
import pesrsonal4 from './img/pesrsonal/IMG_٢٠٢١٠٥٠٢_١٤١٨١٩.jpg'

import storyback1 from './img/storybackground/Screenshot_2021-10-01-22-18-30.png'
import storyback2 from './img/storybackground/Screenshot_2021-10-01-22-18-34.png'
import storyback3 from './img/storybackground/Screenshot_2021-10-30-22-19-49.png'
import storyback4 from './img/storybackground/Screenshot_2021-09-22-14-20-27.png'

function Storytell() {
    // console.log(pesrsonal);
    return (
        <div className='storytell' style={{display:'flex',justifyContent:'space-evenly'}}>
             <Storyitem  name="Mostafa" storyimg={storyback1} personalimg={pesrsonal1} />
             <Storyitem  name="Ahmed" storyimg={storyback2} personalimg={pesrsonal2} />
             <Storyitem  name="Maged" storyimg={storyback3} personalimg={pesrsonal3} />
             <Storyitem  name="Desha" storyimg={storyback4} personalimg={pesrsonal4} />
             <Storyitem  name="nora" storyimg={storyback4} personalimg={pesrsonal4} />
        </div>
    )
}

export default Storytell
