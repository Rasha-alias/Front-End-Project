import React from 'react';
import ReactPlayer from 'react-player';
import "./ComponentsStyle.css";

const Vedio = () => {

    return(
        <div >

            < ReactPlayer  url="https://youtu.be/JaeiGTZB5sI"     
                           className="video"
                           height="100%"
                           width="100%"
                           controls
            />

        </div>
    )
}

export default Vedio;
