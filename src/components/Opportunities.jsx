import React from 'react';
//import {NavLink} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { getOpportunityFirst,
        getOpportunitySecond,
        getOpportunityThird  }  from '../api';
import {Link} from 'react-router-dom';

const Opportunity = () => {

   const[opportunityFirst, setOpportunityFirst]=useState([]);
   const[opportunitySecond, setOpportunitySecond]=useState([]);
   const[opportunityThird, setOpportunityThird]=useState([]); 
  
    
   
    useEffect(()=>{
        getOpportunityFirst().then((resultFromApi)=>{
            console.log("opportunityFirst",resultFromApi)
            setOpportunityFirst(resultFromApi)
            })
        },[]) 
    useEffect(()=>{
            getOpportunitySecond().then((resultFromApi)=>{
                console.log("opportunitySecond",resultFromApi)
                setOpportunitySecond(resultFromApi)
                })
            },[]) 
    useEffect(()=>{
            getOpportunityThird().then((resultFromApi)=>{
                console.log("opportunityThird",resultFromApi)
                setOpportunityThird(resultFromApi)
                })
            },[])            
       
     

    return (
        <>
            <div>
           <h1>{opportunityFirst.NAME}</h1>
           <p>Start Date {opportunityFirst.STARTDATE}</p>
           <p>End Date {opportunityFirst.ENDDATE}</p>
           <p>oppID {opportunityFirst.oppID}</p>


           <Link to ={`/session/${opportunityFirst.oppID}`}><button>session</button></Link>
           
           <Link to ={`/documents/${opportunityFirst.oppID}`}><button>upload doc</button></Link>

           <Link to ={`/experience/${opportunityFirst.oppID}`}><button>Update experience</button></Link>

           </div>

           <div>
           <h1>{opportunitySecond.NAME}</h1>
           <p>Start Date {opportunitySecond.STARTDATE}</p>
           <p>End Date {opportunitySecond.ENDDATE}</p>
           <p>oppID {opportunitySecond.oppID}</p>


           <Link to ={`/session/${opportunitySecond.oppID}`}><button>session</button></Link>
           
           <Link to ={`/documents/${opportunitySecond.oppID}`}><button>upload doc</button></Link>

           <Link to ={`/experience/${opportunitySecond.oppID}`}><button>Update experiencel</button></Link>

           </div>

           <div>
           <h1>{opportunityThird.NAME}</h1>
           <p>Start Date {opportunityThird.STARTDATE}</p>
           <p>End Date {opportunityThird.ENDDATE}</p>
           <p>oppID {opportunityThird.oppID}</p>

          

           <Link to ={`/session/${opportunityThird.oppID}`}><button>session</button></Link>
           
           <Link to ={`/documents/${opportunityThird.oppID}`}><button>upload doc</button></Link>

           <Link to ={`/experience/${opportunityThird.oppID}`}><button>Update experience</button></Link>
           </div>


           
           {/* <h2>{opportunityFirst.NAME}</h2>
           <p>{opportunityFirst.DESCRIPTION}</p>  */}
           {/* <NavLink exact="true" to={`/session/${opportunityFirst.oppID}`}>
           <button>Session Details</button>
           </NavLink> */}
           {/* <Session  
                    oppID={opportunityFirst.oppID}
                    session={session}
                    slotID={session.PLACEMENTSLOTID}

            /> */}

          {/*  <h2>{opportunitySecond.NAME}</h2>
           <p>{opportunitySecond.DESCRIPTION}</p>
           <NavLink exact="true" to={`/session/${opportunitySecond.oppID}`}>
           <button>Session Details</button>
           </NavLink>

           <h2>{opportunityThird.NAME}</h2>
           <p>{opportunityThird.DESCRIPTION}</p>
           <NavLink exact="true" to={`/session/${opportunityThird.oppID}`}>
           <button>Session Details</button>
           </NavLink>  */}
   

           
        </>
    );
};

export default Opportunity;