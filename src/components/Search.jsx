import React from 'react';
import { useState } from 'react';
import {getSearch} from '../api';

const Search = () => {

const [search,setSearch]=useState("");
console.log("searchterm",search)

const [result,setResult]=useState([]);
console.log("result",result)
       
   
    const handleClick=(event)=>{
        event.preventDefault();

     getSearch(search).then((resultFromApi)=>{
         setResult(resultFromApi)
     })
    
    }
        
return (
         <div>
            
             <input 
             type="text"
             onChange={(event)=>setSearch(event.target.value)}
             placeholder="search"
            />
            <button onClick={handleClick}>Search</button>

            
            <h2>Name: {result.NAME}</h2>
            <h2>Name-Welsh: {result.NAMEALTLANG}</h2>
            <h2>Discription:{result.DESCRIPTION}</h2>
            <h2>Discription-Welsh: {result.DESCRIPTIONALTLNG}</h2> 

        </div> 
    );
};

export default Search;