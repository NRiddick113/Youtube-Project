import React from 'react';
import { useState } from 'react';
import Video from './Video';
import './Home.css'


function Home() {

    const [text, setText] = useState("")
    // const [search, setSearch] = useState("")
    const [videos, setVideos] = useState([])

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = () => {
        // setSearch(text)

        if (text === ""){
            setVideos([])
        } else { 
            fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${text}&key=${process.env.REACT_APP_API_KEY}&part=snippet`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setVideos(res.items)
            })
            .catch(err => console.log(err))
        }
        console.log(videos)
    }

    return (
        <div>
            <input type='text' placeholder='Enter search' onChange={handleTextChange} />
            <input type='submit' onClick={handleSubmit} />
            {
                //Error message if nothing searched
                videos.length === 0 && <p>No Search Results Yet! Please submit a search above!</p> 
            }
            {
                videos.map((video) => {
                    return (
                        <div>
                      <img src={video.snippet.thumbnails.medium.url} alt={text}></img>  
                    <p>{video.snippet.title}</p>
                    </div>
                    )
                })
            }
        </div>
    );
}

export default Home;