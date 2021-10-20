import Sidebar from 'components/sidebar';
import React from 'react';


const PrivateLayout = ({children}) => {
    return (
        <div className = 'mainprly'>
        <Sidebar/>
        <main className='contentprly'>{children}</main>
        
        </div>
    )
}

export default PrivateLayout
