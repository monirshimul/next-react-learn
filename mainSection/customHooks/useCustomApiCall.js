import {useState, useEffect} from 'react';
import axios from 'axios'

const useCustomApiCall = (url) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        const apiCalling = async ()=>(
            await axios.get(url)
            .then(res=>res.data)
            .then(val=>setData(val))
        )
        apiCalling();
    },[])


    return data;

}

export default useCustomApiCall
