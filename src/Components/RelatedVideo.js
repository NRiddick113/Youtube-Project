import React from 'react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RelatedVideo() {
    let { id } = useParams()
    const [relatedVideo, setRelatedVideo] = useState([])

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?id=${id}&relatedToVideoId=0-RZtb7mc_4&type=video&key=${process.env.REACT_APP_API_KEY}&part=snippet`)
            .then(res => res.json())
            .then(res => {
            setRelatedVideo(res.items)
        })    
        .catch(err => console.log(err))
    }, [])
    {console.log(relatedVideo)}
    return (
        <div>
            {relatedVideo.map((video)=>{
                return(
                    <ul>
                        <li>
                        <img src={video.snippet.thumbnails.medium.url} alt={id} ></img> 
                        <button>
                        {video?.snippet?.channelTitle}
                        </button>
                        </li>
                    </ul>
                )
            })}
        </div>
    );
}

export default RelatedVideo;