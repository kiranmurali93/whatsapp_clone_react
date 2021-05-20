import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MicIcon from '@material-ui/icons/Mic';
import './Chatsec.css'


function Chatsec() {
    return (
        <div className='chatsec_cointainer'>
            <div className='chatsec_header'>
                <div className='chatsec_header_left'>
                    <Avatar/>
                    <div className ='chatsec_header_left_content'>
                        <h3>Chat name</h3>
                        <p>last seen</p>
                    </div>
                    
                </div>
                <div className='chatsec_header_right'>
                    <SearchIcon />
                    <MoreVertIcon />
                </div>

            </div>

            <div className = 'chatsec_content'>


            </div>

            <div className='chatsec_msg'>
                <div className='chatsec_msg_left'>
                    <EmojiEmotionsOutlinedIcon />
                    <AttachFileOutlinedIcon />
                </div>
                <div className='chatsec_msg_input'>
                    <input placeholder='Type a message' className='chatsec_msg_inputtag'></input>
                </div>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chatsec
