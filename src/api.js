import axios from "axios";


const volunteerApi = axios.create({
        baseURL: 'https://private-anon-f08a0228dc-teamkinetictechtest.apiary-proxy.com/techtest',
        headers: {
            'key': process.env.REACT_APP_API_KEY,
            'pwd': process.env.REACT_APP_PASSWORD
        }
    });

export const getOpportunity = (oppID) => {
        let path ='/opps.htm';
    
        if(oppID) path += `?action=oppDetails&oppID=${oppID}&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9`;
        return volunteerApi
        .get(path)
        .then((response)=>{
            console.log(response.data[0].Results[0])
            return response.data[0].Results[0];
        }).catch((error)=>
        console.log("error>>>>",error.response))
    }; 
    
        
export const getSession = (oppID) => {
           
            let path ='/opps.htm';
        
            if(oppID) path += `?action=sessionDetails&loggedIn=1&oppID=${oppID}&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9`;
            return volunteerApi
            .get(path)
            .then((response)=>{
                console.log("session",response.data[0].Results[0])
                return response.data[0].Results[0];
            }).catch((error)=>
            console.log("error>>>>",error.response))
        };
        

    