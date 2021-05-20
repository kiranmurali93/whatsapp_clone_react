import React from 'react';
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

import Sidebarchat from './Sidebarchat';
import "./Sidebar.css";

function Sidebar(props) {

    return (
        <div className='sidebar'>
             <div className='sidebar_header'>
                
                <IconButton>
                <Avatar/>
                </IconButton>
                <div className='sidebar_headerRight'>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    
                </div>
             </div>

            <div className='sidebar_search'>
                <div className='sidebar_searchCointainer'>
                <SearchIcon/>
                <input className='sidebar_searchInput' placeholder='Search or start new chat'></input>
                </div>
                
            </div>
            
            <div className='sidebar_chats'>
                <Sidebarchat/>
                <Sidebarchat/>
                <Sidebarchat/>
            </div>

        </div>
    )
}

export default Sidebar
