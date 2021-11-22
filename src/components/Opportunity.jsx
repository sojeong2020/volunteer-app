import React from 'react';
//import {NavLink} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getOpportunityFirst,
        getSession
         /* getOpportunitySecond,
         getOpportunityThird */ }  from '../api';
import Session from './Session';

const Opportunity = () => {

   const[opportunityFirst, setOpportunityFirst]=useState([]);
   const[session, setSession]=useState([]);

   /* const[opportunitySecond, setOpportunitySecond]=useState([]);
   const[opportunityThird, setOpportunityThird]=useState([]); 
  */
console.log("oppportunityFirst",opportunityFirst)
    
   
    useEffect(()=>{
        getOpportunityFirst().then((resultFromApi)=>{
            console.log("oppFromAPi",resultFromApi)
            setOpportunityFirst(resultFromApi)
            })
        },[]) 
      /* useEffect(()=>{
            getOpportunitySecond().then((resultFromApi)=>{
                setOpportunitySecond(resultFromApi)
                })
            },[]) 
    useEffect(()=>{
            getOpportunityThird().then((resultFromApi)=>{
                setOpportunityThird(resultFromApi)
                })
            },[])      */        
        useEffect(()=>{
            getSession().then((resultFromApi)=>{
            console.log("sessionFromAPi",resultFromApi)
            setSession(resultFromApi)
                        })
                },[])   
     

    return (
        <div>
           
           {/* <h2>{opportunityFirst.NAME}</h2>
           <p>{opportunityFirst.DESCRIPTION}</p> */}
           {/* <NavLink exact="true" to={`/session/${opportunityFirst.oppID}`}>
           <button>Session Details</button>
           </NavLink> */}
           <Session opportunityFirst={opportunityFirst} 
                    oppID={opportunityFirst.oppID}
                    session={session}
                    slotID={session.PLACEMENTSLOTID}

            />

           {/* <h2>{opportunitySecond.NAME}</h2>
           <p>{opportunitySecond.DESCRIPTION}</p>
           <NavLink exact="true" to={`/session/${opportunitySecond.oppID}`}>
           <button>Session Details</button>
           </NavLink>

           <h2>{opportunityThird.NAME}</h2>
           <p>{opportunityThird.DESCRIPTION}</p>
           <NavLink exact="true" to={`/session/${opportunityThird.oppID}`}>
           <button>Session Details</button>
           </NavLink> 
   */}

           
        </div>
    );
};

export default Opportunity;