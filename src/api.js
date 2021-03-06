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
    .get('/volunteer.htm?action=getProfile&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9')
    .then((response)=>{
        console.log("profile",response.data[0].results)
        return response.data[0].results
    }).catch((error)=>
    console.log("error>>>>",error.response))

}


 export const getSearch = (search) => {
        let path =''
    
        if(search) path += `/search.htm?recordsPerPage=1&recordsPage=1&lat=52.46&lng=-1.92&orderResultsBy=distance&search=${search}&showShared=true&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9`;
        return volunteerApi
        .get(path)
        .then((response)=>{
            return response.data[0].Results[0];
        }).catch((error)=>
        console.log("error>>>>",error.response))
    }; 

 
export const getOpportunityFirst = () => {
        return volunteerApi
        .get('/opps.htm?action=oppDetails&oppID=1&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9')
        .then((response)=>{
            return response.data[0].Results[0];
        }).catch((error)=>
        console.log("error>>>>",error.response))
    }; 

    
export const getOpportunitySecond = () => {
        let path ='/opps.htm?action=oppDetails&oppID=2&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9';
        return volunteerApi
        .get(path)
        .then((response)=>{
            return response.data[0].Results[0];
        }).catch((error)=>
        console.log("error>>>>",error.response))
    }; 

    
export const getOpportunityThird = () => {
        let path ='/opps.htm?action=oppDetails&oppID=3&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9';
        return volunteerApi
        .get(path)
        .then((response)=>{
            return response.data[0].Results[0];
        }).catch((error)=>
        console.log("error>>>>",error.response))
    };  
     
        
export const getSession = (oppID) => {
           let path =`/opps.htm?action=sessionDetails&loggedIn=1&oppID=${oppID}&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9`;
           return volunteerApi
            .get(path)
            .then((response)=>{
                return response.data[0].Results;
            }).catch((error)=>
            console.log("error>>>>",error.response))
        };


export const putJoin =(oppID,placementSlotId,data)=>{
            let path=`/opps.htm?action=joinSession&oppID=${oppID}&GUID=846E2514-A679-41D1-AB3B-DEA93219F4B9&slotID=${placementSlotId}`
            return volunteerApi
            .post(path,data)
            .then((response)=>{
                console.log("posting new slotID")
                return response.data[0].results;
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
            return response.data[0]
          })
          .catch((error) => {
            // error response
            console.log("error>>>>",error.response)
          });
}

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
        console.log("error>>>>",error.response)
      });
}
