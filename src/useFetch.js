import { useState, useEffect } from "react"
export default  function useFetch(url, savedData){
   
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(()=>{ if(savedData){ return}
       ( async ()=>{
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            }
            catch(error){
                setError(error)
            }            
        })()
    }, [url,savedData])
    
    return {data,error};
}