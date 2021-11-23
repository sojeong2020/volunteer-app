import axios from "axios";


const volunteerApi = axios.create({
        baseURL: 'https://private-anon-f08a0228dc-teamkinetictechtest.apiary-proxy.com/techtest',
        headers: {
            'key': process.env.REACT_APP_API_KEY,
            'pwd': process.env.REACT_APP_PASSWORD
        }
    });

export const getProfile = ()=>{
    return volunteerApi
    .get('https://private-anon-9bf83f9908-teamkinetictechtest.apiary-proxy.com/techtest/volunteer.htm?action=getProfile&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9')
    .then((response)=>{
        console.log("profile",response.data[0].results)
        return response.data[0].results
    }).catch((error)=>
    console.log("error>>>>",error.response))

}

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
        return volunteerApi
        .get('/opps.htm?action=oppDetails&oppID=1&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9')
        .then((response)=>{
           // console.log("oppid-1",response.data[0].Results[0])
            return response.data[0].Results[0];
        }).catch((error)=>
        console.log("error>>>>",error.response))
    }; 
    
  export const getOpportunitySecond = () => {
        let path ='/opps.htm?action=oppDetails&oppID=2&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9';
        return volunteerApi
        .get(path)
        .then((response)=>{
            //console.log("oppid-2FromApi",response.data[0].Results[0])
            return response.data[0].Results[0];
        }).catch((error)=>
        console.log("error>>>>",error.response))
    }; 
    
export const getOpportunityThird = () => {
        let path ='/opps.htm?action=oppDetails&oppID=3&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9';
        return volunteerApi
        .get(path)
        .then((response)=>{
            //console.log("oppid-3FromApi",response.data[0].Results[0])
            return response.data[0].Results[0];
        }).catch((error)=>
        console.log("error>>>>",error.response))
    };  
     
        
export const getSession = (oppID) => {
           
            let path =`/opps.htm?action=sessionDetails&loggedIn=1&oppID=${oppID}&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9`;
        
            return volunteerApi
            .get(path)
            .then((response)=>{
                console.log("session",response.data[0].Results[0])
                return response.data[0].Results[0];
            }).catch((error)=>
            console.log("error>>>>",error.response))
        };

export const updateJoin =(slotID)=>{
    const updatingJoin={slotID:slotID}
        
      
    let path='https://private-anon-d6daab494a-teamkinetictechtest.apiary-proxy.com/techtest/opps.htm?action=joinSession&oppID=1&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9&'
    return volunteerApi
            .post(path,updatingJoin)
            .then((response)=>{
                console.log("posting new slotID")
                console.log("updateJoin",response.data[0].Results[0])
                return response.data[0].Results[0];
            }).catch((error)=>
            console.log("error>>>>",error.response))
}  

 export const postDocuments =(oppID,dataArray)=>{
        axios
        .post(`https://private-anon-d6daab494a-teamkinetictechtest.apiary-proxy.com/techtest/opps.htm?action=putOppVolunteerDoc&oppID=${oppID}&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9&`, 
           dataArray, {
            headers: {
              "Content-Type": "multipart/form-data",
              'key': process.env.REACT_APP_API_KEY,
              'pwd': process.env.REACT_APP_PASSWORD
            }
          })
          .then((response) => {
            // successfully uploaded response
            console.log("posting new doc")
            console.log(response.data[0])
            return response.data[0]
          })
          .catch((error) => {
            // error response
            console.log("error>>>>",error.response)
          });
}

/* export const updateExperience =(oppID,data)=>{
    axios
    .put(`https://private-anon-d6daab494a-teamkinetictechtest.apiary-proxy.com/techtest/volunteer.htm?action=putOppExperience&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9&oppID=${oppID}`,
    data,{
        headers: {
          'key': process.env.REACT_APP_API_KEY,
          'pwd': process.env.REACT_APP_PASSWORD
        }
      })
    .then((response) => {
        // successfully uploaded response
        console.log("updating")
        console.log(response.data[0])
        return response.data[0]
      })
      .catch((error) => {
        // error response
        console.log("error>>>>",error.response)
      });
} */

export const updateExperience =(oppID,data)=>{
    let path=`/volunteer.htm?action=putOppExperience&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9&oppID=${oppID}`
    return volunteerApi
    .put(path,data)
    .then((response) => {
        // successfully uploaded response
        console.log("updating")
        console.log(response)
        return response
      })
      .catch((error) => {
        // error response
        console.log("error>>>>",error.response)
      });
}
