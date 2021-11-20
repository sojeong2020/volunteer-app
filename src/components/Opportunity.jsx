import React from 'react';
import { useState,useEffect } from 'react';
import { getOpportunity , getSession} from '../api';


const Opportunity = () => {

   const[opportunity, setOpportunity]=useState([]);
   //const[oppID, setOppID]=useState(1)
   const[session, setSession]=useState([]);

  let oppID=1

   /* let ids=[1,2,3]
   ids.forEach(x=>setOppID(x)) */


    
   
    useEffect(()=>{
        getOpportunity(oppID).then((resultFromApi)=>{
            setOpportunity(resultFromApi)
            })
        },[oppID]) 
    

      useEffect(()=>{
        getSession(oppID).then((resultFromApi)=>{

            setSession(resultFromApi)
                })
        },[oppID])   

    return (
        <div>
           <h1>Here is opportunity!</h1> 
           
           <h2>{opportunity.NAME}</h2>
           <p>{opportunity.DESCRIPTION}</p>

           <h1>Session</h1>
           <h2>{session.PLACEMENTSLOTDATE}</h2>
           <h2>{session.PLACEMENTSLOTID}</h2>
           <h2>{session.PLACEMENTSLOTSTARTTIME}</h2>

           
        </div>
    );
};

export default Opportunity;