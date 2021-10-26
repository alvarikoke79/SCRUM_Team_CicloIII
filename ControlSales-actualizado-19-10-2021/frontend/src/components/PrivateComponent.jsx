import { useUser } from 'context/userContext';
import React from 'react';

const PrivateComponent=({roleList,children})=>{
    const {userData} =useUser();
    console.log("userData en el privecomponent", userData)
    if(roleList.includes(userData.rol) && roleList.includes(userData.estado)){
        return children;
    }
    
    return(
        <>

        </>
    )
}

export default PrivateComponent;