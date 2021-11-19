import axios from "axios";


const volunteerApi = axios.create({
        baseURL: 'https://private-anon-f08a0228dc-teamkinetictechtest.apiary-proxy.com/techtest',
        headers: {
            'key': process.env.REACT_APP_API_KEY,
            'pwd': process.env.REACT_APP_PASSWORD
        }
    });

export const getOpportunities = (oppID,search) => {
        let path ='https://private-anon-431d9a1c9a-teamkinetictechtest.apiary-proxy.com/techtest/search.htm';
    
        if(search) path += `?recordsPerPage=1&recordsPage=${oppID}&lat=53.6786&lng=-2.5637&orderResultsBy=distance&search=${search[0]}&showShared=true&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9`;
        return volunteerApi
        .get(path)
        .then((response)=>{
            console.log("oppsFromApi",response.data[0].Results[0])
            return response.data[0].Results[0];
        }).catch((error)=>
        console.log("error>>>>",error.response))
    }; 

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
        

    