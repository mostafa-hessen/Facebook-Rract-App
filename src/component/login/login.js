import React from 'react'
import './login.css'
import { auth,provider } from '../../firbase'
import{signInWithPopup} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { Button } from '@mui/material'
function Login() {
    const dispatch=useDispatch()

    const loginfun=()=>{
        signInWithPopup(auth,provider).then(res=>{
            console.log('res',res);
            dispatch({type:"SET_USER",user:res.user.displayName,photourl:res.user.photoURL})
        })
        .catch(error=>alert(error))
    }
    return (
        <div className='login'>
           
                <div className="img">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/150px-2021_Facebook_icon.svg.png"/>
                </div>
                <div className="name">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/150px-Facebook_Logo_%282019%29.svg.png"/>
                </div>
               
                <Button  onClick={loginfun}>login</Button>
               
        </div>
    )
}

export default Login
