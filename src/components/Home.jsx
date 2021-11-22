import React from 'react';
import { getProfile } from '../api';
import { useState, useEffect} from 'react';
import '../style/home.css';



const Home = () => {
   
    const[profile, setProfile]=useState([]);

    useEffect(()=>{
        getProfile().then((resultFromApi)=>{
            console.log("profileFromAPi",resultFromApi)
            setProfile(resultFromApi)
        }) 

    },[])
    return (
        <div className="home">
            <h1>Home!!</h1>
            <h2>Name :{profile.FirstName}</h2>
            <h2>{profile.BadgeRankNextText}</h2>
            <h2>Hours Logged :{profile.VolLoggedHours}</h2>
            <h2>ThumbsUp :{profile.ThumbsUp}</h2>  
            

           
        </div>
    );
};

export default Home;