import React from 'react';
import "./Sidebar.css";
import { Avatar, IconButton } from '@material-ui/core'

function Sidebarchat() {
    return (
        <div className='sidebarChat'>
                <Avatar/>
                <div className='sidebarChat_text'>
                    <h3>chat name</h3>
                    <p>last msg</p>
                </div>
                
            </div>
    )
}

export default Sidebarchat
