import React from 'react';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import YouTube from 'react-youtube';

function Video() {
    let { id } = useParams()
    const [video, setVideo] = useState([])
    const [allComments, setAllComments] = useState([])
    const [comment, setComment] = useState({
        name: "",
        comment: ""
    })

    const handleTextChange = (e) => {
        setComment({...comment, [e.target.id]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setAllComments([...allComments, comment])
    }

    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?id=${id}&key=${process.env.REACT_APP_API_KEY}&part=snippet,player`)
            .then(res => res.json())
            .then(res => {
            setVideo(res.items[0])
            console.log(res.items[0])
            })    
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <YouTube videoId={id} />
            {/* <p>{video.snippet.title}</p> */}
            {/* <p><span>Description:</span> {video.snippet.description}</p> */}
            <form onsubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='name' id='name' onChange={handleTextChange}/>
                <br/>
                <label htmlFor='comment'>Comment</label>
                <input type='text' id='comment' onChange={handleTextChange} />
                <br/>
                <input type='submit' ></input>
            </form>
            <hr/>
            <ul>
                {allComments.map(comment => {
                    return (
                        <li><span>{comment.name}:</span> {comment.comment}</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Video;