import React from 'react';
import { useState,useEffect} from 'react';
/* import { useParams } from 'react-router-dom'; */
import { getSession } from '../api';


const Session = ({opportunityFirst}) => {
    console.log("opportunityFirst",opportunityFirst)
   
    const[session, setSession]=useState([]);

     useEffect(()=>{
        getSession().then((resultFromApi)=>{

            setSession(resultFromApi)
                })
        },[])   

   /*  const joinSession=()=>{
        

    } */
   
    return (
        <div>
            
           <h1>{opportunityFirst.NAME}</h1>
           <p>Start Date {opportunityFirst.STARTDATE}</p>
           <p>End Date {opportunityFirst.ENDDATE}</p>

 <h1>Session</h1>
             <h2>Date :{session.PLACEMENTSLOTDATE}</h2> 
             <h2>Start at :{session.PLACEMENTSLOTSTARTTIME}</h2> 
             <h2>Hours :{session.PLACEMENTSLOTHOURS}</h2>  
            <button>Join</button>
        </div>
    );
};

export default Session;