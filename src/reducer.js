// import{ actiontypes } from './actiontypes'
const reducer=(state= [] , action)=>{

    let  reminder=[];
     if(action.type==='SET_USER'){
       reminder=[...state,{user:action.user,photourl:action.photourl}]
   
   
       return  reminder;
     }
   
     
     else{
     
       return state ;
     }
     
     }
       
    export default  reducer