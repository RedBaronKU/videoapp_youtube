import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavRight.css'
import * as RiIcons from 'react-icons/ri'
import * as mdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'

function NavRight() {
    return (
        <div className="nav_right">
            <RiIcons.RiVideoUploadFill className="right_icon"/>
            <mdIcons.MdDialpad className="right_icon"/>
            <AiIcons.AiFillBell className="right_icon"/>
        </div>
    )
}

export default NavRight
