import React, { useState} from 'react';
import {postDocuments} from '../api';
import {useParams} from 'react-router-dom';

const Documents = () => {
    const {oppID}=useParams();
    console.log(oppID,"OPPIDfromDocuments")
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [selectedFile, setSelectedFile]=useState();

     
    const submitForm = (event) => {
        event.preventDefault();
    
        const dataArray = new FormData();
        dataArray.append("Name", name);
        dataArray.append("Description", description);
        dataArray.append("selectedFile", selectedFile);

        postDocuments(oppID,dataArray)

    };

 
    
 return (
        <div>
            <h1>Qualifications, ID, and other suupporting documents</h1>
            <form onSubmit={submitForm}>
            <input
                 type="text"
                 onChange={(e)=>setName(e.target.value)}
                 placeholder={"Name"}
                /> 
                <br />

                <input
                 type="text"
                 onChange={(e)=>setDescription(e.target.value)}
                 placeholder={"Description"}

                />
                <br/>

                <input 
                 type="file"
                 
                 onChange={(e)=>setSelectedFile(e.target.files)} />
                 <br />

                 <button type="submit" >Submit</button>
            </form>  

             
        </div>
    );
};

export default Documents;