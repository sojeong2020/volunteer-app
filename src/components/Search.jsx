/* import React from 'react';

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
             <label>
                Search for opportunities
             <input 
             type="text"
             onChange={(event)=>setSearch(event.target.value)}
             placeholder="search"
            />
            </label>
            <button onClick={handleClick}>Search</button>
 
            
        
           
              <h2>{result.DESCRIPTION}</h2>  
           

        </div> 
    );
};

export default Search; */