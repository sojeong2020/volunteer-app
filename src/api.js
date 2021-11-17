import axios from "axios";

const config = {
    params: {
            action:"oppDetails" ,
            oppID: 1,
            GUID: "846E2514-A679-41D1-AB3B-DEA93219F4B9"
        },
	headers: {
		'key': process.env.REACT_APP_API_KEY,
        'pwd': process.env.REACT_APP_PASSWORD
	}
    
}; 
 
 axios
	.get("https://private-anon-f08a0228dc-teamkinetictechtest.apiary-proxy.com/techtest/opps.htm", config)
    .then((response) => {
        console.log("name>>>>",response.data[0].Results[0].NAME)
        console.log("description>>>>",response.data[0].Results[0].DESCRIPTION)
    })
	.catch((error) => console.log("error >>>>>",error.response)); 

//test
 

 