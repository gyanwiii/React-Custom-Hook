import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [load, setLoad] = useState(true);
    const fetchData=useCallback(()=>{
        setLoad(true);
        if(!navigator.onLine){
            setError("Failed to fetch");
            setLoad(false);
            return;
        }
        setError(null);
        fetch(url).then((resp)=>{
            if(!resp.ok){
                throw new Error("Failed to fetch");
            }
            return resp.json();
        }).then((res)=>{
            setData(res);
        }).catch((err)=>{
            setError(err.message);
        }).finally(()=>{
            setLoad(false);
        });
    },[url])
    
    useEffect(()=>{
        fetchData();
    },[fetchData]);
    return {data,load,error};
};

export default useFetch;