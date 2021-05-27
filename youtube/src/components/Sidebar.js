//import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {Sidedata} from './Sidedata';
import './sidebar.css';

function Sidebar({isVisible}) {
    return(
        <nav className={isVisible?"sidebar active":"sidebar"}>
            <ul className="sidebar_items">
                {Sidedata.map((items,index)=>{
                    return(
                        <li key={index} className="sidebar_text">
                            <span className="side_icons">{items.icon}</span>
                            <span className="sidebar_title"> {items.title}</span>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Sidebar
