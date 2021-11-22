import axios from "axios";


const volunteerApi = axios.create({
        baseURL: 'https://private-anon-f08a0228dc-teamkinetictechtest.apiary-proxy.com/techtest',
        headers: {
            'key': process.env.REACT_APP_API_KEY,
            'pwd': process.env.REACT_APP_PASSWORD
        }
    });

export const getSearch = (oppID,search) => {
        let path ='https://private-anon-431d9a1c9a-teamkinetictechtest.apiary-proxy.com/techtest/search.htm';
    
        if(search) path += `?recordsPerPage=1&recordsPage=${oppID}&lat=53.6786&lng=-2.5637&orderResultsBy=distance&search=${search[0]}&showShared=true&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9`;
        return volunteerApi
        .get(path)
        .then((response)=>{
            console.log("searchFromApi",response.data[0].Results[0])
            return response.data[0].Results[0];
        }).catch((error)=>
        console.log("error>>>>",error.response))
    }; 

export const getOpportunityFirst = () => {
        let path ='/opps.htm?action=oppDetails&oppID=1&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9';
        return volunteerApi
        .get(path)
        .then((response)=>{
            console.log("oppid-1FromApi",response.data[0].Results[0])
            return response.data[0].Results[0];
        }).catch((error)=>
        console.log("error>>>>",error.response))
    }; 
    
 /* export const getOpportunitySecond = () => {
        let path ='/opps.htm?action=oppDetails&oppID=2&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9';
        return volunteerApi
        .get(path)
        .then((response)=>{
            console.log("oppid-2FromApi",response.data[0].Results[0])
            return response.data[0].Results[0];
        }).catch((error)=>
        console.log("error>>>>",error.response))
    }; 
    
export const getOpportunityThird = () => {
        let path ='/opps.htm?action=oppDetails&oppID=3&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9';
        return volunteerApi
        .get(path)
        .then((response)=>{
            console.log("oppid-3FromApi",response.data[0].Results[0])
            return response.data[0].Results[0];
        }).catch((error)=>
        console.log("error>>>>",error.response))
    };  */
     
        
export const getSession = () => {
           
            let path ='/opps.htm?action=sessionDetails&loggedIn=1&oppID=1&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9';
        
            return volunteerApi
            .get(path)
            .then((response)=>{
                console.log("session",response.data[0].Results[0])
                return response.data[0].Results[0];
            }).catch((error)=>
            console.log("error>>>>",error.response))
        };
        

    