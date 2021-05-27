import React from 'react'
import './home.css'
import '../components/Videolist'
import { Videolist } from '../components/Videolist';
import {Avatar} from '@material-ui/core';


function Home({isVisible}) {
    console.log(isVisible);
    return (
        <div className={isVisible?"sidevisible maintag":"maintag"}>
            <h1>Home</h1>
            <div className="videolist">
                {Videolist.map((items,index)=>{
                    return(
                    <div className="video_card">
                        <img src={items.thumbnail} alt={items.title} className="video_thumbnail"/>
                        <div className="video_info">
                            <Avatar
                                className="postAvatar"
                                alt='icon'
                                src={items.uploader_pic}>
                            </Avatar>
                            <div className="video_text">
                                <h5 className="video_title">{items.title}</h5>
                                <p className="video_uploader">{items.uploader_name}</p>
                                <p classname="video_views_time">{items.views}/./{items.upload_time}</p>
                            </div>
                        </div>
                    </div> 
                    )   
                })}
                
                    
                
            </div>
        </div>
    )
}

export default Home
