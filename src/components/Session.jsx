import React from 'react';
import { useState, useEffect} from 'react';
import { getSession ,putJoin} from '../api';
import { useParams} from 'react-router-dom';

const Session = () => {

  const {oppID}=useParams();
  console.log(oppID,"oppIDfromuseParam")

  const[session, setSession]=useState([]);
  const[joinSession,setJoinsession]= useState([]);
  const [msg,setMsg]=useState("");

  useEffect(()=>{
    getSession(oppID).then((resultFromApi)=>{
    console.log("sessionFromAPi",resultFromApi)
    setSession(resultFromApi)
    })           
    },[oppID])   
    
    
    const submitForm = (event)=>{
        event.preventDefault();

        const data= {
            success:false
        }

        putJoin(oppID,joinSession,data)
        .then((resultFromApi)=>{
            console.log(resultFromApi)
            if(resultFromApi.success===true){
                setMsg(alert("THANK YOU FOR JOINING THE SESIION"))
                
            }else{
                setMsg(alert("FULL OR ALREADY JOINED"))

            }
            
        })
    }
    

    return (
        <>
        <div>
            <h1>Session</h1>
            <h2>Date :{session.PLACEMENTSLOTDATE}</h2> 
            <h2>Start at :{session.PLACEMENTSLOTSTARTTIME}</h2> 
            <h2>Hours :{session.PLACEMENTSLOTHOURS}</h2> 
        </div>

        <div>
            <form onSubmit={submitForm}>
            <button 
            type="submit"
            onClick={(e)=>setJoinsession(session.PLACEMENTSLOTID)} 
            >Join</button>
            </form>
            <p>{msg}</p>
        </div>            
            
        </>
    );

    };
export default Session;