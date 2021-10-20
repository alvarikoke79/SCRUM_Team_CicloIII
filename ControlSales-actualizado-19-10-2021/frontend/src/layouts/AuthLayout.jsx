import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div className='mainAuly'>
        
        <div  className ='childAutly'>
        {children}
        </div>  
        </div>
    );
};

export default AuthLayout
