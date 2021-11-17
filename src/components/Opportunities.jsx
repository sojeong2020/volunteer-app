import React from 'react';
import { useState,useEffect } from 'react';
import { getOpportunites } from '../api';

const Opportunities = () => {
    const[opportunities, setOpportunities]=useState([]);

    console.log(opportunities)
    useEffect(()=>{
        /* getOpportunites().then((opps)=>{
            setOpportunities(opps)
        }) */
    },[])

    return (
        <div>
           <p>Here are opportunities!</p> 
        </div>
    );
};

export default Opportunities;