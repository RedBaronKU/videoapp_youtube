import React from 'react'
import './home.css'
import '../components/Videolist'
import { Videolist } from '../components/Videolist';
function Home({isVisible}) {
    console.log(isVisible);
    return (
        <div className={isVisible?"sidevisible maintag":"maintag"}>
            <h1>Home</h1>
            <div className="videolist">
                <h2>Here will be the videos.</h2>
                {Videolist.map((items,index)=>{
                    return(
                    <div className="video_card">
                        <img src={items.thumbnail} className="video_thumbnail"/>
                        
                        <p className="video_title">{items.title}</p>
                        <p className="video_uploader">{items.uploader_name}</p>
                        <p classname="video_time">{items.upload_time}</p>
                    </div> 
                    )   
                })}
                
                    
                
            </div>
        </div>
    )
}

export default Home
