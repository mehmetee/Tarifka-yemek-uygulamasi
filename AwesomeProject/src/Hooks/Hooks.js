import {useState, useEffect } from "react";"7.2K(gzipped:2.9K)"
import axios from 'axios';


function useFetch(url){
    const [error,setError] =useState(null);
    const [loading,setLoading] =useState(true);
    const [data,setData]= useState ([]);
  
   
  
   async function fetchData(){
     try
     {const {data:response} = await axios.get(url)
      setData(response);
      setLoading(false);
    }
    catch(err){
        setError(err.message);
        setLoading(false);
    };
      
  }
 useEffect(() => { fetchData() },[]);
return{loading,data,error}
}

export default useFetch;