import React from 'react'
import './NavRight.css'
import * as RiIcons from 'react-icons/ri'
import * as mdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'

function NavRight() {
    return (
        <div className="nav_right">
            <RiIcons.RiVideoUploadFill/>
            <mdIcons.MdDialpad/>
            <AiIcons.AiFillBell/>
        </div>
    )
}

export default NavRight
