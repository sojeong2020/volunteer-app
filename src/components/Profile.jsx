import React from 'react';
import { getProfile } from '../api';
import { useState, useEffect} from 'react';


const Profile = () => {
 
    const[profile, setProfile]=useState([]);

    useEffect(()=>{
        getProfile().then((resultFromApi)=>{
            console.log("profileFromAPi",resultFromApi)
            setProfile(resultFromApi)
        }) 
    },[])

    
    return (
        <div>
            <h1>Profile!!!</h1>

            <p>FirstName :{profile.FirstName}</p>
            <p>LastName :{profile.LastName}</p>
            <p>Mobile :{profile.Mobile}</p> 
            <p>Email :{profile.Email}</p>
            <p>DOB :{profile.DOB}</p>
           
            <p>Address :{profile.Address}</p>
            <p>City :{profile.City}</p>
            <p>Postcode :{profile.Postcode}</p>
            
            <p>DaysJoined :{profile.DaysJoined}</p>
            <p>OppsJoined :{profile.OppsJoined}</p>
            <p>ProLoggedHours :{profile.ProLoggedHours}</p>
        </div>
    );
};

export default Profile;