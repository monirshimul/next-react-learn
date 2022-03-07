import React from 'react'
import useCustomApiCall from '../mainSection/customHooks/useCustomApiCall'

const CustomApi = () => {

    const apiCall = useCustomApiCall('https://jsonplaceholder.typicode.com/users');
    console.log("===============",apiCall)

    return (
        <div>
            {apiCall.map((val,ind)=>(
                <>
                    <h5>{val.name}</h5>
                
                </>
            ))}
        </div>
    )
}

export default CustomApi
