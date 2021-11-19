import React from 'react';
import { useState, useEffect } from 'react';
import {getOpportunities} from '../api';

const Opportunities = () => {

    let search=["football"]
    let oppID=1
   const[opportunities, setOpportunities]=useState([]);

    console.log("opps",opportunities)
   
    useEffect(()=>{
        getOpportunities(oppID,search[0]).then((resultFromApi)=>{
            setOpportunities(resultFromApi)
            })
        },[oppID,search[0]]) 

    return (
        <div>
            <h1>OPPS</h1>
            <h2>Name: {opportunities.NAME}</h2>
            <h2>Name-Welsh: {opportunities.NAMEALTLANG}</h2>
            <h2>Discription:{opportunities.DESCRIPTION}</h2>
            <h2>Discription-Welsh: {opportunities.DESCRIPTIONALTLNG}</h2> 

        </div>
    );
};

export default Opportunities;