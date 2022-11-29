import React from 'react';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube';
import './RelatedVideo.css'

function RelatedVideo() {
    let { id } = useParams()
    const [relatedVideo, setRelatedVideo] = useState([])
    const [clickedVideo,setClickedVideo] = useState({})

function changeVideo() {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.REACT_APP_API_KEY}&part=snippet,player`)
    .then(res => res.json())
    .then(res => {
    setClickedVideo(res.items[0])
    console.log(clickedVideo)
    })    
    .catch(err => console.log(err))
}

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?id=${id}&relatedToVideoId=${id}&type=video&key=${process.env.REACT_APP_API_KEY}&part=snippet`)
            .then(res => res.json())
            .then(res => {
            console.log(res)
                setRelatedVideo(res.items)
        })    
        .catch(err => console.log(err))
    }, [id])
    // {console.log(relatedVideo, id)}
    return (
        <div id='relatedVideo'>
            {relatedVideo.length > 0 && relatedVideo.map((video)=>{
                return(
                    <ul>
                        <li>
                        <img src={video.snippet.thumbnails.medium.url} alt={id} ></img> 
                        <button onClick={changeVideo()}>
                        {video?.snippet?.channelTitle}
                        </button>
                        </li>
                    </ul>
                )
            })}
            {/* <div>
                {clickedVideo && <YouTube videoId={id} />}
            </div> */}
        </div>
    );
}

export default RelatedVideo;