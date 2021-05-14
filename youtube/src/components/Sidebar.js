import React from 'react'
import {Sidedata} from './Sidedata'
import './sidebar.css'

function Sidebar({isVisible}) {
    return (
        <nav className={isVisible?"sidebar active":"sidebar"}>
            <ul>
                {Sidedata.map((items,index)=>{
                    return(
                    (
                        <li key={index} className="sidebar_text">
                            {items.icon}
                            <span className="sidebar_title">{items.text}</span>
                        </li>
                    ));
                })}
            </ul>
        </nav>
    )
}

export default Sidebar
