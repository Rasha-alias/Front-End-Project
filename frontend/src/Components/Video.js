import React from 'react';
import ReactPlayer from 'react-player';
import "./ComponentsStyle.css";

/*
  * A function (component) that representing a Video.
  * @return a short film about sustainable environment .
*/

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
