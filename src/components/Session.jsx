import React from 'react';
import { useState, useEffect} from 'react';
import { getSession } from '../api';
import { useParams} from 'react-router-dom';



const Session = () => {

const {oppID}=useParams();

console.log(oppID,"oppIDfromuseParam")

  const[session, setSession]=useState([]);

  useEffect(()=>{
    getSession(oppID).then((resultFromApi)=>{
    console.log("sessionFromAPi",resultFromApi)
    setSession(resultFromApi)
                })
        },[oppID])   

 
   
    return (
        <div>
            <h1>Session</h1>
            <h2>Date :{session.PLACEMENTSLOTDATE}</h2> 
            <h2>Start at :{session.PLACEMENTSLOTSTARTTIME}</h2> 
            <h2>Hours :{session.PLACEMENTSLOTHOURS}</h2> 
                    
            
        </div>
    );
};

export default Session;