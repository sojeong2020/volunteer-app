import React from 'react';
import { useState} from 'react';
import {  updateJoin } from '../api';


const Session = ({opportunityFirst,oppID,session,slotID}) => {
    
    const[join,setJoin]=useState("");

    const joinSession=()=>{
        setJoin("joined")

        const updatingJoin={
            results: [
              {
                "success":" true",
                
              }
            ]
          }

        updateJoin(oppID,slotID,updatingJoin)

    } 
   
    return (
        <div>
            
           <h1>{opportunityFirst.NAME}</h1>
           <p>Start Date {opportunityFirst.STARTDATE}</p>
           <p>End Date {opportunityFirst.ENDDATE}</p>

            <h1>Session</h1>
            <h2>Date :{session.PLACEMENTSLOTDATE}</h2> 
            <h2>Start at :{session.PLACEMENTSLOTSTARTTIME}</h2> 
            <h2>Hours :{session.PLACEMENTSLOTHOURS}</h2>  
            <button type='submit' disabled={join === "joined"} onClick={joinSession} >Join</button>
            <h2>{join}</h2>
        </div>
    );
};

export default Session;