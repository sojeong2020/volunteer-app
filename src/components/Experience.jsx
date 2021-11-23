import React from 'react';
import {updateExperience} from '../api';
import {useState} from 'react';
import { useParams } from 'react-router-dom';


const Experience = () => {

    const {oppID}= useParams();

    const [update, setUpdate]=useState([]);

    const submitForm = (event)=>{
        event.preventDefault();

        const data= {experience: update}

        updateExperience(oppID, data)
    }



    return (
        <div>
            <h1>Update user experience</h1>
            <form onSubmit={submitForm}>
            <input 
            type="text"
            onChange={(e)=>setUpdate(e.target.value)}
            placeholder={"experience"}
            />
            <button type="submit">update</button>
            </form>
        </div>
    );
};

export default Experience;